import React, { FC } from 'react';
import style from './button.module.scss';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'success' | 'warning';

type Props = {
  children?: React.ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  color?: ButtonColor;
  handleClick?: () => void;
};

const Button: FC<Props> = ({
  children = 'button',
  type = 'button',
  handleClick,
  size = 'medium',
  color = 'primary',
}) => {


  return (
    <button
      className={`${style.button} ${style[size]} ${style[color]}`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
