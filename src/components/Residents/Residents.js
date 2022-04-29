import "./Residents.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSinglePlanet } from "../../actions";
import Resident from "../Resident/Resident";
import Loading from "../Loading/Loading";

const Residents = ({ planet, match, fetchSinglePlanet }) => {
  //console.log(props);

  //get id from params prop from browserRouter
  const id = match.params.planetId;

  //will call API to get planet info when component is rendered.
  useEffect(() => {
    fetchSinglePlanet(id);
  }, []);

  let residentsArray = [1, 3, 4, 5, 6];

  const displayResidentRow = (residents) => {
    residentsArray = residents;
    return residentsArray.map((resident) => {
      const residentId = resident.replace(/[^0-9]/g, "");
      return (
        <p key={residentId}>
          <Resident id={residentId} />
        </p>
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

const mapStateToProps = (state) => {
  return { planet: state.planet };
};

export default connect(mapStateToProps, { fetchSinglePlanet })(Residents);
