import React from 'react';
import bgHeroImg from '../img/bg_hero_img.png';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
  <section className='h-[800px] bg-no-repeat bg-cover bg-center py-40 bg-hero'>
    <div className='container mx-auto flex justify-around h-full'>
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center'>
          <div className='w-10'><FiArrowRight className='text-2xl text-blue-600 w-10'/></div>
          Winter fashion
        </div>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 1.5, duration: 4 }} className='text-[80px] font-bold mb-4'>TRUE CLOTH</motion.h1>
          <Link to={'/'} className='uppercase font-semibold self-start 
          border-b-4 border-blue-800 hover:text-sky-900'>
          <motion.div initial={{ x:'-100vw'}} animate={{ x: 0 }} transition={{ delay: 1, duration: 3 }}>see more</motion.div>
          </Link>
      </div>
        <div className='hidden lg:block'>
          <motion.img  initial={{ scale: -0.5 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 2 }} src={bgHeroImg} alt='' />
        </div>
    </div>
  </section>
  );
};

export default Hero;
