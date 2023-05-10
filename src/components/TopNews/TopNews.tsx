import { NewsCard } from "components/NewsCard/NewsCard";
import { useEffect, useState } from "react";
import { ITopNews } from "interfaces/ITopNews";
import { topNewsService } from "services/news";

export function TopNews() {
  const [data, setData] = useState<ITopNews>();
  useEffect(() => {
    if (typeof data === "undefined") {
      topNewsService(setData);
    }
  }, [data, setData]);
  return (
    <>
      {data?.results.map((data) => {
        return data.media.length ? (
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
