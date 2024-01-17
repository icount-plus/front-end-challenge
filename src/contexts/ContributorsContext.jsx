import { createContext, useContext, useMemo, useState } from 'react';
import useSWRInfinite from 'swr/infinite';
import useSWR from 'swr';
import {
  fetcher,
  getKeyContributors,
  getKeyContributor,
} from '../api/contributorsApi';
import { RepositoryContext } from './RepositoryContext';

export const ContributorsContext = createContext(null);

export default function ContributorsProvider({ children }) {
  const [contributorProfile, setContributorProfile] = useState(null);
  const [contributor, setContributor] = useState(null);
  const [loadingContributor, setLoadingContributor] = useState(false);
  const [errorSearch, setErrorSearch] = useState(0);
  const [isListContributors, setIsListContributors] = useState(false);

  const { repoData } = useContext(RepositoryContext);

  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    repoData
      ? (index, prevPage) =>
          getKeyContributors(
            index,
            prevPage,
            repoData.full_name,
            isListContributors ? 5 : 15
          )
      : null,
    fetcher
  );

  const { data: profileData, isLoading: loadingProfile } = useSWR(
    contributorProfile ? getKeyContributor(contributorProfile) : null,
    fetcher
  );

  const value = useMemo(
    () => ({
      contributorsData: contributor ? undefined : data,
      error,
      isLoading,
      size,
      contributor,
      profileData,
      loadingProfile,
      loadingContributor,
      errorSearch,
      isListContributors,
      setIsListContributors,
      setSize,
      setContributor,
      setLoadingContributor,
      setErrorSearch,
      setContributorProfile,
    }),
    [
      data,
      error,
      isLoading,
      size,
      contributor,
      profileData,
      loadingProfile,
      loadingContributor,
      errorSearch,
      isListContributors,
    ]
  );

  return (
    <ContributorsContext.Provider value={value}>
      {children}
    </ContributorsContext.Provider>
  );
}
