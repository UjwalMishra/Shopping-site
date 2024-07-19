import "./Spinner.css";

function Spinner() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="lds-hourglass text-xl"></div>
    </div>
  );
}

export default Spinner;
