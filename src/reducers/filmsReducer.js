import { FETCH_FILM } from "../actions/types";

const filmReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_FILM:
      return action.payload;
    default:
      return state;
  }
};

export default filmReducer;
