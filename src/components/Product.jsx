import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/CartSlice";

function Product({ post }) {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeToCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };
  return (
    <div className=" flex flex-col justify-center items-center hover:scale-110 transition duration-200 ease-in border shadow-lg hover:shadow-2xl gap-3 mt-10 ml-5 rounded-xl p-4">
      <div>
        <p className="text-gray-600 truncate w-40 mt-1 text-md font-bold">{`${post.title.substr(0,20)}...`}</p>
      </div>
      <div>
        <p className="text-[12px] text-gray-500 ">{`${post.description.substr(0,80)}....`}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image}  className="h-full w-full" alt="" />
      </div>
      <div className="flex w-full justify-between px-2 pt-2 items-center">
        <p className="text-green-600 text-md font-bold">$ {post.price}</p>

        <div
          onClick={() => {
            setSelected(!selected);
          }}
        >
          {selected ? (
            <button className="text-xl" onClick={removeToCart}>
              <MdDelete />
            </button>
          ) : (
            <button className="text-xl" onClick={addToCart}>
              <FaCartPlus />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
