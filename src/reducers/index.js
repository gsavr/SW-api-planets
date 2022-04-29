import { combineReducers } from "redux";
import planetsReducer from "./planetsReducer";
import singlePlanetReducer from "./singlePlanetReducer";
import filmReducer from "./filmsReducer";
import residentReducer from "./residentReducer";

export default combineReducers({
  planets: planetsReducer,
  planet: singlePlanetReducer,
  film: filmReducer,
  resident: residentReducer,
});
