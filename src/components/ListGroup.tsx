import { Fragment } from "react";

function ListGroup() {
  let cityNames = ["Delhi", "Banglore", "Chennai", "Mumbai", "Jaipur"];

  const getMessage = () => {
    return cityNames.length === 0 ? <p>No item found</p> : null;
  };
  const handEvent = (event: MouseEvent) => {
    console.log("You clicked me");
  };
  return (
    <>
      <h1>City Names</h1>
      {cityNames.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {cityNames.map((city, index) => (
          <li
            className="list-group-item"
            key={city}
            onClick={(event) =>
              console.log("You clicked me:", city, index, " Pos", event)
            }
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
