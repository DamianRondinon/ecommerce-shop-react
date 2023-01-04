import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { BsFillTrash2, FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { IconName, BiShoppingBag, BiX } from "react-icons/bi";
import { CartContext } from '../contexts/CartContext';


const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);
  const {cart, clearCart, total} = useContext(CartContext);
  return (
  <div className={`${isOpen ? 'right-0' : '-right-full'}
  w-full bg-black/80 fixed top-0 h-full shadow-2x1
  md:w-[35vw] xl:max-w-[30vw] transition-all duration-400 z-20 px-4 lg:px-[35px] text-white`}>
    <div className='flex items-center justify-between py-5 border-b'>
      <div className='text-white text-2x1 text-sm font-semibold'>Shopping Bag (0)</div>
      <div onClick={handleClose}
      className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <BiX className='text-4xl text-white hover:text-red-400 transition-all duration-400'/>
      </div>
    </div>
    <div className='flex flex-col gap-y-2 h-[520px] lg:h-[600px] overflow-y-auto
    overflow-x-hidden border-b'>
      {cart.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
    </div>
    <div className='flex flex-col gap-y-3 py-4 mt-4'>
      <div className='flex w-full justify-between items-center'>
        <div className='uppercase font-semibold'>
          <span>Total: </span>$ {parseFloat(total).toFixed(2)}
          </div>
        <div onClick={clearCart} 
        className='cursor-pointer py-4 bg-red-500 text-white
        w-12 h-12 flex justify-center items-center text-xl'>
          <FiTrash2 />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Sidebar;
