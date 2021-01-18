import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';
import style from './carousel.module.scss';

export const images: string[] = [
  'https://images.hdqwalls.com/download/best-nature-image-1440x900.jpg',
  'https://i.ytimg.com/vi/bCyEstrdg4E/maxresdefault.jpg',
  'https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://wow.zamimg.com/uploads/blog/images/20516-afterlives-ardenweald-4k-desktop-wallpapers.jpg',
];

const Carousel = () => {
  const [active, setActive] = useState(0);
  const timeOut = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeOut.current = setTimeout(() => {
      handleNextImage();
    }, 4000);
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
            style={{ transform: `translate(${active * -(100 / images.length)}%, 0)` }}
          >
            {images.map((image) => (
              <div
                key={image}
                style={{ backgroundImage: `url(${image})` }}
                className={`${style.slide}`}
              >
                <div className={style.text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore et quia at
                  eum maxime, molestiae facere, recusandae doloribus eligendi, accusantium
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
