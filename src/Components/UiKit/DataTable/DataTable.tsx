// React libs
import React, { FC, useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  IconButton,
  Collapse,
  Box,
  TableSortLabel,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
// Components
import Button from '../Button/Button';
// Type
import * as Types from './DataTable.type';

const DataTable: FC<Types.ITableProps> = ({
  columns,
  isCollapsible,
  getRowDetails,
  onCreate,
  rows,
}) => {
  // Variables
  const rowsPerPageValues: any[] = [10, 50, 100];

  // State
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage]: [number, Function] = useState<number>(
    rowsPerPageValues[0]
  );
  const [openedLines, setOpenedLines]: [
    { [key: string]: boolean },
    Function
  ] = useState({});
  const [orderedBy, setOrderedBy]: [string | undefined, Function] = useState<
    string | undefined
  >(undefined);
  const [orderDirection, setOrderDirection]: [
    Types.TOrder,
    Function
  ] = useState<Types.TOrder>('asc');

  // Effects
  useEffect(() => {
    const updateOpenTabs = () => {
      const list: { [key: string]: boolean } = {};
      rows.forEach((r: Types.ITableRow) => {
        list[r.id] = false;
      });
      setOpenedLines(list);
    };
    updateOpenTabs();
  }, [rows]);
  useEffect(() => {
    const updateOrderedBy = () => {
      columns.forEach((c: Types.ITableColumn) => {
        if (c.orderBy) {
          setOrderedBy(c.id);
          setOrderDirection(c.orderBy);
        }
      });
    };
    updateOrderedBy();
  }, [columns]);

  // Handlers
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const toggleLine = (id: string | number) => {
    const list: { [key: string]: boolean } = Object.assign({}, openedLines);
    list[id] = !list[id];
    setOpenedLines(list);
  };
  const createSortHandler = (id: string | number) => {
    const isAsc = orderedBy === id && orderDirection === 'asc';
    setOrderDirection(isAsc ? 'desc' : 'asc');
    setOrderedBy(id);
  };

  // Utils
  const descendingComparator = (
    a: any,
    b: any,
    orderBy: string | undefined
  ) => {
    if (!orderBy) return 0;
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (
    order: Types.TOrder,
    orderBy: string | undefined
  ): ((a: { key: number | string }, b: { key: number | string }) => number) =>
    order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  const stableSort = (array: any[], comparator: (a: any, b: any) => number) => {
    const stabilizedThis = array.map(
      (el, index) => [el, index] as [any, number]
    );
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  };

  return (
    <div className='h-full w-full'>
      <TableContainer component={Paper} className='tabledata-container'>
        <Table size='small' aria-label='a dense table' stickyHeader>
          <TableHead>
            <TableRow>
              {isCollapsible && <TableCell />}
              {columns &&
                columns.map((c: Types.ITableColumn) => (
                  <TableCell
                    align={c.headerAlign ? c.headerAlign : 'left'}
                    key={c.id}
                    sortDirection={orderedBy === c.id ? orderDirection : false}
                  >
                    <TableSortLabel
                      active={orderedBy === c.id}
                      direction={orderedBy === c.id ? orderDirection : 'asc'}
                      onClick={() => createSortHandler(c.id)}
                    >
                      {c.name}
                    </TableSortLabel>
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              stableSort(rows, getComparator(orderDirection, orderedBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((r: Types.ITableRow) => (
                  <Fragment key={r.id}>
                    <TableRow
                      onClick={() => toggleLine(r.id)}
                      className='cursor-pointer'
                    >
                      {isCollapsible && (
                        <TableCell>
                          <IconButton
                            aria-label='expand row'
                            size='small'
                            onClick={() => toggleLine(r.id)}
                          >
                            {openedLines[r.id] === true ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                          </IconButton>
                        </TableCell>
                      )}
                      {columns &&
                        columns.map((c: Types.ITableColumn) => (
                          <TableCell
                            align={c.align ? c.align : 'left'}
                            key={`${r.id}-${c.id}`}
                          >
                            {c.renderCell ? c.renderCell(r) : r[c.field]}
                          </TableCell>
                        ))}
                    </TableRow>
                    {isCollapsible && (
                      <TableRow>
                        <TableCell
                          style={{ paddingBottom: 0, paddingTop: 0 }}
                          colSpan={columns ? columns.length + 1 : 1}
                        >
                          <Collapse
                            in={openedLines[r.id]}
                            timeout='auto'
                            unmountOnExit
                          >
                            <Box margin={1} className='overflow-x-auto'>
                              {getRowDetails && getRowDetails(r)}
                            </Box>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    )}
                  </Fragment>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        classes={{ toolbar: 'flex items-center', spacer: 'flex-none' }}
        rowsPerPageOptions={rowsPerPageValues}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} (${count !== -1 ? count : `> ${to}`})`
        }
        labelRowsPerPage={'Éléments par page'}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        ActionsComponent={(props: any) => (
          <TablePaginationActions {...props} onCreate={onCreate} />
        )}
      />
    </div>
  );
};

DataTable.propTypes = {
  columns: PropTypes.arrayOf<Types.ITableColumn>(PropTypes.any).isRequired,
  isCollapsible: PropTypes.bool,
  getRowDetails: PropTypes.func,
  onCreate: PropTypes.func,
  rows: PropTypes.arrayOf<Types.ITableRow>(PropTypes.any).isRequired,
};

DataTable.defaultProps = {
  isCollapsible: false,
};

export default DataTable;

const TablePaginationActions = ({
  count,
  page,
  rowsPerPage,
  onChangePage,
  onCreate,
}: Types.ITablePaginationActionsProps) => {
  // Handlers
  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => onChangePage(event, 0);
  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    onChangePage(event, page - 1);
  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    onChangePage(event, page + 1);
  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));

  return (
    <div className='flex flex-1 items-center justify-between mx-2'>
      <div className='flex-1'>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label='first page'
        >
          <FirstPageIcon />
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label='previous page'
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label='next page'
        >
          <KeyboardArrowRight />
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label='last page'
        >
          <LastPageIcon />
        </IconButton>
      </div>
      {onCreate && (
        <Button variant='outlined' onClick={onCreate}>
          Ajouter
        </Button>
      )}
    </div>
  );
};
