import "./HourRow.scss";
import { useAppSelector } from "../../../app/hooks";
import { makeSelectEventsByHour } from "../../../features/calendar/calendarSlice";
import { Day } from "../../../app/types";

const HourRow = (props: { hour: number }) => {
  return (
    <tr className="row hour-row">
      <th className="cell first-column" scope="row">
        {props.hour}:00
      </th>
      {createRow()}
    </tr>
  );
};

export default HourRow;
