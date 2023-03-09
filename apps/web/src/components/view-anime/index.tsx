import { ViewAnimeProps } from './model';

import './styles.scss';

export const ViewAnime = ({
  anime: { cover, title, description, popularity, rank, source },
}: ViewAnimeProps) => {
  const coverStyles = { backgroundImage: `url(${cover})` };

  return (
    <div className="view-anime-container">
      <div>
        <div className="cover-anime" style={coverStyles} />

        <div className="title-anime">
          <h3>{title}</h3>

          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>

      <div className="badge-anime">
        <div>
          Source
          <div />
          <span>{source}</span>
        </div>
        <div>
          Rank
          <div />
          <span>{rank}</span>
        </div>
        <div>
          Popularity
          <div />
          <span> {popularity}</span>
        </div>
      </div>
    </div>
  );
};
