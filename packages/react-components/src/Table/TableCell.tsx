import { TdHTMLAttributes, ThHTMLAttributes } from 'react';

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {}

export const TableHeaderCell = (props: TableHeaderCellProps) => {
  return <th {...props} />;
};

export interface TableDataCellProps extends TdHTMLAttributes<HTMLTableDataCellElement> {}

export const TableDataCell = (props: TableDataCellProps) => {
  return <td {...props} />;
};
