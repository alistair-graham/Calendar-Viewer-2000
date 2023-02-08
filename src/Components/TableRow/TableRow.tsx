import React from "react";

const TableRow = (props: {hour: number}) => {
    
  return (
    <>
      <th scope="row">{props.hour}:00</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </>
  );
};

export default TableRow;
