import { useState } from 'react';
import Button from './Button';
import Input from './Input';

function FilterContributors() {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className=" flex items-center max-w-2xl w-full bg-bgGray rounded-t-lg rounded-tl-lg py-1 px-2">
      {!isSearch && (
        <div className="flex w-full sm:w-2/4">
          <Button
            text="Top Contributors"
            colors={['bgButtonBlue', 'bdButtonBlue']}
          />
          <Button
            text="All Contributors"
            colors={['bgButtonBlue', 'bdButtonBlue']}
          />
        </div>
      )}
      <div
        className={`${isSearch ? 'block' : 'hidden'} ${
          isSearch && 'w-full'
        } sm:w-2/4 sm:block`}
      >
        <Input placeholder="Type a contributor name..." />
      </div>
      <button
        type="button"
        className="sm:hidden"
        onClick={() => setIsSearch((val) => !val)}
      >
        {isSearch ? (
          <Button text="X" colors={['bgblue2', 'bgblue']} />
        ) : (
          <Button colors={['bgblue2', 'bgblue']} />
        )}
      </button>
    </div>
  );
}

export default FilterContributors;
