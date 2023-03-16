import { useContext } from 'react';
import { ContributorsContext } from '../contexts/ContributorsContext';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import GitHubStats from './GitHubStats';
import Spinner from './Spinner';
import SingleContributor from './SingleContributor';

function ContributorsResponse() {
  const { contributorsData, isLoading, contributor } =
    useContext(ContributorsContext);

  useInfiniteScroll();

  if (!contributorsData && contributor) {
    return <SingleContributor />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="overflow-auto max-h-64 h-full">
      {/* eslint-disable-next-line array-callback-return */}
      {contributorsData.map((page) =>
        // eslint-disable-next-line no-shadow
        page.map((contributor) => (
          <div
            key={contributor.id}
            className="border-b border-bgblue2 px-4 pb-4 pt-1 mt-3"
          >
            <div className="flex items-center">
              <a href={contributor.html_url} target="_blank" rel="noreferrer">
                <img
                  src={contributor.avatar_url}
                  className="w-11 rounded-full mr-3"
                  alt="contributor"
                  loading="lazy"
                />
              </a>
              <div>
                <p className="text-textBlue mb-1 cursor-pointer w-fit">
                  <a
                    href={contributor.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contributor.login}
                  </a>
                </p>
                <div className="flex flex-wrap mt-2 md:mt-0 text-xs font-bold text-textGray ">
                  <GitHubStats
                    stats={{
                      commits: contributor.contributions,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <li className="w-full" id="loadMore" />
    </div>
  );
}

export default ContributorsResponse;
