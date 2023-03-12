import Button from './Button';

function FilterContributors({ isBoolean, setIsBoolean }) {
  return (
    <div className=" flex items-center max-w-2xl w-full bg-bgGray rounded-t-lg rounded-tl-lg py-1 px-2">
      <div className="flex w-full ">
        <Button
          text="Sorted by number of commits"
          colors={['bgButtonBlue', 'bdButtonBlue']}
        />
      </div>

      <button type="button" className="w-12" onClick={setIsBoolean}>
        {isBoolean ? (
          <Button text="x" colors={['bgblue2', 'bgblue']} />
        ) : (
          <Button colors={['bgblue2', 'bgblue']} />
        )}
      </button>
    </div>
  );
}

export default FilterContributors;
