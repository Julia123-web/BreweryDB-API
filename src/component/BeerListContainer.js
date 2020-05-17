import React, { Component } from "react";
import { connect } from "react-redux";
import { ListBeer } from "../actions/beerlist";
import BeerList from "./BeerList";

class BeerListContainer extends Component {
  componentDidMount() {
    this.props.ListBeer();
  }
  render() {
    return <BeerList beers={this.props.beers} />;
  }
}

const mapStateToProps = (state) => {
  console.log("STATEEE", state.beer);
  return {
    beers: state.beer,
  };
};

export default connect(mapStateToProps, { ListBeer })(BeerListContainer);
