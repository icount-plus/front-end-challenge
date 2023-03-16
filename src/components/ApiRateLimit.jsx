import { RiErrorWarningLine } from 'react-icons/ri';

function ApiRateLimit() {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="flex items-center mb-1">
        <RiErrorWarningLine size="30px" />
        <p className="ml-1 font-lalezar uppercase tracking-wide">
          API rate limit exceeded!
        </p>
      </div>
      <p className="text-xs font-bold text-textGray">
        Wait 1 minute to search again
      </p>
    </div>
  );
}

export default ApiRateLimit;
