import "./Grid.css";
import { Button, Spinner } from "reactstrap";

const Grid = ({
  data: { header = [], headerCustom = [], values = [], actions = [] },
}) => {
  console.log(headerCustom);
  // Display Button Go to Films
  const displayFilmsButton = (row, actions) => {
    if (!!row.films.length) {
      return (
        <Button
          className="action-button"
          color="dark"
          size="sm"
          key={actions[0].label}
          onClick={() => actions[0].action(row)}
        >
          {actions[0].label}
        </Button>
      );
    }
  };
  // Display Button Go to Residents
  const displayResidents = (row, actions) => {
    if (!!row.residents.length) {
      return (
        <Button
          className="action-button"
          color="dark"
          size="sm"
          key={actions[1].label}
          onClick={() => actions[1].action(row)}
        >
          {actions[1].label}
        </Button>
      );
    }
  };

  // Display Button Go to Planet Details
  const displayPlanetDetails = (row, actions) => {
    if (!!row.name.length) {
      return (
        <Button
          className="action-button"
          color="dark"
          size="sm"
          key={actions[2].label}
          onClick={() => actions[2].action(row)}
        >
          {actions[2].label}
        </Button>
      );
    }
  };
  return (
    <div>
      {values.length ? (
        <table className="gridTable">
          <thead>
            <tr>
              {header.map((colName) => (
                <th key={colName}>{colName}</th>
              ))}
              {/* display any custom headers passed to this component */}
              {headerCustom.map((colName) => (
                <th key={colName}>{colName}</th>
              ))}
              {!!actions.length && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {values.map((row, index) => (
              <tr key={index}>
                {header.map((colName) => (
                  <td key={colName}>{row[colName]}</td>
                ))}
                {/* show number of residents & films if these values exist */}
                {!!headerCustom.length && !!row.residents && (
                  <td>{row.residents.length}</td>
                )}
                {!!headerCustom.length && !!row.films && (
                  <td>{row.films.length}</td>
                )}
                {
                  <td className="gridActions">
                    {displayPlanetDetails(row, actions)}
                    {displayFilmsButton(row, actions)}
                    {displayResidents(row, actions)}
                  </td>
                }
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        /* when the fetch request is happening -- display loading spinners */
        <div>
          <p className="sw-font">Loading...</p>
          <Spinner color="dark" size="" type="grow">
            Loading...
          </Spinner>
          <Spinner color="warning" size="" type="grow">
            Loading...
          </Spinner>
          <Spinner color="dark" size="" type="grow">
            Loading...
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default Grid;
