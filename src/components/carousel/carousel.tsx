import React, { useEffect, useRef, useState } from 'react';
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';
import { CAROUSEL_IMAGES } from '../../data/images';
import style from './carousel.module.scss';


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
    if (active === CAROUSEL_IMAGES.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };
  const handlePreviousImage = () => {
    if (!active) {
      setActive(CAROUSEL_IMAGES.length - 1);
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
            style={{ transform: `translate(${active * -(100 / CAROUSEL_IMAGES.length)}%, 0)`, width : `${CAROUSEL_IMAGES.length * 100}%` }}
          >
            {CAROUSEL_IMAGES.map((image) => (
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
