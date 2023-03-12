import { createContext, useContext, useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';
import fetcher from '../api/contributorsApi';
import { RepositoryContext } from './RepositoryContext';

export const ContributorsContext = createContext(null);

export default function ContributorsProvider({ children }) {
  const { RepoData } = useContext(RepositoryContext);

  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    (index) =>
      RepoData
        ? `/repos/${RepoData.full_name}/contributors?per_page=5&page=${
            index + 1
          }`
        : null,
    fetcher
  );

  const value = useMemo(
    () => ({
      ContributorsData: data,
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
