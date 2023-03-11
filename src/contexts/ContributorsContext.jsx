import { createContext, useContext, useMemo } from 'react';
import useSWR from 'swr';
import { fetcher, getKeyContributors } from '../api/contributorsApi';
import { RepositoryContext } from './RepositoryContext';

export const ContributorsContext = createContext(null);

export default function ContributorsProvider({ children }) {
  const { RepoData } = useContext(RepositoryContext);

  const { data, error, isLoading } = useSWR(
    RepoData ? getKeyContributors({ repo: RepoData.full_name }) : null,
    fetcher
  );

  const value = useMemo(
    () => ({
      data,
      error,
      isLoading,
    }),
    [data, error, isLoading]
  );

  return (
    <ContributorsContext.Provider value={value}>
      {children}
    </ContributorsContext.Provider>
  );
}
