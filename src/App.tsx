import React from 'react';
import { RoutesApp } from 'routes/Routes';
import { SearchNewsInputContextProvider } from 'contexts/SearchNewsInputContext';
import { SearchNewsListContextProvider } from 'contexts/SearchNewsContextList';
import { LoadingContextProvider } from 'contexts/LoadingContext';
import { TopNewsListContextProvider } from 'contexts/TopNewsListContext';

function App() {
  return (
    <div className="App">
      <SearchNewsInputContextProvider>
        <SearchNewsListContextProvider>
          <LoadingContextProvider>
            <TopNewsListContextProvider>
              <RoutesApp />
            </TopNewsListContextProvider>
          </LoadingContextProvider>
        </SearchNewsListContextProvider>
      </SearchNewsInputContextProvider>
    </div>
  );
}

export default App;
