import { FETCH_PLANETS } from "../actions/types";

const planetsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      return action.payload;
    default:
      return state;
  }
};

export default planetsReducer;
