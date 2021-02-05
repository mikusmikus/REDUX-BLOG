import React, { FC } from 'react';
import { VscDebugBreakpointData, VscDebugBreakpointDataUnverified } from 'react-icons/vsc';
import style from './dots.module.scss';

type Props = {
  images: string[];
  activeIndex: number;
  handleActiveDot: (index: number) => void;
};

const Dots: FC<Props> = ({ images, activeIndex, handleActiveDot }) => {
  return (
    <div className={style.dotWrapper}>
      {images.map((_, index) => (
        <>
          {index > 0 && index < images.length - 1 && (
            <button
              key={_}
              className={style.dot}
              type="button"
              onClick={() => handleActiveDot(index)}
            >
              {index === activeIndex ? (
                <VscDebugBreakpointData />
              ) : (
                <VscDebugBreakpointDataUnverified />
              )}
            </button>
          )}
        </>
      ))}
    </div>
  );
};

export default Dots;
