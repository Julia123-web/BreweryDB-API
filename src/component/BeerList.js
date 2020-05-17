import React from "react";

export default function BeerList(props) {
  if (!props.beers) {
    return "loading...";
  } else if (props.beers.length === 0) {
    return "we don't have beer to show";
  } else {
    return (
      <main className="ListBeer">
        <h2 className="h1home">
          These are the beers of Countrys you can search through:
        </h2>
        <div>
          {props.beers.map((beer) => {
            return (
              <p key={beer.id}>
                {beer.name}
                {beer.description}
              </p>
            );
          })}
        </div>
      </main>
    );
  }
}
