import React from 'react'
import { useContext } from 'react';
import SuggestionContext from '../Contexts/suggestionContext';
function List({setSearchQuery}) {
  const { suggestions, isDropdownVisible } = useContext(SuggestionContext);

return (
        <div className='list__container' style={{height: isDropdownVisible ? "140px" : "0px"}}>
        <ul>
          {
            suggestions.map((suggestion, index)=>(
              <li style={{outline: "1px solid red"}} key={index} onClick={()=>setSearchQuery(suggestion)}>{suggestion}</li>
              ))
          }
        </ul> 
        
      </div>
    )

}

export default List;
