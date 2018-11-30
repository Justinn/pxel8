import React from 'react';
import TableCell from './TableCell';

const TableRow = props => {
  return (
    <tr>
      {props.row.map((color, idx) => {
        return (
          <TableCell
            key={idx}
            color={color}
            idx={idx}
            rowIndex={props.rowIndex}
          />
        );
      })}
    </tr>
  );
};

export default TableRow;
