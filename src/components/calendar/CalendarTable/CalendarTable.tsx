import { HOURS_IN_DAY_ARRAY } from "../../../app/types";
import HeaderRow from "../HeaderRow/HeaderRow";
import HourRow from "../HourRow/HourRow";
import "./CalendarTable.scss";

const CalendarTable = () => {
  // const events = useAppSelector((state) => getDayEvents(state));

  return (
    <table className="week-table">
      <HeaderRow />
      <tbody className="table-body">
        {HOURS_IN_DAY_ARRAY.map((hour) => {
          return <HourRow hour={hour} key={"hour-row-" + hour} />;
        })}
      </tbody>
    </table>
  );
};

export default CalendarTable;
