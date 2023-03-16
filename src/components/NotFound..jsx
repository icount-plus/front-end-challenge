import { RiGitRepositoryLine } from 'react-icons/ri';

function NotFound({ children }) {
  return (
    <div className="flex items-center">
      <RiGitRepositoryLine size="30px" />
      <p className="ml-1 font-lalezar uppercase tracking-wide">{children}</p>
    </div>
  );
}

export default NotFound;
