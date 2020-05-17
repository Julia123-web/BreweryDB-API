import React, { Component } from "react";
import { connect } from "react-redux";
import { beerLocation } from "../actions/beerlocation";
import BeerLocation from "./BeerLocation";

class BeerLocationContainer extends Component {
  componentDidMount() {
    this.props.beerLocation();
  }
  render() {
    return <BeerLocation locations={this.props.locations} />;
  }
}

const mapStateToProps = (state) => {
  console.log("STATEEE", state.location);
  return {
    locations: state.location,
  };
};

export default connect(mapStateToProps, { beerLocation })(
  BeerLocationContainer
);
