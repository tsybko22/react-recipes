import clsx from 'clsx';

import { nanoid } from '@reduxjs/toolkit';

import classes from './Table.module.scss';

const Table = ({ headers = [], data = [], className }) => {
  const renderHeaders = () => (
    <tr className={classes.tableRow}>
      {headers.map((header) => (
        <th key={nanoid()} className={classes.tableHeader}>
          {header}
        </th>
      ))}
    </tr>
  );

  const renderRows = () =>
    data.map((value) => {
      const keys = Object.keys(value);
      return (
        <tr key={nanoid()} className={classes.tableRow}>
          {keys.map((key) => (
            <td key={nanoid()} className={classes.tableData}>
              {value[key]}
            </td>
          ))}
        </tr>
      );
    });

  return (
    <table className={clsx(classes.table, className)}>
      <thead>{renderHeaders()}</thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default Table;
