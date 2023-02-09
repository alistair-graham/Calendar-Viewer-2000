import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
}

interface IEvent {
  day: Day;
  hour: number;
  name: string;
}

interface IEvents extends Array<IEvent> {}

export interface ICalendarState {
  events: IEvents;
}

const initialState: ICalendarState = {
  events: [
    {
      day: Day.Monday,
      hour: 9,
      name: "my event 1my event 1my event 1my event 1ent 1my eventent 1my event 1ent 1my event",
    },
    {
      day: Day.Tuesday,
      hour: 10,
      name: "my event 3",
    },
    {
      day: Day.Tuesday,
      hour: 11,
      name: "my event 3",
    },
    {
      day: Day.Tuesday,
      hour: 12,
      name: "my event 3",
    },
    {
      day: Day.Tuesday,
      hour: 13,
      name: "my event 3",
    },
    {
      day: Day.Tuesday,
      hour: 14,
      name: "my event 3",
    },
    {
      day: Day.Tuesday,
      hour: 15,
      name: "my event 3",
    },
    {
      day: Day.Tuesday,
      hour: 16,
      name: "my event 3",
    },
    {
      day: Day.Tuesday,
      hour: 17,
      name: "my event 3",
    },
  ],
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

export const selectEvents = (state: RootState) => state.calendar.events;

// Factory function that will create a memoised selector for each hour's events
export const makeSelectEventsByHour = () => {
  const selectEventsByHour = createSelector(
    [selectEvents, (state: RootState, hour: number) => hour],
    (events, hour) => events?.filter((event) => event.hour === hour)
  );
  return selectEventsByHour;
};

export const { addEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
