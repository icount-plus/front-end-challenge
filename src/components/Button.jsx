import { FaSearch } from 'react-icons/fa';

function Button({ text, colors }) {
  const bgColor = `bg-${colors[0]}`;
  const borderColor = `border-${colors[1]}`;

  return (
    <>
      <div
        className={`btn tracking-wide font-lalezar text-sm sm:text-base ${bgColor} translate-x-1 border-b-4 ${borderColor} rounded-md px-2 py-1 mr-2 my-1 leading-4`}
      >
        {text || <FaSearch />}
      </div>
      {/* bg-bgButtonBlue bg-bgButtonGreen bg-bgblue2 border-bdButtonBlue border-bdButtonGreen border-bgblue */}
    </>
  );
}

export default Button;
