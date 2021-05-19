import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLTableRowElement> {}

export const TableRow = (props: Props) => {
  return <tr {...props} />;
};
