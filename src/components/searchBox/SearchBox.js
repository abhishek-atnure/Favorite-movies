import React from "react";

export default function SearchBox({ searchTerm, setSearchTerm }) {
  const handleClick = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div className="searchbox">
      <input
        name="search"
        type="text"
        value={searchTerm}
        placeholder="Search movie name"
        onChange={handleClick}
      ></input>
    </div>
  );
}
