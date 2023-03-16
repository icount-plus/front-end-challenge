import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import api from '../api';
import { RepositoryContext } from '../contexts/RepositoryContext';
import { ContributorsContext } from '../contexts/ContributorsContext';

export default function useSearchContributor() {
  const [searchContributor, setSearchContributor] = useState('');
  const { repoData } = useContext(RepositoryContext);
  const { setContributor, setLoadingContributor, setErrorSearch } =
    useContext(ContributorsContext);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (repoData && searchContributor) {
      let cancel;
      (async () => {
        setLoadingContributor(true);
        try {
          const res = await api.get(
            `https://api.github.com/search/commits?q=author:${searchContributor}+repo:${repoData?.full_name}&per_page=1`,
            {
              // eslint-disable-next-line no-return-assign
              cancelToken: new axios.CancelToken((c) => (cancel = c)),
            }
          );
          setErrorSearch(0);
          setContributor(res.data);
          setLoadingContributor(false);
        } catch (error) {
          if (axios.isCancel(error)) {
            cancel();
          } else {
            if (error.response.status === 422) {
              setErrorSearch(422);
            } else {
              setErrorSearch(403);
            }
            setLoadingContributor(false);
          }
        }
      })();
      return () => {
        cancel();
      };
    }
    setContributor(null);
  }, [searchContributor]);

  return {
    searchContributor,
    setSearchContributor,
  };
}
