import { useContext } from 'react';
import { RepositoryContext } from '../contexts/RepositoryContext';
import FilterContributors from './FilterContributors';
import Repositories from './Repositories';
import ContributorsResponse from './ContributorsResponse';
import ContributorsProvider from '../contexts/ContributorsContext';
import Spinner from './Spinner';

function Contributors() {
  const { repoData, isLoading } = useContext(RepositoryContext);

  if (!repoData) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ContributorsProvider>
      <FilterContributors />
      <div className="flex flex-col justify-center max-w-2xl w-full sm:w-full bg-bgblue rounded-b-lg rounded-bl-lg border-x border-b border-bgblue2  pt-3">
        <Repositories />
        <ContributorsResponse />
      </div>
    </ContributorsProvider>
  );
}

export default Contributors;
