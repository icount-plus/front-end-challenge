import Button from './Button';
import Input from './Input';

function FilterContributors() {
  return (
    <div className=" flex items-center max-w-2xl sm:w-full bg-gray-2 rounded-lg py-1 px-2">
      <div className="flex sm:w-2/4">
        <Button text="Top Contributors" colors={['blue-3', 'blue-4']} />
        <Button text="All Contributors" colors={['blue-3', 'blue-4']} />
      </div>

      <div className="hidden sm:w-2/4 sm:block">
        <Input button={false} />
      </div>
      <div className="sm:hidden">
        <Button text="FaSearch" colors={['blue-2', 'blue-1']} />
      </div>
    </div>
  );
}

export default FilterContributors;
