import React from 'react';
import TableRow from './TableRow';

const Table = props => {
  return (
    <table>
      <tbody>
        {props.grid.map((row, ridx) => {
          return <TableRow key={ridx} row={row} rowIndex={ridx} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
