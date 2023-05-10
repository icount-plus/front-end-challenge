import mock from "mocks/dataTopNews.json";
import { NewsCard } from "components/NewsCard/NewsCard";

export function TopNews() {
  const data = mock;

  return (
    <>
      {data.results.map((data) => {
        console.log();

        return data.media[0] ? (
          <NewsCard
            image_src={data.media[0]["media-metadata"][2].url}
            image_alt="v"
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
