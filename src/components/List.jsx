import React from "react";
import { useContext } from "react";
import suggestionContext from "../Contexts/suggestionContext";
function List({ setSearchQuery }) {
  const { suggestions, isDropdownVisible } = useContext(suggestionContext);

  return (
    <div
      className="list__container"
      style={{ height: isDropdownVisible ? "140px" : "0px" }}
    >
      <ul>
        {suggestions.map((suggestion, index) => (
          <li
            style={{ width: "100%", height: "100%" }}
            key={index}
            onClick={() => setSearchQuery(suggestion)}
            
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
