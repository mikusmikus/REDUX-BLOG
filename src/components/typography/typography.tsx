/* eslint-disable react/no-danger */
import React, { FC } from 'react';
import style from './typography.module.scss';

type Props = {
  children: React.ReactNode;
  propsClass?: string;
};

export const H1: FC<Props> = ({ children, propsClass, }) => {
  return <h1 className={`${style.heading1} ${propsClass}`}>{children}</h1>;
};

export const H2: FC<Props> = ({ children, propsClass }) => {
  return <h2 className={`${style.heading2} ${propsClass}`}>{children}</h2>;
};

export const H3: FC<Props> = ({ children, propsClass }) => {
  return <h3 className={`${style.heading3} ${propsClass}`}>{children}</h3>;
};
export const H4: FC<Props> = ({ children, propsClass }) => {
  return <h4 className={`${style.heading4} ${propsClass}`}>{children}</h4>;
};
export const H5: FC<Props> = ({ children, propsClass }) => {
  return <h5 className={`${style.heading5} ${propsClass}`}>{children}</h5>;
};
export const P1: FC<Props> = ({ children, propsClass }) => {
  return <p className={`${style.Paragraph1} ${propsClass}`}>{children}</p>;
};
export const P2: FC<Props> = ({ children, propsClass }) => {
  return <p className={`${style.Paragraph2} ${propsClass}`}>{children}</p>;
};
