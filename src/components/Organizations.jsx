import { TbUsers, TbMoodHappy } from 'react-icons/tb';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { VscIssues } from 'react-icons/vsc';

const ICONS_MAP = {
  Followers: TbUsers,
  Repositories: RiGitRepositoryLine,
  Issues: VscIssues,
  Contributors: TbMoodHappy,
};

function Organizations() {
  return (
    <div className=" flex items-center max-w-2xl w-full sm:w-full md:h-28 bg-bgblue rounded-b-lg rounded-bl-lg border-x border-b border-bgblue2 py-1 px-2">
      <div className="flex flex-col md:flex-row md:items-center p-1 w-full h-full">
        <div className="flex items-center md:w-5/12 ">
          <img
            src="https://avatars.githubusercontent.com/u/98126579?v=4"
            alt="organization logo"
            loading="lazy"
            className="w-16 sm:w-20 md:w-20 rounded-full"
          />
          <h1 className="text-white ml-3 text-center text-xl font-lalezar uppercase">
            Organization
          </h1>
        </div>
        <div className="md:w-3/4 rounded-md border border-bgblue2 h-full py-1 px-2 text-xs font-bold text-neutral-300 flex flex-col justify-between">
          <p>
            Treetracker - Addressing Poverty and Climate Change through
            transparency in tree growing efforts
          </p>
          <div className="flex flex-col sm:flex-row mt-2 md:mt-0">
            {['Followers', 'Repositories', 'Issues', 'Contributors'].map(
              (name) => (
                <OrgGitHubInfo iconName={name} key={name} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function OrgGitHubInfo({ iconName }) {
  const Icon = ICONS_MAP[iconName];

  return (
    <div className="mr-2 flex items-center">
      <Icon />
      <p>
        <span className="text-white">12</span> {iconName}
      </p>
    </div>
  );
}

export default Organizations;
