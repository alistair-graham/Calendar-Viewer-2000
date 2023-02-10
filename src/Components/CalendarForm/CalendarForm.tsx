import { useState } from "react";
import { useDispatch } from "react-redux";
import { Day, HOURS_IN_DAY_ARRAY, MIN_HOUR } from "../../app/types";
import { addEvent } from "../../features/calendar/calendarSlice";
import "./CalendarForm.scss";

const CalendarForm = () => {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState("");
  const [dayInput, setDayInput] = useState(Day.Monday);
  const [hourInput, setHourInput] = useState(MIN_HOUR);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameInput || !dayInput || !hourInput) {
      return;
    }

    dispatch(addEvent({ name: nameInput, day: dayInput, hour: hourInput }));
  };

  return (
    <div className="event-form-container">
      <form onSubmit={handleSubmit} className="event-form">
        <label htmlFor="name-input">Name</label>
        <input
          id="name-input"
          type="text"
          name="name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          required
        />
        <label htmlFor="day-select">Day</label>
        <select
          id="day-select"
          name="day"
          value={dayInput}
          onChange={(e) => {
            setDayInput(Day[e.target.value as keyof typeof Day]);
          }}
        >
          {Object.values(Day).map((day) => {
            return (
              <option value={day} key={"option-day-" + day}>
                {day}
              </option>
            );
          })}
        </select>
        <label htmlFor="time-select">Time</label>
        <select
          id="time-select"
          name="hour"
          value={hourInput}
          onChange={(e) => {
            setHourInput(parseInt(e.target.value));
          }}
        >
          {HOURS_IN_DAY_ARRAY.map((hour) => {
            return (
              <option value={hour} key={"option-time-" + hour}>
                {hour}:00
              </option>
            );
          })}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CalendarForm;
