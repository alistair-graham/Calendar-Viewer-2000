import HeaderRow from "../HeaderRow/HeaderRow";
import HourRow from "../HourRow/HourRow";
import "./Calendar.scss";

const Calendar = () => {
  return (
    <table className="weekTable">
      <HeaderRow />
      <tbody>
        <HourRow hour={9} />
        <HourRow hour={10} />
        <HourRow hour={11} />
        <HourRow hour={12} />
        <HourRow hour={1} />
        <HourRow hour={2} />
        <HourRow hour={3} />
        <HourRow hour={4} />
      </tbody>
    </table>
  );
};

export default Calendar;
