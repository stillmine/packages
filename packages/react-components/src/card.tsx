import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Card = ({ children }: Props) => {
  return <div>{children}</div>;
};
