import { useContext, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RepositoryContext } from '../contexts/RepositoryContext';
import Button from './Button';
import enterPress from '../utils/enterPress';
import useSearchContributor from '../hooks/useSearchContributor';

function Input({ button, placeholder }) {
  const { getInput } = useContext(RepositoryContext);
  const inputRef = useRef(null);
  const checkRef = useRef(null);
  const { setSearchContributor } = !button && useSearchContributor();

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        button && 'my-16'
      }`}
    >
      <div className=" flex items-center max-w-xl w-full bg-bgblue border border-bgblue2 rounded-lg">
        <FaSearch className="bg-transparent ml-2 text-bgblue2 w-10 " />
        <input
          type="text"
          ref={inputRef}
          onKeyDown={(e) => enterPress({ e, getInput, inputRef, checkRef })}
          onChange={(e) => !button && setSearchContributor(e.target.value)}
          placeholder={placeholder}
          className=" w-full p-2 bg-transparent rounded-lg focus:outline-none text-xs sm:text-base"
        />
        {button && (
          <button
            type="button"
            onClick={() =>
              getInput({
                inputText: inputRef.current.value,
                check: checkRef.current.checked,
              })
            }
          >
            <Button
              text="Search"
              input
              colors={['bgButtonGreen', 'bdButtonGreen']}
            />
          </button>
        )}
      </div>

      <div className={`max-w-xl w-full pl-1 pt-1  ${!button && 'hidden'}`}>
        <input type="checkbox" name="accurateRepo" ref={checkRef} />
        <span className="ml-1 text-xs font-bold">
          Get a more accurate repository - OWNER/REPOSITORY
          <p className="text-neutral-400">
            ex: henriquemoreiraa/find-contributors
          </p>
        </span>
      </div>
    </div>
  );
}

export default Input;
