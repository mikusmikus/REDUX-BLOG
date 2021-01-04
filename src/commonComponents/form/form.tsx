import React, { FC } from 'react';
import style from './form.module.scss';

type Props = {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  propsClass?: string;
  children: React.ReactNode;
};

const Form: FC<Props> = ({ handleSubmit, children, propsClass }) => {
  return (
    <form action="" onSubmit={handleSubmit} className={`${style.form} ${propsClass}`}>
      {children}
    </form>
  );
};

export default Form;
