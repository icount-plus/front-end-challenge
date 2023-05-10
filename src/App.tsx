import React from "react";
import { RoutesApp } from "routes/Routes";
import { SearchNewsInputContextProvider } from "contexts/SearchNewsInputContext";
import { SearchNewsListContextProvider } from "contexts/SearchNewsContextList";

function App() {
  return (
    <div className="App">
      <SearchNewsInputContextProvider>
        <SearchNewsListContextProvider>
          <RoutesApp />
        </SearchNewsListContextProvider>
      </SearchNewsInputContextProvider>
    </div>
  );
}

export default App;
