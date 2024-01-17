import { useContext } from 'react';
import useBoolean from '../hooks/useBoolean';
import Button from './Button';
import Input from './Input';
import { ContributorsContext } from '../contexts/ContributorsContext';

function FilterContributors() {
  const { isBoolean, setIsBoolean } = useBoolean();
  const { isListContributors, setIsListContributors } =
    useContext(ContributorsContext);

  return (
    <div className=" flex items-center max-w-2xl w-full bg-bgGray rounded-t-lg rounded-tl-lg py-1 px-2">
      {!isBoolean && (
        <div className="flex w-full sm:w-2/4">
          <Button
            text="Top 15 contributors"
            colors={!isListContributors ? 'blue' : ''}
            disabled={!isListContributors}
            onClick={() => setIsListContributors(false)}
          />
          <Button
            disabled={isListContributors}
            text="List all contributors"
            colors={isListContributors ? 'blue' : ''}
            onClick={() => setIsListContributors(true)}
          />
        </div>
      )}
      <div
        className={` ${isBoolean ? 'w-full block' : 'hidden'} ${
          isListContributors ? ' sm:w-2/4 sm:block' : 'hidden'
        }`}
      >
        <Input button={false} placeholder="Type a contributor name" />
      </div>
      {isBoolean ? (
        <Button
          className="sm:hidden"
          onClick={() => setIsBoolean()}
          text="X"
          colors="green"
        />
      ) : (
        <Button
          className={isListContributors ? 'block sm:hidden' : 'hidden'}
          onClick={() => setIsBoolean()}
          colors="green"
        />
      )}
    </div>
  );
}

export default FilterContributors;
