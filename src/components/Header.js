import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

import {BsBadge3D, BsBag, BsBagCheck, BsBagCheckFill, BsBagDash, BsBagPlus, BsBagX, BsCart3, BsShop} from 'react-icons/bs';
import { IconName, BiShoppingBag } from "react-icons/bi";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext)
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
  <header className={`${isActive? 'bg-white py-4 shadow-md' : 'bg-none py-6'
  } fixed w-full z-10`}>
    <div className='container mx-auto flex items-center 
    justify-between h-full'>
  <Link to={'/'}>
    <div>
      <img className='w-[80px]' src={Logo} alt='' />
    </div>
  </Link>
  <div onClick={()=> setIsOpen(!isOpen)}
  className='cursor-pointer flex relative' >
    <BiShoppingBag className='text-4xl' />
    <div className='bg-green-400 absolute -right-2 -bottom-2
    text-[14px] w-[20px] h-[20px] text-white font-bold rounded-full
    flex justify-center items-center'>
      {itemAmount}
      </div>
    </div>
  </div>
  </header>
  );
};

export default Header;
