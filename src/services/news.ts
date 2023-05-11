import axios from 'axios';
import { ISearchNewsList } from 'interfaces/ISearchNewsList';
import { ITopNews } from 'interfaces/ITopNews';
import { Dispatch, SetStateAction } from 'react';

export const newsService = axios.create({
  baseURL: process.env.REACT_APP_NEWS_URL,
  params: {
    'api-key': process.env.REACT_APP_NEWS_KEY
  },
  headers: {
    Accept: 'application/json'
  }
});
export const searchNews = async (
  setData: Dispatch<SetStateAction<ISearchNewsList | undefined>>,
  search: string | undefined,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  await newsService
    .get('/search/v2/articlesearch.json', { params: { q: search } })
    .then((resp) => {
      setData(resp.data);
      setLoading(false);
    })
    .catch((resp) => alert('Você precisa fazer uma pesquisa em inglês!' + resp));
};
export const topNewsService = async (
  setData: Dispatch<SetStateAction<ITopNews | undefined>>,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  await newsService.get('mostpopular/v2/viewed/7.json').then((resp) => {
    setData(resp.data);
    setLoading(false);
  });
};
