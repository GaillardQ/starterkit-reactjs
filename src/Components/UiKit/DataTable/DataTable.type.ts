import { TypographyProps } from '@material-ui/core/Typography';
import { ComponentProps, ReactElement } from 'react';
export type TOrder = 'asc' | 'desc';
export interface ITableColumn {
  id: string | number;
  field: string;
  name: string;
  // header
  headerAlign?: 'left' | 'center' | 'right';
  // content
  align?: 'left' | 'center' | 'right';
  orderBy?: TOrder;
  renderCell?: (params: any) => ReactElement;
}
export interface ITableRow {
  id: string | number;
  [key: string]: any;
}

export interface ITableProps extends ComponentProps<'div'> {
  columns: ITableColumn[];
  isCollapsible?: boolean;
  getRowDetails?: (line: any) => ReactElement;
  rows: ITableRow[];
  onCreate?: () => void;
}

export interface ITablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
  onCreate?: () => void;
}
