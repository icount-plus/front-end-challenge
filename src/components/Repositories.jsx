import { useContext } from 'react';
import GitHubStats from './GitHubStats';
import { RepositoryContext } from '../contexts/RepositoryContext';
import Spinner from './Spinner';

function Repositories() {
  const { repoData, isLoading } = useContext(RepositoryContext);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center pr-1 w-full h-full border-b border-bgblue2">
      <a
        href={repoData.owner.html_url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center md:w-5/12 "
      >
        <h1
          className={`text-white ${
            repoData.owner.login.length < 14 ? 'text-2xl' : 'text-xl'
          } font-lalezar uppercase`}
        >
          {repoData.owner.login}
        </h1>
        <img
          src={repoData.owner.avatar_url}
          alt="repository owner logo"
          loading="lazy"
          className="w-16 sm:w-20 md:w-28 rounded-md"
        />
      </a>
      <div className="md:w-3/4 md:h-28 rounded-md md:border border-bgblue2 h-full py-1 px-2 text-xs font-bold text-textGray flex flex-col  sm:items-center md:items-start justify-between">
        <h2 className="text-base">
          <a href={repoData.html_url} target="_blank" rel="noreferrer">
            {repoData.name}
          </a>
        </h2>
        <p className="cutoffText">{repoData.description}</p>
        <div className="flex flex-wrap mt-2 md:mt-0">
          <GitHubStats
            stats={{
              forks: repoData.forks,
              issues: repoData.open_issues,
              stars: repoData.stargazers_count,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Repositories;
