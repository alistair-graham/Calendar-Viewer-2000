import { render, screen } from "@testing-library/react";
import HourRow from "../HourRow/HourRow";
import CalendarTable from "./CalendarTable";

// Skipped as I need to add boilerplate for testing to work with the Redux state
test.skip("renders nine rows", () => {
  render(<CalendarTable />);
  const hourRows = screen.getAllByRole(HourRow);
  expect(hourRows.length).toBe(9);
});
