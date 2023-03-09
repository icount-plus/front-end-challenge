// eslint-disable-next-line import/no-extraneous-dependencies
import { FaSearch } from 'react-icons/fa';
import Button from './Button';

function Input() {
  return (
    <div className="flex justify-center my-16">
      <div className=" flex items-center max-w-xs sm:max-w-xl sm:w-full bg-blue-1 border border-blue-2 rounded-lg outline-none focus:outline-none">
        <FaSearch className="bg-transparent m-2 text-blue-2" size="30px" />
        <input
          type="text"
          className=" w-full p-2 bg-transparent rounded-lg focus:outline-none "
        />
        <Button />
      </div>
    </div>
  );
}

export default Input;
