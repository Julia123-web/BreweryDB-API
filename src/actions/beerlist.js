import axios from "axios";

const dbUrl = process.DATABASE_URL || "http://localhost:4000";

export const BEER_LIST = "BEER_LIST";

function ListBeerSuccess(beers) {
  console.log("BEEEERS", beers);
  return {
    type: BEER_LIST,
    payload: beers,
  };
}

export const ListBeer = () => {
  return async function (dispatch, getState) {
    axios(`${dbUrl}/beers`)
      .then((response) => {
        console.log("SEE THE DATA", response.data);
        dispatch(ListBeerSuccess(response.data.data));
      })
      .catch(console.error);
  };
};
