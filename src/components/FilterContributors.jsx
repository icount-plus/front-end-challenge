import useBoolean from '../hooks/useBoolean';
import Button from './Button';
import Input from './Input';

function FilterContributors() {
  const { isBoolean, setIsBoolean } = useBoolean();

  return (
    <div className=" flex items-center max-w-2xl w-full bg-bgGray rounded-t-lg rounded-tl-lg py-1 px-2">
      {!isBoolean && (
        <div className="flex w-full sm:w-2/4">
          <button type="button">
            <Button
              text="Top Contributors"
              colors={['bgButtonBlue', 'bdButtonBlue']}
            />
          </button>
          <button type="button">
            <Button
              text="All Contributors"
              colors={['bgButtonBlue', 'bdButtonBlue']}
            />
          </button>
        </div>
      )}
      <div
        className={`${isBoolean ? 'block' : 'hidden'} ${
          isBoolean && 'w-full'
        } sm:w-2/4 sm:block`}
      >
        <Input placeholder="Type a contributor name..." />
      </div>
      <button
        type="button"
        className="sm:hidden"
        onClick={() => setIsBoolean((v) => !v)}
      >
        {isBoolean ? (
          <Button text="X" colors={['bgblue2', 'bgblue']} />
        ) : (
          <Button colors={['bgblue2', 'bgblue']} />
        )}
      </button>
    </div>
  );
}

export default FilterContributors;
