import React, { FC } from 'react';
import style from './mainBody.module.scss';

type Props = {
  children: React.ReactNode;
  propsClass?: string;
};

const MainBody: FC<Props> = ({ propsClass, children }) => {
  return <div className={`${style.mainBody} ${propsClass}`}>{children}</div>;
};

export default MainBody;
