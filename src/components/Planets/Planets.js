import "./Planets.css";
import { useState } from "react";
import { useFetchPlanetsQuery } from "../../store/planetsApiSlice";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import helperBot from "../../assets/bot.png";

import Grid from "../Grid";
import ModalForm from "../ModalForm";

const Planets = () => {
  const history = useHistory();
  const [page, setPage] = useState(1);

  const { data = [] } = useFetchPlanetsQuery(page);
  const planets = data;

  const nextPage = () => {
    //substr will take the last character in the string for planets.next and pass it as page number
    setPage(planets.next.substr(planets.next.length - 1, 1));
  };
  //will get page number for previous page navigation
  const prevPage = () => {
    setPage(planets.previous.substr(planets.previous.length - 1, 1));
  };

  const queriedData = {
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
      <Grid data={queriedData} />
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

export default Planets;
