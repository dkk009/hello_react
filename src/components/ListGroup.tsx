import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface ListProps {
  items: string[];
  heading: string;
  onItemSelect: (item: string) => void;
}
function ListGroup({ items, heading, onItemSelect }: ListProps) {
  const [seletedIndex, setSelectedIndex] = useState(-1);
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
  //Even
  const handleClickEvent = (event: MouseEvent, item: String, index: number) => {
    console.log("You clicked me:", item);
    setSelectedIndex(index);
  };
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((city, index) => (
          <li
            className={
              seletedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={(event) => {
              setSelectedIndex(index);
              onItemSelect(city);
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
