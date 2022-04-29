import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFilm } from "../../actions";

const Film = ({ fetchFilm, id, film }) => {
  //will call API to get planet info when component is rendered.
  useEffect(() => {
    fetchFilm(id);
  }, []);

  return (
    <div id={film.title} className="sw-font">
      {film.title}
    </div>
  );
};

//will map API call from redux to state prop in component
const mapStateToProps = (state) => {
  return { film: state.film };
};

export default connect(mapStateToProps, { fetchFilm })(Film);
