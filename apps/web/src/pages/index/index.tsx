import { useEffect } from 'react';
import { MaeCard, MaeGhostLoader } from '@mae/core';
import { useDispatch, useSelector } from 'react-redux';

import { getTopAnimesService, searchAnimesService } from '@/services/anime.services';
import { setAnimesAction } from '@/store/actions/anime.actions';
import { AppState } from '@/store';

import './styles.scss';

const Index = () => {
  const dispatch = useDispatch();
  const {
    anime: {
      animes: { isLoading: loading, data: animes },
    },
  } = useSelector((state: AppState) => state);

  useEffect(() => {
    getTopAnimesService().then(animes => animes && dispatch(setAnimesAction(animes)));
  }, []);

  const ghostLoaders = Array.from({ length: 13 }, (_, i) => i);

  return (
    <div className="index-container">
      <div>
        {loading
          ? ghostLoaders.map(_ => <MaeGhostLoader />)
          : animes && animes.map(anime => <MaeCard {...anime} />)}
      </div>
    </div>
  );
};

export default Index;
