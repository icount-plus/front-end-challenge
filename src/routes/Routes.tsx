import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "pages/Home/Home";
import { NewsList } from "pages/NewsList/NewsList";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<NewsList />} path="/newslist" />
      </Routes>
    </BrowserRouter>
  );
};
