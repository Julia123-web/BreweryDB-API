import React from "react";
import { Table } from "react-bootstrap";

export default function BeerLocation(props) {
  if (!props.locations) {
    return "loading...";
  } else if (props.locations.length === 0) {
    return "we don't have beer to show";
  } else {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Beer City</th>
            <th>Region</th>
            <th>Locality</th>
          </tr>
        </thead>
        <tbody>
          {props.locations.map((location) => {
            return (
              <tr key={location.id}>
                <td>{location.name}</td>
                <td>{location.region}</td>
                <td>{location.locality}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
