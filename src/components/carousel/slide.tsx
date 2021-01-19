import React, { FC } from 'react';
import style from './slide.module.scss';

type Props = {
  image: string;
  imageText?: string;
};

const Slide: FC<Props> = ({ image, imageText }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={`${style.slide}`}>
      {imageText && <div className={style.text}>{imageText}</div>}
    </div>
  );
};

export default Slide;
