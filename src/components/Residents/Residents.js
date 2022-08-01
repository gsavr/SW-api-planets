import "./Residents.css";
import { useFetchPlanetByIdQuery } from "../../store/planetsApiSlice";
import Resident from "../Resident/Resident";
import Loading from "../Loading/Loading";

const Residents = ({ match }) => {
  //get id from params prop from browserRouter
  const planetId = match.params.planetId;

  //will call API to get planet info when component is rendered.
  const { data = [] } = useFetchPlanetByIdQuery(planetId);
  const planet = data;

  const displayResidentRow = (residents) => {
    //console.log(residents);
    return residents.map((resident) => {
      const residentId = resident.replace(/[^0-9]/g, "");
      return (
        <div key={residentId}>
          <Resident id={residentId} />
          <br />
        </div>
      );
    });
  };

  return (
    <div className="App">
      <div className="cont">
        <h1 className="sw-font">
          Residents featured in Planet: {planet ? planet.name : "..."}
        </h1>
      </div>
      {planet.residents ? (
        <div className="details-wrapper">
          {displayResidentRow(planet.residents)}
        </div>
      ) : (
        //when the fetch request is happening -- display loading spinners
        <Loading />
      )}
    </div>
  );
};

export default Residents;
