import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Day } from "../../app/types";

interface IEvent {
  day: Day;
  hour: number;
  name: string;
}

interface IEvents extends Array<IEvent> {}

interface ICalendarState {
  events: IEvents;
}

const initialState: ICalendarState = {
  events: [],
};

interface AddEventPayload {
  day: Day;
  hour: number;
  name: string;
}

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<AddEventPayload>) {
      state.events.push({
        day: action.payload.day,
        hour: action.payload.hour,
        name: action.payload.name,
      });
    },
  },
});

const selectEvents = (state: RootState) => state.calendar.events;

// Factory function that will create a memoised selector for each hour's events
export const makeSelectEventsByHour = () => {
  const selectEventsByHour = createSelector(
    [selectEvents, (_state: RootState, hour: number) => hour],
    (events, hour) => events?.filter((event) => event.hour === hour)
  );
  return selectEventsByHour;
};

export const { addEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
