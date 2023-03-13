import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { RepositoryContext } from '../contexts/RepositoryContext';
import { ContributorsContext } from '../contexts/ContributorsContext';
import api from '../api';

export default function useSearchContributor() {
  const [searchContributor, setSearchContributor] = useState('');
  const { repoData } = useContext(RepositoryContext);
  const { setContributor } = useContext(ContributorsContext);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (repoData && searchContributor) {
      let cancel;
      (async () => {
        try {
          const res = await api.get(
            `https://api.github.com/search/commits?q=author:${searchContributor}+repo:${repoData?.full_name}&per_page=1`,
            {
              // eslint-disable-next-line no-return-assign
              cancelToken: new axios.CancelToken((c) => (cancel = c)),
            }
          );
          setContributor(res.data);
        } catch (error) {
          if (axios.isCancel(error)) {
            cancel();
          } else {
            console.error(error);
          }
        }
      })();
      return () => {
        cancel();
      };
    }
    return () => null;
  }, [searchContributor]);

  return {
    searchContributor,
    setSearchContributor,
  };
}
