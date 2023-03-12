import { useContext } from 'react';
import useBoolean from '../hooks/useBoolean';
import { RepositoryContext } from '../contexts/RepositoryContext';
import FilterContributors from './FilterContributors';
import Repositories from './Repositories';
import ContributorsResponse from './ContributorsResponse';
import ContributorsProvider from '../contexts/ContributorsContext';
import Spinner from './Spinner';

function Contributors() {
  const { isBoolean, setIsBoolean } = useBoolean();
  const { isLoading } = useContext(RepositoryContext);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ContributorsProvider>
      <FilterContributors isBoolean={isBoolean} setIsBoolean={setIsBoolean} />
      <div className="flex flex-col justify-center max-w-2xl w-full sm:w-full bg-bgblue rounded-b-lg rounded-bl-lg border-x border-b border-bgblue2  pt-3">
        {isBoolean && <Repositories />}
        <ContributorsResponse />
      </div>
    </ContributorsProvider>
  );
}

export default Contributors;
