import "./Films.css";
import { useFetchPlanetByIdQuery } from "../../store/planetsApiSlice";
import Film from "../Film/Film";
import Loading from "../Loading/Loading";

const Films = ({ match }) => {
  //get id from params prop from browserRouter
  const planetId = match.params.planetId;

  //will call API to get planet info when component is rendered.
  const { data = [] } = useFetchPlanetByIdQuery(planetId);
  const planet = data;
  console.log(planet);

  //fn to show films by passing id of each film to child Film component to call API
  const displayFilmRow = (films) => {
    return films.map((film) => {
      const filmId = film.replace(/[^0-9]/g, "");
      return (
        <div key={filmId}>
          <span className="sw-font">Episode {filmId}</span> <Film id={filmId} />
          <br />
        </div>
      );
    });
  };

  return (
    <div className="App">
      <div className="cont">
        <h1 className="sw-font">
          {/* planet name will not display until api call is done */}
          Films featuring Planet: {planet ? planet.name : "..."}
        </h1>
      </div>
      {planet.films ? (
        <div className="details-wrapper">{displayFilmRow(planet.films)}</div>
      ) : (
        //when the fetch request is happening -- display loading spinners
        <Loading />
      )}
    </div>
  );
};

export default Films;
