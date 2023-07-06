import { Fragment, useState } from "react";
import { MouseEvent } from "react";
function ListGroup() {
  let cityNames = ["Delhi", "Banglore", "Chennai", "Mumbai", "Jaipur"];
  const [seletedIndex, setSelectedIndex] = useState(-1);
  const getMessage = () => {
    return cityNames.length === 0 ? <p>No item found</p> : null;
  };
  //Even
  const handleClickEvent = (event: MouseEvent, item: String, index: number) => {
    console.log("You clicked me:", item);
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>City Names</h1>
      {cityNames.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {cityNames.map((city, index) => (
          <li
            className={
              seletedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={(event) => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
