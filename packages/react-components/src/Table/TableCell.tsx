import { TdHTMLAttributes, ThHTMLAttributes } from 'react';

interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {}

export const TableHeaderCell = (props: TableHeaderCellProps) => {
  return <th {...props} />;
};

interface TableDataCellProps extends TdHTMLAttributes<HTMLTableDataCellElement> {}

export const TableDataCell = (props: TableDataCellProps) => {
  return <td {...props} />;
};
