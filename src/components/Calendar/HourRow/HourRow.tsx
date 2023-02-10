import "./HourRow.scss";
import { useAppSelector } from "../../../app/hooks";
import { makeSelectEventsByHour } from "../../../features/calendar/calendarSlice";
import { Day } from "../../../app/types";

const HourRow = (props: { hour: number }) => {
  const eventsByHour = useAppSelector((state) =>
    makeSelectEventsByHour()(state, props.hour)
  );

  const createRow = () => {
    const cells: React.ReactNode[] = [];

    Object.values(Day).forEach((day) => {
      cells.push(
        <td className="cell hour-cell" key={day + props.hour}>
          {createEventsForDay(day)}
        </td>
      );
    });
    return cells;
  };

  const createEventsForDay = (day: Day) => {
    const eventsForDay: React.ReactNode[] = [];

    const eventsForCell = eventsByHour?.filter((event) => event.day === day);
    const keyNameBase = day + props.hour + "-";

    eventsForCell?.forEach((event, i) => {
      eventsForDay.push(
        <p className="event" key={keyNameBase + i}>
          {event.name}
        </p>
      );
    });

    return eventsForDay;
  };

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
