import { useFetchFilmByIdQuery } from "../../store/planetsApiSlice";
import LoadingSmall from "../LoadingSmall/LoadingSmall";

const Film = ({ id }) => {
  //will call API to get planet info when component is rendered.
  const { data = [], isFetching } = useFetchFilmByIdQuery(id);
  const film = data;

  return (
    <div>
      {isFetching ? (
        <LoadingSmall />
      ) : (
        <div id={film.title} className="sw-font">
          {film.title}
        </div>
      )}
    </div>
  );
};

export default Film;
