import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBaer = ({ Colorchange }) => {
    const [Valuechange, setValuechange] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`padding flex items-center justify-between absolute w-full z-10 ${Colorchange}`} onMouseLeave={() => setValuechange(null)}>
            <NavLink to='/'>
                <div className='LOGO flex items-center gap-4'>
                    <img src="./img/Logo1.svg" alt="Logo" className='max-w-[50px]' />
                    <h1 className='font-medium flex-none text-[20px]'>Simply Natural</h1>
                </div>
            </NavLink>

            <div className='lg:hidden'>
                <button onClick={toggleMenu}>
                    {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </div>

            <div className={`lg:flex items-center justify-between gap-2 ${menuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white p-4 shadow-lg' : 'hidden lg:flex'}`}>
                <ul className='flex lg:flex-row flex-col lg:items-center gap-4 lg:gap-2 lg:mr-7'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? "text-red-500 ml-5" : "List")}>Home</NavLink>

                    <li className='relative cursor-pointer List' onMouseEnter={() => setValuechange(true)} onMouseLeave={() => setValuechange(null)}>
                        <div className='flex items-center gap-1'>Store <MdOutlineKeyboardArrowDown /></div>
                        {Valuechange !== null && (
                            <ul className='Store_Box absolute bg-white p-3 border-t-2 border-red-600 w-[200px] top-[107%] md:right-[-268%]'>
                                <li className='hover:text-red-600 text-[15px] text-black'>Plants</li>
                                <li className='hover:text-red-600 text-[15px] text-black mt-3'>Cactus</li>
                            </ul>
                        )}
                    </li>

                    <NavLink to="/about" className={({ isActive }) => (isActive ? "text-red-500 ml-5" : "List")}>
                        About Us
                    </NavLink>

                    <li className='cursor-pointer List'>Contact Us</li>
                    <li className='cursor-pointer List'>My Account</li>
                </ul>

                {/* Cart & User */}
                <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-4 md:mt-0'>
                    <div className='flex items-center gap-2'>
                        <p className='text-[#fc5f5f] font-semibold text-sm md:text-base'>$0.00</p>
                        <div className='relative'>
                            <FaBagShopping className='text-[#fc5f5f] text-[18px] md:text-[20px]' />
                            <p className='absolute top-[-6px] right-[-10px] w-[15px] h-[15px] rounded-full bg-[#fc5f5f] text-black flex items-center justify-center text-[10px]'>0</p>
                        </div>
                    </div>
                    <FaUser className='text-[18px] md:text-[20px]' />
                </div>
            </div>
        </nav>
    );
};

export default NavBaer;
