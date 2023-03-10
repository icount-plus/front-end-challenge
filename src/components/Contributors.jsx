import FilterContributors from './FilterContributors';
import Organizations from './Organizations';
import ContributorsResponse from './ContributorsResponse';

function Contributors() {
  return (
    <>
      <FilterContributors />
      <div className="flex flex-col justify-center max-w-2xl w-full sm:w-full bg-bgblue rounded-b-lg rounded-bl-lg border-x border-b border-bgblue2  py-3">
        <Organizations />
        <ContributorsResponse />
      </div>
    </>
  );
}

export default Contributors;
