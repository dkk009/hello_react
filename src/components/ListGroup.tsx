import { Fragment } from "react";

function ListGroup() {
  const cityNames = ["Delhi", "Banglore", "Chennai", "Mumbai", "Jaipur"];

  return (
    <>
      <h1>City Names</h1>
      <ul className="list-group">
        {cityNames.map((city) => (
          <li key={city}> {city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
