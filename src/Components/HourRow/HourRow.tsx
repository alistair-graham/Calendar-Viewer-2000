import "./HourRow.scss";

const HourRow = (props: { hour: number }) => {
  return (
    <tr className="row">
      <th className="cell hour-cell" scope="row">
        {props.hour}:00
      </th>
      <td className="cell hour-cell">
        <div className="event"></div>
        <div className="event"></div>
      </td>
      <td className="cell hour-cell">
        <div className="event"></div>
      </td>
      <td className="cell hour-cell"></td>
      <td className="cell hour-cell"></td>
      <td className="cell hour-cell"></td>
    </tr>
  );
};

export default HourRow;
