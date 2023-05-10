import "./styles.scss";
import { getDate } from "utils/getDate";

type NewsCardProps = {
  title: string;
  image_src: string;
  image_alt: string;
  pub_date: string;
  subtitle: string;
  web_url: string;
};
export function NewsCard({
  title,
  image_alt,
  image_src,
  pub_date,
  subtitle,
  web_url,
}: NewsCardProps) {
  return (
    <>
      <div className="card">
        <img src={image_src} alt={image_alt} className="card__image" />
        <div className="card__content">
          <p className="card__content-publishedTime">
            Publicado em: {getDate(pub_date)}
          </p>
          <a className="card__content-title" href={web_url}>
            {title}
          </a>
          <p className="card__content-subtitle">{subtitle}</p>
        </div>
      </div>
    </>
  );
}
