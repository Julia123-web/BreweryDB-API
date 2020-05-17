import React from "react";
import "../../src/App";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="HomeContainer">
      <div className="nav-buttons">
        <Link to={"/beerlist"} className="button">
          Beers
        </Link>
        <h1 className="h1home">Welcome to the Beer App</h1>
        <Link to={"/beerlocation"} className="button">
          Beers Location
        </Link>
      </div>
    </div>
  );
}
