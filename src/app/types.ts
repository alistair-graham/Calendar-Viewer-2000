export enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
}

export const MIN_HOUR: number = 9;
const MAX_HOUR: number = 17;

export const HOURS_IN_DAY_ARRAY: Array<number> = Array.from(
  Array(MAX_HOUR - MIN_HOUR + 1).keys(),
  (_: any, i: number) => i + MIN_HOUR
);
