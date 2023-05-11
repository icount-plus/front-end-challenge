import React from 'react';
import { RoutesApp } from 'routes/Routes';
import { SearchNewsInputContextProvider } from 'contexts/SearchNewsInputContext';
import { SearchNewsListContextProvider } from 'contexts/SearchNewsContextList';
import { LoadingContextProvider } from 'contexts/LoadingContext';

function App() {
  return (
    <div className="App">
      <SearchNewsInputContextProvider>
        <SearchNewsListContextProvider>
          <LoadingContextProvider>
            <RoutesApp />
          </LoadingContextProvider>
        </SearchNewsListContextProvider>
      </SearchNewsInputContextProvider>
    </div>
  );
}

export default App;
