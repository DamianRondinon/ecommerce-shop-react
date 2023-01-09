import React, { useContext } from "react";

import { Link } from "react-router-dom";

import {
  BsPlus,
  BsEyeFill,
  BsAlarm,
  BsCart,
  BsCartPlus,
  BsCart4,
  BsCartCheckFill,
  BsCartPlusFill,
  BsEyeSlash,
  BsEyedropper,
  BsZoomIn,
} from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { id, image, category, title, price } = product;
  return (
    <div>
      <div
        className="border border-[decoration-black-900] h-[300px] mb-4
     relative overflow-hidden group transition rounded-xl 
     shadow-md overflow-hidden cursor-pointer hover:translate-y-1 transition duration-800"
      >
        <div className="bg-black text-white w-20 h-10 flex justify-center">
          <div className="font-semibold flex justify-left items-left h-0 py-2">
            $ {price}
          </div>
        </div>
        <div className="w-full h-60 flex justify-center items-center">
          <div
            className="w-[200px] mx-auto flex
        justify-center items-center"
          >
            <img
              className="cursor-auto max-h-[160px] group-hover:scale-110 
          transition duration-300 cursor-pointer"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div
          className="absolute -top-3 right-3 group-hover:top-3
      p-2 flex flex-col items-center 
      justify-center gap-y-2
      opacity-0 group-hover:opacity-100 
      transition-all duration-400"
        >
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center w-10 h-10 text-white hover:text-gray-600 bg-gray-400">
              <BsCartPlusFill className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-10 h-10 bg-white flex justify-center items-center
        text-primary drop-shadow-xl hover:bg-red-400"
          >
            <BsZoomIn className="text-black text-50px" />
          </Link>
        </div>
      </div>

      <div>
        <div className="text-sm capitalize text-gray-600">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold text-sm mb-3 hover:text-gray-600">
            {title}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
