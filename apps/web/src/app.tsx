import { RouterProvider } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import Navbar from './components/navbar';

import { router } from './router';
import { AppState } from './store';

import '@/global/global.scss';

const App = () => {
  const { theme } = useSelector((state: AppState) => state);
  // useEffect(() => {
  //   axios
  //     .get(`https://api.jikan.moe/v4/anime?q=naruto`)
  //     .then(res => console.log(res.data));
  // }, []);

  return (
    <div className={classNames({ [theme]: true })}>
      <Navbar />

      <RouterProvider router={router} />
    </div>
  );
};

export default App;
