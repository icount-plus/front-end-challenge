import { TbUsers, TbMoodHappy } from 'react-icons/tb';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { VscIssues } from 'react-icons/vsc';

const ICONS_MAP = {
  Followers: TbUsers,
  Repositories: RiGitRepositoryLine,
  Issues: VscIssues,
  Contributors: TbMoodHappy,
};

function GitHubStats({ iconName }) {
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

export default GitHubStats;
