import React, { FC } from 'react';
import style from './form.module.scss';

type Props = {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  action?: string; 
};

const Form: FC<Props> = ({ handleSubmit, children, action }) => {
  return (
    <form action={action} onSubmit={handleSubmit} className={style.form}>
      {children}
    </form>
  );
};

export default Form;
