import { useEffect, useState } from 'react';
import { MaeCard, MaeGhostLoader, MaeModal } from '@mae/core';
import { useDispatch, useSelector } from 'react-redux';

import { getTopAnimesService } from '@/services/anime.services';
import { setAnimesAction } from '@/store/actions/anime.actions';
import { AppState } from '@/store';

import './styles.scss';

const Index = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const {
    anime: {
      animes: { isLoading: loading, data: animes },
    },
  } = useSelector((state: AppState) => state);

  useEffect(() => {
    getTopAnimesService().then(animes => animes && dispatch(setAnimesAction(animes)));
  }, []);

  const ghostLoaders = Array.from({ length: 13 }, (_, i) => i);

  const onViewAnime = () => {
    setOpenModal(true);
  };

  return (
    <div className="index-container">
      <MaeModal open={openModal} onClose={() => setOpenModal(false)}>
        <h1>Hello</h1>
      </MaeModal>
      <div>
        {loading
          ? ghostLoaders.map(value => <MaeGhostLoader key={value} />)
          : animes &&
            animes.map(anime => (
              <MaeCard key={anime.id} {...anime} onClick={() => onViewAnime()} />
            ))}
      </div>
    </div>
  );
};

export default Index;
