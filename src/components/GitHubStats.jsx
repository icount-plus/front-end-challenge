import {
  VscRepoForked,
  VscIssues,
  VscStarEmpty,
  VscGitCommit,
} from 'react-icons/vsc';
import numeral from 'numeral';

function GitHubStats({ stats: { forks, issues, stars, commits } }) {
  return !commits ? (
    <>
      <div className="mr-2 flex items-center">
        <VscRepoForked color="#FFF" />
        <p className="ml-1">{numeral(forks).format('0a')} Forks</p>
      </div>
      <div className="mr-2 flex items-center">
        <VscIssues color="#FFF" />
        <p className="ml-1">{numeral(issues).format('0a')} Issues</p>
      </div>
      <div className="mr-2 flex items-center">
        <VscStarEmpty color="#FFF" />
        <p className="ml-1">{numeral(stars).format('0a')} Stars</p>
      </div>
    </>
  ) : (
    <div className="mr-2 flex items-center">
      <VscGitCommit color="#FFF" />
      <p className="ml-1">
        {numeral(commits).format('0a')} Commits in this repository
      </p>
    </div>
  );
}

export default GitHubStats;
