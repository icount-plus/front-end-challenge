import GitHubStats from './GitHubStats';

function Organizations() {
  return (
    <div className="flex flex-col md:flex-row md:items-center pr-1 w-full h-full">
      <div className="flex flex-col items-center md:w-5/12 ">
        <h1 className="text-white text-2xl font-lalezar uppercase">
          Greenstand
        </h1>
        <img
          src="https://avatars.githubusercontent.com/u/25363578?s=200&v=4"
          alt="organization logo"
          loading="lazy"
          className="w-16 sm:w-20 md:w-28 rounded-md"
        />
      </div>
      <div className="md:w-3/4 md:h-24 rounded-md md:border border-bgblue2 h-full py-1 px-2 text-xs font-bold text-textGray flex flex-col  sm:items-center md:items-start justify-between">
        <p className="cutoffText">
          Treetracker - Addressing Poverty and Climate Change through
          transparency in tree growing.
        </p>
        <div className="flex flex-wrap mt-2 md:mt-0">
          {['Followers', 'Repositories', 'Issues', 'Contributors'].map(
            (name) => (
              <GitHubStats iconName={name} key={name} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Organizations;
