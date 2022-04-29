import "./Planets.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPlanets } from "../../actions";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import helperBot from "../../assets/bot.png";

import Grid from "../Grid";
import ModalForm from "../ModalForm";

const Planets = ({ fetchPlanets, planets }) => {
  //console.log(planets);

  const history = useHistory();
  let page = 1;

  //will call API when component is rendered, since useEffect re-runs every time a component is updated, use ", [] " at the end
  useEffect(() => fetchPlanets(page), []);

  const nextPage = () => {
    //substr will take the last character in the string for planets.next and pass it as page number to action creator
    page = planets.next.substr(planets.next.length - 1, 1);
    fetchPlanets(page);
  };
  //will get page number for previous page navigation
  const prevPage = () => {
    page = planets.previous.substr(planets.previous.length - 1, 1);
    fetchPlanets(page);
  };

  const data = {
    header: [
      "name",
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "gravity",
      "terrain",
      "surface_water",
      "population",
    ],
    //Custom Headers for grid
    headerCustom: ["residents", "films"],
    values: planets.results,
    actions: [
      {
        label: "Go to Films",
        action: (planet) => {
          //extract id from url
          const planetId = planet.url.replace(/[^0-9]/g, "");
          //will redirect to planet films page
          history.push(`/planets/${planetId}/films`);
        },
      },
      {
        label: "Go to Residents",
        action: (planet) => {
          //extract id from url
          const planetId = planet.url.replace(/[^0-9]/g, "");
          //will redirect to planet residents page
          history.push(`/planets/${planetId}/residents`);
        },
      },
      {
        label: "Go to Details",
        action: (planet) => {
          //extract id from url
          const planetId = planet.url.replace(/[^0-9]/g, "");
          //will redirect to planet detailss page
          history.push(`/planets/${planetId}`);
        },
      },
    ],
  };

  return (
    <div className="">
      <Grid data={data} />
      <div className="pg-bottom">
        {/* button to navigate to previous page */}
        {!!planets.previous && (
          <Button
            className="pag-button sw-font"
            color="warning"
            size="sm"
            onClick={prevPage}
          >
            Previous
          </Button>
        )}
        {/* button to navigate to next page */}
        {!!planets.next && (
          <Button
            className="pag-button sw-font"
            color="warning"
            size="sm"
            onClick={nextPage}
          >
            Next
          </Button>
        )}
        {planets.results ? (
          <span className="pag-button align-right sw-font">
            {/* button(modal) to navigate to add planeet modal */}
            <img className="helper-bot-img" src={helperBot} alt="helper bot" />
            Missing a Panet? <ModalForm />
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

//assign proptypes to headers
Planets.propTypes = {
  name: PropTypes.string,
  rotation_period: PropTypes.number,
  orbital_period: PropTypes.number,
  diameter: PropTypes.number,
  climate: PropTypes.string,
  gravity: PropTypes.string,
  terrain: PropTypes.string,
  surface_water: PropTypes.number,
  residents: PropTypes.number,
  films: PropTypes.number,
};

//will map API call from redux to state prop in component
const mapStateToProps = (state) => {
  return { planets: state.planets };
};

export default connect(mapStateToProps, { fetchPlanets })(Planets);
