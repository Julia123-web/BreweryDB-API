import React from "react";
import { Table } from "react-bootstrap";

export default function BeerList(props) {
  if (!props.beers) {
    return "loading...";
  } else if (props.beers.length === 0) {
    return "we don't have beer to show";
  } else {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Beer Name</th>
            <th>Description</th>
            <th>Organic</th>
          </tr>
        </thead>
        <tbody>
          {props.beers.map((beer) => {
            return (
              <tr key={beer.id}>
                <td>{beer.nameDisplay}</td>
                <td>{beer.description}</td>
                <td>{beer.isOrganic}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
