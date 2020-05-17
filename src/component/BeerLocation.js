import React from "react";

export default function BeerLocation(props) {
  if (!props.locations) {
    return "loading...";
  } else if (props.locations.length === 0) {
    return "we don't have beer to show";
  } else {
    return (
      <main className="ListBeer">
        <h2 className="h1home">
          These are the locations of the Beers you can search through:
        </h2>
        <div>
          {props.locations.map((location) => {
            return (
              <p key={location.id}>
                {location.name}
                {location.streetAddress}
                {location.locality}
              </p>
            );
          })}
        </div>
      </main>
    );
  }
}
