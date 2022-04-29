import "./Films.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSinglePlanet } from "../../actions";
import Film from "../Film/Film";

const Films = ({ planet, match, fetchSinglePlanet }) => {
  //console.log(props);

  //get id from params prop from browserRouter
  const id = match.params.planetId;

  //will call API to get planet info when component is rendered.
  useEffect(() => {
    fetchSinglePlanet(id);
  }, []);

  //create empty array to capture all film id's from planet prop
  let filmsArray = [];

  //fn to show films by passing id of each film to child Film component to call API
  const displayFilmRow = (films) => {
    filmsArray = films;
    return filmsArray.map((film) => {
      const filmId = film.replace(/[^0-9]/g, "");
      return (
        <p key={filmId}>
          <span className="sw-font">Episode {filmId}</span> <Film id={filmId} />
        </p>
      );
    });
  };

  return (
    <div className="App">
      <div className="cont">
        <h1 className="sw-font">
          Films featuring Planet: {planet ? planet.name : "..."}
        </h1>
      </div>
      {planet.films ? (
        <div className="details-wrapper">{displayFilmRow(planet.films)}</div>
      ) : (
        <div className="sw-font"> "Loading"</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { planet: state.planet };
};

export default connect(mapStateToProps, { fetchSinglePlanet })(Films);
