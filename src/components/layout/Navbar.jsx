import React, { useState } from 'react'
import { MdOutlineMenuOpen } from "react-icons/md";
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className='bg-common-blue w-full  h-14 hidden  md:flex justify-between items-center capitalize px-20'>
      <ul className='flex justify-start w-full gap-10 items-center text-white text-lg'>
      <Link to='/'><li className='cursor-pointer hover:text-navigationHover'>home</li></Link>
        <Link to='/cars'><li className='cursor-pointer hover:text-navigationHover'>cars</li></Link>
        <Link to='/bikes'><li className='cursor-pointer hover:text-navigationHover'>bikes</li></Link>
        <Link to='/about'><li className='cursor-pointer hover:text-navigationHover'>about</li></Link>
        <Link to='/contact'><li className='cursor-pointer hover:text-navigationHover'>contact</li></Link>
      </ul>

      <ul className='flex w-full justify-end gap-10 items-center text-white text-lg'>
        <li className='cursor-pointer hover:text-navigationHover'>whishlist</li>
      </ul>
    </div>
    <div className='block md:hidden py-2 px-2'>
        <div onClick={toggleSidebar}><MdOutlineMenuOpen size={30}/></div>
       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
    </>
  )
}

export default Navbar
