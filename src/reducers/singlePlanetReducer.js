import { FETCH_SINGLE_PLANET } from "../actions/types";

const singlePlanetReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SINGLE_PLANET:
      return action.payload;
    default:
      return state;
  }
};

export default singlePlanetReducer;
