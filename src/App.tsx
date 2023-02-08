import React from "react";
import "./App.scss";
import TableRow from "./Components/TableRow";

function App() {
  return (
    <div className="App">
      <table className="weekTable">
        <thead>
          <tr className="weekTableRow">
            <td className="weekTableCol"></td>
            <th className="weekTableCol" scope="col">
              <p className="desktopView">Monday</p>
              <p className="mobileView">M</p>
            </th>
            <th className="weekTableCol" scope="col">
              <p className="desktopView">Tuesday</p>
              <p className="mobileView">T</p>
            </th>
            <th className="weekTableCol" scope="col">
              <p className="desktopView">Wednesday</p>
              <p className="mobileView">W</p>
            </th>
            <th className="weekTableCol" scope="col">
              <p className="desktopView">Thursday</p>
              <p className="mobileView">T</p>
            </th>
            <th className="weekTableCol" scope="col">
              <p className="desktopView">Friday</p>
              <p className="mobileView">F</p>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
