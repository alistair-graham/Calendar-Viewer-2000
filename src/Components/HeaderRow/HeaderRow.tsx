import "./HeaderRow.scss";

const HeaderRow = () => {
  return (
    <thead>
      <tr className="row weekday-row">
        <td className="cell"></td>
        <th className="cell" scope="col">
          <p className="desktop-view">Monday</p>
          <p className="mobile-view">M</p>
        </th>
        <th className="cell" scope="col">
          <p className="desktop-view">Tuesday</p>
          <p className="mobile-view">T</p>
        </th>
        <th className="cell" scope="col">
          <p className="desktop-view">Wednesday</p>
          <p className="mobile-view">W</p>
        </th>
        <th className="cell" scope="col">
          <p className="desktop-view">Thursday</p>
          <p className="mobile-view">T</p>
        </th>
        <th className="cell" scope="col">
          <p className="desktop-view">Friday</p>
          <p className="mobile-view">F</p>
        </th>
      </tr>
    </thead>
  );
};

export default HeaderRow;
