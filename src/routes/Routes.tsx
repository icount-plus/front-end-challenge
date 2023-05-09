import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Home } from "pages/Home/Home";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};
