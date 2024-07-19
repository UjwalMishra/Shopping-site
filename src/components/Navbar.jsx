import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="max-w-5xl h-16 mx-auto  flex  justify-between items-center">
      <NavLink to="/">
        <div>
          <img src="/assets/logo.png" width={130} alt="" />
        </div>
      </NavLink>
      <div className="flex items-center text-white gap-x-8 ">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative text-lg">
            <FaCartPlus />
            <p className="text-sm absolute -top-2 left-3.5 bg-green-400 rounded-full w-5 flex justify-center items-center animate-bounce">{cart.length}</p>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
