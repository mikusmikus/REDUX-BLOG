import React, { FC } from 'react';
import style from './image.module.scss';

type Props = {
  src?: string;
  alt? :string
  propsClass?: string;
};

const Image: FC<Props> = ({ src, alt, propsClass }) => {
  return (
    <div className={`${style.imageWrapper} ${propsClass}`}>
      <img src={src} alt={alt} className={style.image} />
    </div>
  );
};

export default Image;
