import { useContext } from 'react';
import { ContributorsContext } from '../contexts/ContributorsContext';
import ApiRateLimit from './ApiRateLimit';
import GitHubStats from './GitHubStats';
import NotFound from './NotFound.';
import Spinner from './Spinner';
import useMousePosition from '../hooks/useMousePosition';
import ContributorProfile from './ContributorProfile';

function SingleContributor() {
  const { handleOnMouseMove, position, setIsBoolean, isBoolean } =
    useMousePosition();
  const {
    contributor,
    setContributorProfile,
    loadingContributor,
    errorSearch,
  } = useContext(ContributorsContext);

  if (loadingContributor) {
    return (
      <div className="p-5">
        <Spinner />
      </div>
    );
  }
  if (errorSearch === 403) {
    return <ApiRateLimit />;
  }

  if (!contributor.total_count || errorSearch === 422) {
    return (
      <div className="flex flex-col items-center p-10">
        <NotFound>Contributor not found</NotFound>
      </div>
    );
  }

  return (
    <div className="overflow-auto max-h-64 h-full">
      {isBoolean && (
        <div
          onMouseEnter={() => setIsBoolean(true)}
          onMouseLeave={() => setIsBoolean(false)}
          className="absolute border-b bg-bgGray border-bgblue2 p-4 rounded-lg"
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          <ContributorProfile />
        </div>
      )}
      <div
        key={contributor.items[0]?.author.id}
        className="border-b border-bgblue2 px-4 pb-4 pt-1 mt-3"
      >
        <div className="flex items-center">
          <a
            href={contributor.items[0]?.author.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={contributor.items[0]?.author.avatar_url}
              className="w-11 rounded-full mr-3"
              alt="contributor"
              loading="lazy"
              onMouseEnter={(e) =>
                handleOnMouseMove(
                  e,
                  contributor.items[0]?.author.login,
                  setContributorProfile
                )
              }
              onMouseLeave={() => setIsBoolean(false)}
            />
          </a>
          <div>
            <p className="text-textBlue mb-1 cursor-pointer w-fit">
              <a
                href={contributor.items[0]?.author.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {contributor.items[0]?.author.login}
              </a>
            </p>
            <div className="flex flex-wrap mt-2 md:mt-0 text-xs font-bold text-textGray ">
              <GitHubStats
                stats={{
                  commits: contributor.total_count,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleContributor;
