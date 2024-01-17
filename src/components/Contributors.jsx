import { useContext } from 'react';
import { RepositoryContext } from '../contexts/RepositoryContext';
import FilterContributors from './FilterContributors';
import Repositories from './Repositories';
import ContributorsResponse from './ContributorsResponse';
import Spinner from './Spinner';
import ContributorsBubbleResponse from './ContributorsBubbleResponse';
import { ContributorsContext } from '../contexts/ContributorsContext';

function Contributors() {
  const { isLoading } = useContext(RepositoryContext);
  const { isListContributors } = useContext(ContributorsContext);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <FilterContributors />
      <div className="flex flex-col justify-center max-w-2xl w-full sm:w-full bg-bgblue rounded-b-lg rounded-bl-lg border-x border-b border-bgblue2  pt-3">
        <Repositories />
        {isListContributors ? (
          <ContributorsResponse />
        ) : (
          <ContributorsBubbleResponse />
        )}
      </div>
    </>
  );
}

export default Contributors;
