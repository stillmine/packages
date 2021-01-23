import { FC } from 'react';

interface Props {}

export const Card: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
