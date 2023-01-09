import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiXCircle, BiTrash } from "react-icons/bi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const { id, title, image, price, amount } = item;
  return (
    <div
      className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-300
  w-full font-light"
    >
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px] rounded-lg" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2 @apply hover:text-gray-300">
            <Link
              to={`/product/${id}`}
              className="text-md font-medium max-w-[240px] hover:underline"
            >
              {title}
            </Link>
            <div>
              <BiTrash
                onClick={() => removeFromCart(id)}
                className="text-2xl text-gray-300 hover:text-red-500 duration-400 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex gap-x- h-[45px] text-sm">
            <div
              className="flex flex-1 max-w-[100px] items-center h-full
          border text-white font-medium"
            >
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center
          items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center
          items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              ${price}
            </div>
            <div
              className="flex-1 flex justify-end
          items-center font-medium"
            >{`$ ${parseFloat(price * amount).toFixed(2)}
          `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
