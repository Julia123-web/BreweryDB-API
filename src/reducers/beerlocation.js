import { LOCATION_BEER } from "../actions/beerlocation";

export default (state = [], action = {}) => {
  switch (action.type) {
    case LOCATION_BEER:
      return action.payload;
    default:
      return state;
  }
};
