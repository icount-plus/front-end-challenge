import { createContext, useContext, useMemo, useState } from 'react';
import useSWRInfinite from 'swr/infinite';
import { fetcher, getKeyContributors } from '../api/contributorsApi';
import { RepositoryContext } from './RepositoryContext';

export const ContributorsContext = createContext(null);

export default function ContributorsProvider({ children }) {
  const [contributor, setContributor] = useState(null);
  const [loadingContributor, setLoadingContributor] = useState(false);
  const [errorSearch, setErrorSearch] = useState(0);

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
      contributorsData: contributor ? undefined : data,
      error,
      isLoading,
      size,
      contributor,
      loadingContributor,
      errorSearch,
      setSize,
      setContributor,
      setLoadingContributor,
      setErrorSearch,
    }),
    [data, error, isLoading, size, contributor, loadingContributor, errorSearch]
  );

  return (
    <ContributorsContext.Provider value={value}>
      {children}
    </ContributorsContext.Provider>
  );
}
