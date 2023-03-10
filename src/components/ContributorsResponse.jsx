import GitHubStats from './GitHubStats';

function ContributorsResponse() {
  return (
    <div className="overflow-auto max-h-56">
      <div className="border-t border-bgblue2 px-4 pt-4 pb-2 mt-3">
        <div className="flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/98126579?v=4"
            className="w-11 rounded-full mr-3"
            alt="contributor"
          />
          <div>
            <p className="text-textBlue mb-1 cursor-pointer w-fit">
              henriquemoreiraa
            </p>
            <div className="flex flex-wrap mt-2 md:mt-0 text-xs font-bold text-textGray ">
              {['Followers', 'Repositories', 'Issues', 'Contributors'].map(
                (name) => (
                  <GitHubStats iconName={name} key={name} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributorsResponse;
