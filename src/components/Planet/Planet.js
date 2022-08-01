import "./Planet.css";
import { useFetchPlanetByIdQuery } from "../../store/planetsApiSlice";
import LoadingSmall from "../LoadingSmall/LoadingSmall";
import rebel from "../../assets/rebel.png";

const Planet = ({ match }) => {
  //get id from params props in router
  const planetId = match.params.planetId;
  //get details for planet
  const { data = [], isFetching } = useFetchPlanetByIdQuery(planetId);
  const planet = data;

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
        <div key={detail.detail} className="details">
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
        {isFetching ? <LoadingSmall /> : displayDetails()}
      </div>
    </div>
  );
};

export default Planet;
