import mock from "mocks/dataMock.json";
import "./styles.scss";
import { getDate } from "utils/getDate";

export function NewsCard() {
  const data = mock;
  const STATIC_URL = "https://static01.nyt.com/";
  return (
    <>
      {data.response.docs.map((data) => {
        return (
          <>
            <div className="card">
              <img
                src={`${STATIC_URL}${data.multimedia[0].url}`}
                alt=""
                className="card__image"
              />
              <div className="card__content">
                <p className="card__content-publishedTime">
                  Publicado em: {getDate(data.pub_date)}
                </p>
                <h1 className="card__content-title">{data.headline.main}</h1>
                <p className="card__content-subtitle">{data.abstract}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
