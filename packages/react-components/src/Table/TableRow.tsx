import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLTableRowElement> {}

export const TableRow = (props: Props) => {
  return <tr {...props} />;
};
