import { FC, TableHTMLAttributes } from 'react';

interface Props extends TableHTMLAttributes<HTMLTableElement> {}

export const Table: FC<Props> = ({ children, className }) => {
  return <table className={className}>{children}</table>;
};
