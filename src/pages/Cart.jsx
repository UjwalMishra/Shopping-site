import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="w-full">
      {cart.length > 0 ? (
        <div className="max-w-5xl flex mx-auto mt-16">
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="flex flex-col mr-2 mx-auto">
            <div>
              <p className="text-green-600 text-xl font-semibold">Your Cart</p>
              <p className="text-green-600 text-5xl font-bold">Summary</p>
              <p className="mt-8">
                <span className="font-bold text-gray-700">Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="mt-8 flex flex-col">
              <p className="text-md font-semibold">Total Amount: <span className="font-bold text-green-700">${totalAmount}</span></p>
              <button className="bg-green-600 p-2 rounded-xl text-white font-bold mt-8">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" h-[80vh] flex justify-center items-center">
          <div className="flex flex-col mx-auto justify-center items-center">
            <h2 className="text-xl font-bold text-gray-700 mb-8">Your cart is empty</h2>
            <NavLink to="/">
              <button className="bg-green-600 py-2 px-4 rounded-xl text-white font-bold">Shop Now</button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
