import mock from "mocks/dataSearch.json";
import { NewsCard } from "components/NewsCard/NewsCard";

export function NewsSearch() {
  const data = mock;
  const STATIC_URL = "https://static01.nyt.com/";
  return (
    <>
      {data.response.docs.map((data) => {
        return (
          <NewsCard
            image_src={`${STATIC_URL}${data.multimedia[0].url}`}
            image_alt=""
            title={data.headline.main}
            subtitle={data.abstract}
            pub_date={data.pub_date}
            web_url={data.web_url}
            key={data.web_url}
          />
        );
      })}
    </>
  );
}
