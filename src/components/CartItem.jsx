import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }
  return (
    <div>
      <div className="w-[500px] flex items-center gap-x-4 border p-4 rounded-xl shadow-xl mb-8
      hover:shadow-xl hover:scale-105 transition duration-200">
        <div className="h-[180px]">
          <img src={item.image} className="h-full w-full object-contain" alt="" />
        </div>
        <div className="flex flex-col">
          <div className=" mx-4">
            <h2 className="text-[15px] font-bold text-gray-700">
              {`${item.title.substr(0,20)}...`}</h2>
            <p className="mt-2 text-sm text-gray-700 ">{`${item.description.substr(0,100)}...`}</p>
          </div>
          <div className="flex mt-4 items-center justify-between ml-4 mr-12">
            <p className="text-green-600 font-bold">${item.price}</p>
            <button className="text-lg" onClick={removeFromCart}>
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
