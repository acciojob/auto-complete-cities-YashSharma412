import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import SuggestionProvider from "./Contexts/SuggestionProvider";
ReactDOM.render(
  <SuggestionProvider>
    <App />
  </SuggestionProvider>,
  document.getElementById("root")
);
