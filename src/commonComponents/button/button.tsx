/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import style from './button.module.scss';

type Props = {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
  propsClass?: string;
};

const Button: FC<Props> = ({
  children = 'button',
  type = 'button',
  handleClick,
  propsClass,
}) => {
  return (
    <button className={`${style.button} ${propsClass}`} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
