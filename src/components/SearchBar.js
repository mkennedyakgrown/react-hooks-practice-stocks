import React from "react";

function SearchBar({ setSortBy, setFilterBy }) {

  function onClick(e) {
    const value = e.target.value;
    if (value != "Clear") {
      setSortBy(value);
    } else {
      setSortBy("");
    }
  }

  function onFilter(e) {
    setFilterBy(e.target.value);
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={onClick}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={onClick}
        />
        Price
      </label>
      <label>
        <input
          type="radio"
          value="Clear"
          name="sort"
          checked={null}
          onChange={onClick}
        />
        Clear "Sort By"
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={onFilter}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
