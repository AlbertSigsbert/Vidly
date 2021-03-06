import React from "react";
const SideNav = ( { items:genres, textProperty,valueProperty, selectedItem, onItemSelect }) => {
 
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          style={{ cursor: "pointer" }}
          className={
            genre === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

SideNav.defaultProps = {
  textProperty:"name",
  valueProperty:"_id"
};

export default SideNav;
