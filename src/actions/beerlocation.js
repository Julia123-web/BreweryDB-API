import axios from "axios";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

export const LOCATION_BEER = "LOCATION_BEER";

function beerLocationSuccess(locations) {
  return {
    type: LOCATION_BEER,
    payload: locations,
  };
}

export const beerLocation = () => (dispatch, getState) => {
  axios(`${dbUrl}/locations`)
    .then((response) => {
      console.log("LOOOCATION", response.data);
      dispatch(beerLocationSuccess(response.data.data));
    })
    .catch(console.error);
};
