import { NewsCard } from 'components/NewsCard/NewsCard';
import { useSearchNewsListContext } from 'contexts/SearchNewsContextList';
import { searchNewsService } from 'services/news';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Loading } from 'components/Loading/Loading';
import { useLoadingContext } from 'contexts/LoadingContext';

export function NewsSearchList() {
  const { searchNewsList, setSearchNewsList } = useSearchNewsListContext();
  const STATIC_URL = 'https://static01.nyt.com/';
  const { search } = useParams();
  const { setLoading, loading } = useLoadingContext();
  useEffect(() => {
    searchNewsService(setSearchNewsList, search, setLoading);
  }, [search, setSearchNewsList]);

  return loading ? (
    <Loading data-testId="loading" />
  ) : (
    <>
      {searchNewsList?.response.docs.map((data) => {
        return data.multimedia.length ? (
          <NewsCard
            image_src={`${STATIC_URL}${data.multimedia[0].url}`}
            image_alt={`image of ${data.headline.main}`}
            title={data.headline.main}
            subtitle={data.abstract}
            pub_date={data.pub_date}
            web_url={data.web_url}
            key={data.web_url}
          />
        ) : null;
      })}
    </>
  );
}
