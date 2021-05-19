import { TableHTMLAttributes } from 'react';
import { TableDataCell, TableHeaderCell } from './TableCell';
import { TableRow } from './TableRow';

interface Props extends TableHTMLAttributes<HTMLTableElement> {}

export const Table = (props: Props) => {
  return <table {...props} />;
};

Table.Row = TableRow;
Table.HeaderCell = TableHeaderCell;
Table.DataCell = TableDataCell;
