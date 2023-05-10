import { NewsCard } from 'components/NewsCard/NewsCard';
import { useSearchNewsListContext } from 'contexts/SearchNewsContextList';
import { searchNews } from 'services/news';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Loading } from 'components/Loading/Loading';

export function NewsSearch() {
  const { searchNewsList, setSearchNewsList } = useSearchNewsListContext();
  const STATIC_URL = 'https://static01.nyt.com/';
  const { search } = useParams();

  useEffect(() => {
    searchNews(setSearchNewsList, search);
  }, [search, setSearchNewsList]);

  return searchNewsList?.response.docs.length ? (
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
  ) : (
    <Loading data-testId="loading" />
  );
}
