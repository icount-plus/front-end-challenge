import { createContext, useMemo, useState } from 'react';
import useSWR from 'swr';
import { fetcher, getKeyRepo } from '../api/repositoryApi';

export const RepositoryContext = createContext(null);

export default function RepositoryProvider({ children }) {
  const [input, setInput] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  const getInput = ({ inputText, check }) => {
    setInput(inputText);
    setCheckBox(check);
  };

  const { data, error, isLoading } = useSWR(
    input ? getKeyRepo({ checkBox, input }) : null,
    fetcher
  );

  const value = useMemo(
    () => ({
      data,
      error,
      isLoading,
      getInput,
    }),
    [data, error, isLoading]
  );

  return (
    <RepositoryContext.Provider value={value}>
      {children}
    </RepositoryContext.Provider>
  );
}
