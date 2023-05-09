import React, { useEffect, useState } from "react";
import { searchNews } from "./services/news";
import { RoutesApp } from "routes/Routes";

function App() {
  const [data, setData] = useState();

  // useEffect(() => {
  //   searchNews(setData);
  // }, [data, setData]);

  return (
    <div className="App">
      <RoutesApp />
    </div>
  );
}

export default App;
