import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { RepositoryContext } from '../contexts/RepositoryContext';
import { ContributorsContext } from '../contexts/ContributorsContext';
import api from '../api';

export default function useSearchContributor() {
  const [searchContributor, setSearchContributor] = useState('');
  const { repoData } = useContext(RepositoryContext);
  const { setContributor } = useContext(ContributorsContext);

  useEffect(() => {
    if (repoData && searchContributor) {
      const source = axios.CancelToken.source();
      (async () => {
        try {
          const res = await api.get(
            `https://api.github.com/search/commits?q=author:${searchContributor}+repo:${repoData?.full_name}&per_page=1`
          );
          setContributor(res.data.items[0]);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.error('axios error: ', error.message);
          } else {
            console.error(error);
          }
        }
      })();
      return () => {
        source.cancel('Pervious request canceled');
      };
    }
  }, [searchContributor]);

  return {
    searchContributor,
    setSearchContributor,
  };
}
