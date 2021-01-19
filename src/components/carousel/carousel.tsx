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
  const [active, setActive] = useState(0);
  const timeOut = useRef<NodeJS.Timeout>();

  useEffect(() => {

    timeOut.current = setTimeout(() => {
      handleNextImage();
    }, slideTime * 1000);
  
    return () => {
      clearTimeout(timeOut.current!);
    };
  }, [active]);


  const handleNextImage = () => {
    if (active === images.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };
  
  const handlePreviousImage = () => {
    if (!active) {
      setActive(images.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  return (
    <div className="row center-xs">
      <div className="col-xs-12">
        <div className={style.carousel}>
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
          <div
            className={`${style.slider} `}
            style={{
              transform: `translate(${active * -(100 / images.length)}%, 0)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((image, i) => (
              <Slide key={image} image={image} imageText={imagesText[i]} />
            ))}
          </div>
          <Dots
            images={images}
            activeIndex={active}
            handleActiveDot={(index: number) => setActive(index)}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
