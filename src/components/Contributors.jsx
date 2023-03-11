import { useContext } from 'react';
import { RepositoryContext } from '../contexts/RepositoryContext';
import FilterContributors from './FilterContributors';
import Repositories from './Repositories';
import ContributorsResponse from './ContributorsResponse';

function Contributors() {
  const { data, error, isLoading } = useContext(RepositoryContext);

  if (!data) {
    return null;
  }

  return (
    <>
      <FilterContributors />
      <div className="flex flex-col justify-center max-w-2xl w-full sm:w-full bg-bgblue rounded-b-lg rounded-bl-lg border-x border-b border-bgblue2  py-3">
        <Repositories />
        <ContributorsResponse />
      </div>
    </>
  );
}

export default Contributors;