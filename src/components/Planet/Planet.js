import "./Planet.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSinglePlanet } from "../../actions";
import rebel from "../../assets/rebel.png";

const Planet = ({ fetchSinglePlanet, planet, match }) => {
  //get id from params props in router
  const planetId = match.params.planetId;
  //get detaiuls for planet
  useEffect(() => fetchSinglePlanet(planetId), []);

  //list out of details
  const details = [
    { label: "Climate", detail: planet.climate },
    { label: "Diameter", detail: planet.diameter, unit: "meters" },
    { label: "Gravity", detail: planet.gravity },
    { label: "Orbital Period", detail: planet.orbital_period, unit: "days" },
    { label: "Rotation Period", detail: planet.rotation_period, unit: "hours" },
    { label: "Population", detail: planet.population },
    { label: "Terrain", detail: planet.terrain },
    { label: "Surface Water", detail: planet.surface_water, unit: "%" },
  ];

  //fn to display all details
  const displayDetails = () => {
    return details.map((detail) => {
      return (
        <div className="details">
          {detail.label}: {detail.detail} {!!detail.unit && detail.unit}
        </div>
      );
    });
  };

  return (
    <div className="App">
      <div className="cont">
        <h1 className="sw-font">
          {/* display rebel icon nect to planet name */}
          <img className="landing-ds" src={rebel} alt="death star" />{" "}
          {planet.name}{" "}
          <img className="landing-ds" src={rebel} alt="death star" />
        </h1>
      </div>
      <div className="details-wrapper">
        <p className="details details-upper">Planet Details:</p>
        {displayDetails()}
      </div>
    </div>
  );
};

//will map API call from redux to state prop in component
const mapStateToProps = (state) => {
  //console.log(state.planet);
  return { planet: state.planet };
};

export default connect(mapStateToProps, { fetchSinglePlanet })(Planet);
