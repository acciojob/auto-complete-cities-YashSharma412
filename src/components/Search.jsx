import React, { useContext, useEffect, useState } from "react";
import suggestionContext from "../Contexts/suggestionContext";
import cities_data from "../data/cities_data";
function Search({ searchQuery, setSearchQuery }) {
  const { suggestions, setSuggestions, isDropdownVisible, setDropdownVisible } =
    useContext(suggestionContext);
  useEffect(() => {
    setSuggestions(
      cities_data.filter((city) =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);
  // useEffect(() =>{
  //   console.log(searchQuery)
  // }, [searchQuery]);
  return (
    <div className="search__container">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setDropdownVisible(true)}
        onBlur={() => setDropdownVisible(false)}
      />
    </div>
  );
}

export default Search;
