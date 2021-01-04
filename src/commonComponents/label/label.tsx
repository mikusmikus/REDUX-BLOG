import React, { FC } from 'react';
import style from './label.module.scss';

type Props = {
  children?: React.ReactNode;
  propsClass?: string;
  htmlFor?: string;
};

const Label: FC<Props> = ({ children, htmlFor, propsClass }) => {
  return (
    <label htmlFor={htmlFor} className={`${style.label} ${propsClass}`}>
      {children}
    </label>
  );
};

export default Label;
