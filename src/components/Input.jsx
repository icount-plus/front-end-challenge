// eslint-disable-next-line import/no-extraneous-dependencies
import { FaSearch } from 'react-icons/fa';
import Button from './Button';

function Input({ button }) {
  return (
    <div className=" flex items-center max-w-xs sm:max-w-xl sm:w-full bg-blue-1 border border-blue-2 rounded-lg">
      <FaSearch className="bg-transparent ml-2 text-blue-2 w-10 " />
      <input
        type="text"
        placeholder="Type a company name..."
        className=" w-full p-2 bg-transparent rounded-lg focus:outline-none text-xs sm:text-base"
      />
      {button && <Button text="Search" input colors={['green-1', 'green-2']} />}
    </div>
  );
}

export default Input;
