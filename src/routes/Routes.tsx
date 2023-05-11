import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Home } from 'pages/Home/Home';
import { Loading } from 'components/Loading/Loading';

const SearchNewsList = lazy(() => import('pages/SearchNewsList/SearchNewsList'));
export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={
            <Suspense fallback={<Loading />}>
              <SearchNewsList />
            </Suspense>
          }
          path="/newslist/:search"
        />
      </Routes>
    </BrowserRouter>
  );
};
