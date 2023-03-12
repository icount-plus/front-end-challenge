import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import useSWRInfinite from 'swr/infinite';
import { fetcher, getKeyContributors } from '../api/contributorsApi';
import { RepositoryContext } from './RepositoryContext';

export const ContributorsContext = createContext(null);

export default function ContributorsProvider({ children }) {
  const [contributor, setContributor] = useState(null);
  const { repoData } = useContext(RepositoryContext);
  console.log(contributor);
  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    repoData
      ? (index, prevPage) =>
          getKeyContributors(index, prevPage, repoData.full_name)
      : null,
    fetcher
  );

  useEffect(() => {
    setContributor(null);
  }, [repoData]);

  const value = useMemo(
    () => ({
      contributorsData: contributor ? undefined : data,
      error,
      isLoading,
      size,
      contributor,
      setSize,
      setContributor,
    }),
    [data, error, isLoading, size, contributor]
  );

  return (
    <ContributorsContext.Provider value={value}>
      {children}
    </ContributorsContext.Provider>
  );
}
