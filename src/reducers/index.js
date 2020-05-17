import { combineReducers } from "redux";
import beer from "./beerlist";
import location from "./beerlocation";

export default combineReducers({ beer, location });
