import './index.css';

function Spinner() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="lds-dual-ring" />
    </div>
  );
}

export default Spinner;
