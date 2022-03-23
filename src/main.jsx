import React from "react";
import ReactDOM from "react-dom";

import "./styles/root.css";
import "./index.css";
import App from "./App.jsx";
import { SearchContextProvider } from "./store/search-context";

ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
