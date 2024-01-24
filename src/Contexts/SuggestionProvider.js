import React, { useState } from "react";
import suggestionContext from "./suggestionContext";
import cities_data from "../data/cities_data";
const SuggestionProvider = (props) => {
  const [suggestions, setSuggestions] = useState(() => cities_data);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  return (
    <suggestionContext.Provider value={{ suggestions, setSuggestions, isDropdownVisible, setDropdownVisible}}>
      {props.children}
    </suggestionContext.Provider>
  );
};

export default SuggestionProvider;
