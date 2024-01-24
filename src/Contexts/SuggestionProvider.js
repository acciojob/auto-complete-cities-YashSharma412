import React, { useState } from "react";
import SuggestionContext from "./suggestionContext";
import cities_data from "../data/cities_data";
const SuggestionProvider = (props) => {
  const [suggestions, setSuggestions] = useState(() => cities_data);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  return (
    <SuggestionContext.Provider value={{ suggestions, setSuggestions, isDropdownVisible, setDropdownVisible}}>
      {props.children}
    </SuggestionContext.Provider>
  );
};

export default SuggestionProvider;
