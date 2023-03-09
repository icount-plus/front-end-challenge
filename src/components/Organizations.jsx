import { TbUsers, TbMoodHappy } from 'react-icons/tb';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { VscIssues } from 'react-icons/vsc';

function Organizations() {
  return (
    <div className=" flex items-center max-w-2xl w-full sm:w-full md:h-28 bg-blue-1 rounded-b-lg rounded-bl-lg border-x border-b border-blue-2 py-1 px-2">
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
        <div className="md:w-3/4 rounded-md border border-blue-2 h-full py-1 px-2 text-xs font-bold text-neutral-300 flex flex-col justify-between">
          <p>
            Treetracker - Addressing Poverty and Climate Change through
            transparency in tree growing efforts
          </p>
          <div className="flex flex-col sm:flex-row mt-2 md:mt-0">
            {['Followers', 'Repositories', 'Issues', 'Contributors'].map(
              (name) => (
                <OrgGitHubInfo icon={name} key={name} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function OrgGitHubInfo({ icon }) {
  return (
    <div className="mr-2 flex items-center">
      {icon === 'Followers' && <TbUsers />}
      {icon === 'Repositories' && <RiGitRepositoryLine />}
      {icon === 'Issues' && <VscIssues />}
      {icon === 'Contributors' && <TbMoodHappy />}{' '}
      <p>
        <span className="text-white">12</span> {icon}
      </p>
    </div>
  );
}

export default Organizations;
