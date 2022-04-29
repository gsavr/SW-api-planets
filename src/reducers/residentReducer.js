import { FETCH_RESIDENT } from "../actions/types";

const residentReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_RESIDENT:
      return action.payload;
    default:
      return state;
  }
};

export default residentReducer;
