import { ViewAnimeProps } from './model';

import './styles.scss';

export const ViewAnime = ({
  anime: { cover, title, description, popularity, rank, source },
  onClose,
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

      <i className="ri-close-line" onClick={() => onClose()} />

      <div className="badge-anime">
        <div>
          <p>Source</p>
          <div />
          <span>{source}</span>
        </div>
        <div>
          <p>Rank</p>
          <div />
          <span>{rank}</span>
        </div>
        <div>
          <p>Popularity</p>
          <div />
          <span> {popularity}</span>
        </div>
      </div>
    </div>
  );
};
