import React, { FC } from 'react';
import style from './label.module.scss';

type Props = {
  children?: React.ReactNode;
  htmlFor?: string;
};

const Label: FC<Props> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={style.label}>
      {children}
    </label>
  );
};

export default Label;
