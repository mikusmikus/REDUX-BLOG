import React, { FC } from 'react';

type Props = {
  data: string[];
  id: string;
};

const Datalist: FC<Props> = ({ data, id }) => {
  return (
    <datalist id={id}>
      {data.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </datalist>
  );
};

export default Datalist;
