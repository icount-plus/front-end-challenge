import { FaSearch } from 'react-icons/fa';

function Button({ text, colors, disabled, onClick, className }) {
  const color = {
    blue: 'bg-bgButtonBlue border-bdButtonBlue',
    green: 'bg-bgButtonGreen border-bdButtonGreen',
    none: 'text-textGray2 border-bgblue2 bg-transparent border-2 border-b-2 duration-200 hover:text-textGray hover:border-textGray ',
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`btn tracking-wide font-lalezar text-sm sm:text-base border-b-4 transition-all ${
          color[colors] || color.none
        } translate-x-1 rounded-md px-2 py-1 mr-2 my-1 leading-4 ${className}`}
      >
        {text || <FaSearch />}
      </button>
      {/* bg-bgButtonBlue bg-bgButtonGreen bg-bgblue2 border-bdButtonBlue border-bdButtonGreen border-bgblue */}
    </>
  );
}

export default Button;

// import { FaSearch } from 'react-icons/fa';

// function Button({ text, colors, disabled }) {
//   const bgColor = `disabled:bg-${colors[0]}`;
//   const borderColor = `disabled:border-${colors[1]}`;

//   return (
//     <>
//       <button
//         disabled={disabled}
//         type="button"
//         className={`btn tracking-wide font-lalezar text-sm sm:text-base  translate-x-1 rounded-md px-2 py-1 mr-2 my-1 leading-4 bg-transparent disabled:${bgColor} disabled:border-b-4
//         border-2 disabled:${borderColor} text-textGray2 disabled:text-white border-bgblue2`}
//       >
//         {text || <FaSearch />}
//       </button>
//       {/* bg-bgButtonBlue bg-bgButtonGreen bg-bgblue2 border-bdButtonBlue border-bdButtonGreen border-bgblue */}
//     </>
//   );
// }

// export default Button;
