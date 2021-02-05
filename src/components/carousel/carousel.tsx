import React, { useEffect, useRef, useState, FC } from 'react';
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';
import Dots from './dots';
import Slide from './slide';
import style from './carousel.module.scss';

type Props = {
  images: string[];
  imagesText?: string[];
  slideTime?: number;
};
const Carousel: FC<Props> = ({ images, imagesText = [], slideTime = 3 }) => {
  const [sliderImages, setSliderImages] = useState<string[]>([]);
  const [active, setActive] = useState(0);
  const ImageText= useRef<string[]>([]);
  const onInit = useRef(true);
  const timeOut = useRef<NodeJS.Timeout>();
  const startPosition = useRef(0);
  const translateTime = useRef(`all ${0.5}s`);

  useEffect(() => {
    const changedImageArray = [...images];
    changedImageArray.push(images[0]);
    changedImageArray.splice(0, 0, images[images.length - 1]);
    setSliderImages(changedImageArray);

    const changedTextarray = [...imagesText];
    changedTextarray.push(imagesText[0]);
    changedTextarray.splice(0, 0, imagesText[imagesText.length - 1]);
    ImageText.current = changedTextarray;
    if (onInit.current) {
      translateTime.current = 'none';
      const middleSlide = Math.floor(changedImageArray.length / 2);
      setActive(middleSlide);
      onInit.current = false;
    }
  }, []);

  useEffect(() => {
    
    timeOut.current = setTimeout(() => {
      translateTime.current = `all ${0.5}s`;
      handleNextImage();
    }, slideTime * 1000);

    return () => {
      clearTimeout(timeOut.current!);
    };
  }, [active]);

  const handleNextImage = () => {
    if (active === sliderImages.length - 1) {
      return;
    }
    setActive(active + 1);
  };

  const handlePreviousImage = () => {
    if (!active) {
      return;
    }
    setActive(active - 1);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    translateTime.current = `all ${0.5}s`;
    startPosition.current = e.screenX;
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (Math.abs(startPosition.current - e.screenX) < 100) {
      return;
    }

    if (startPosition.current < e.screenX) {
      handlePreviousImage();
    } else {
      handleNextImage();
    }
  };

  const handleTransitionEnd = () => {
    if (!active) {
      translateTime.current = 'none';
      setActive(sliderImages.length - 2);
    }
    if (active === sliderImages.length - 1) {
      translateTime.current = 'none';
      setActive(1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startPosition.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (Math.abs(startPosition.current - e.changedTouches[0].clientX) < 50) {
      return;
    }
    if (startPosition.current < e.changedTouches[0].clientX) {
      handlePreviousImage();
    } else {
      handleNextImage();
    }
  };

  const styles = {
    transform: `translate(${active * -(100 / sliderImages.length)}%, 0)`,
    width: `${sliderImages.length * 100}%`,
    transition: translateTime.current,
  };
  return (
    <div className="row center-xs">
      <div className="col-xs-12">
        <div
          className={style.carousel}
          onMouseDown={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleMouseDown(e)}
          onMouseUp={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleMouseUp(e)}
          onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => handleTouchStart(e)}
          onTouchEnd={(e: React.TouchEvent<HTMLDivElement>) => handleTouchEnd(e)}
          onTransitionEnd={() => handleTransitionEnd()}
          aria-hidden={true}
        >
          <button
            type="button"
            onClick={() => handlePreviousImage()}
            className={`${style.arrow} ${style.arrowLeft}`}
          >
            <IoMdArrowDropleftCircle />
          </button>
          <button
            type="button"
            onClick={() => handleNextImage()}
            className={`${style.arrow} ${style.arrowRight}`}
          >
            <IoMdArrowDroprightCircle />
          </button>
          <div className={`${style.slider} `} style={styles}>
            {sliderImages.map((image, i) => (
              <Slide key={`${image + i}`} image={image} imageText={ImageText.current[i]} />
            ))}
          </div>
          <Dots
            images={sliderImages}
            activeIndex={active}
            handleActiveDot={(index: number) => setActive(index)}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
