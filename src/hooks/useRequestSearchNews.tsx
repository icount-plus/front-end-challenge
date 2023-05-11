import { useLoadingContext } from 'contexts/LoadingContext';
import { useSearchNewsInputContext } from 'contexts/SearchNewsInputContext';
import { KeyboardEventHandler, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRequestSearchNews = () => {
  const navigate = useNavigate();
  const { search } = useSearchNewsInputContext();
  const { setLoading } = useLoadingContext();
  const handleInput: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        navigate(`/newslist/${search}`);
        setLoading(true);
      }
    },
    [navigate, search]
  );
  return { handleInput };
};
