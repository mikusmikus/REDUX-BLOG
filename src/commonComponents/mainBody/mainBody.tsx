import React, { FC, useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import style from './mainBody.module.scss';

type Props = {
  children: React.ReactNode;
  propsClass?: string;
};

const MainBody: FC<Props> = ({ propsClass, children }) => {
  
  const { lightTheme } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: lightTheme ? 'white' : '#cccccc',
  };

  return (
    <div style={themeStyles} className={`${style.mainBody} ${propsClass}`}>
      {children}
    </div>
  );
};

export default MainBody;
