import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import BeerListContainer from "./component/BeerListContainer";
import BeerLocationContainer from "./component/BeerLocationContainer";
import Home from "./component/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/beerlist" component={BeerListContainer} />
      <Route exact path="/beerlocation" component={BeerLocationContainer} />
    </Router>
  );
}

export default connect()(App);
