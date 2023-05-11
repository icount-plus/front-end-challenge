import { NewsCard } from 'components/NewsCard/NewsCard';
import { useEffect } from 'react';
import { topNewsService } from 'services/news';
import { useLoadingContext } from 'contexts/LoadingContext';
import { Loading } from 'components/Loading/Loading';
import { useTopNewsListContext } from 'contexts/TopNewsListContext';

export function TopNews() {
  const { setTopNewsList, topNewsList } = useTopNewsListContext();
  const { loading, setLoading } = useLoadingContext();

  useEffect(() => {
    if (typeof topNewsList === 'undefined') {
      setLoading(true);
      topNewsService(setTopNewsList, setLoading);
    }
  }, [topNewsList, setTopNewsList]);

  return loading ? (
    <>
      <Loading />
    </>
  ) : (
    <>
      {topNewsList?.results.map((data) => {
        return data.media.length ? (
          <NewsCard
            image_src={data.media[0]['media-metadata'][2].url}
            image_alt={`image of ${data.title}`}
            title={data.title}
            subtitle={data.abstract}
            pub_date={data.published_date}
            key={data.id}
            web_url={data.url}
          />
        ) : null;
      })}
    </>
  );
}
