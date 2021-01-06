import React, { FC } from 'react';
import style from './image.module.scss';

type Props = {
  src?: string;
  alt? :string
};

const Image: FC<Props> = ({ src, alt }) => {
  return (
    <div className={style.imageWrapper}>
      <img src={src} alt={alt} className={style.image} />
    </div>
  );
};

export default Image;
