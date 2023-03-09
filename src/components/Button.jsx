import { FaSearch } from 'react-icons/fa';

function Button({ text, colors }) {
  return (
    <button
      type="button"
      className={`tracking-wide font-lalezar text-sm sm:text-base bg-${colors[0]} translate-x-1 border-b-4 border-${colors[1]} rounded-md px-2 py-1 mr-2 my-1 leading-4`}
    >
      {text === 'FaSearch' ? <FaSearch /> : text}
    </button>
  );
}

export default Button;
