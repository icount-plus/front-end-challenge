import { createContext, useContext, useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';
import { fetcher, getKeyContributors } from '../api/contributorsApi';
import { RepositoryContext } from './RepositoryContext';

export const ContributorsContext = createContext(null);

export default function ContributorsProvider({ children }) {
  const { repoData } = useContext(RepositoryContext);

  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    repoData
      ? (index, prevPage) =>
          getKeyContributors(index, prevPage, repoData.full_name)
      : null,
    fetcher
  );

  const value = useMemo(
    () => ({
      contributorsData: data,
      error,
      isLoading,
      size,
      setSize,
    }),
    [data, error, isLoading, size]
  );

  return (
    <ContributorsContext.Provider value={value}>
      {children}
    </ContributorsContext.Provider>
  );
}
