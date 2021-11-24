import React from "react";

const Search = ({ value, onSearch }) => {
  return (
    <input
      className="form-control mt-3 mb-5"
      type="text"
      name="query"
      value={value}
      placeholder="Search..."
      onChange={ e => onSearch(e.currentTarget.value)}
    />
  );
};

export default Search;
