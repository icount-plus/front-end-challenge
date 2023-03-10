// eslint-disable-next-line import/no-extraneous-dependencies
import { FaSearch } from 'react-icons/fa';
import Button from './Button';

function Input({ button, placeholder }) {
  return (
    <div className=" flex items-center max-w-xs sm:max-w-xl sm:w-full bg-bgblue border border-bgblue2 rounded-lg">
      <FaSearch className="bg-transparent ml-2 text-bgblue2 w-10 " />
      <input
        type="text"
        placeholder={placeholder}
        className=" w-full p-2 bg-transparent rounded-lg focus:outline-none text-xs sm:text-base"
      />
      {button && (
        <Button
          text="Search"
          input
          colors={['bgButtonGreen', 'bdButtonGreen']}
        />
      )}
    </div>
  );
}

export default Input;
