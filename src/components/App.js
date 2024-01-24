import React from "react";
import { useState } from "react";
import "./../styles/App.css";
import List from "./List";
import Search from "./Search";
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App" >
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <List setSearchQuery={setSearchQuery}/>
    </div>
  );
};

export default App;
