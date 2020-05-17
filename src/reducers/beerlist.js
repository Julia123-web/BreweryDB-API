import { BEER_LIST } from "../actions/beerlist";

export default (state = [], action = {}) => {
  switch (action.type) {
    case BEER_LIST:
      return action.payload;
    default:
      return state;
  }
};
