import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaBagShopping } from 'react-icons/fa6';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectTotalPrice } from '../logic/Store';
import useCartActions from '../logic/Cartlogic';
import { setStoreHeading } from '../logic/uiSlice';

const NavBaer = ({ Colorchange, CartSlow, setCartSlow }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { cart } = useSelector((state) => state.shop);
    const totalAmount = useSelector(selectTotalPrice);

    const dispatch = useDispatch();

    const toggleMenu = () => setMenuOpen((p) => !p);

    return (
        <nav
            className={`padding flex items-center justify-between absolute w-full z-10 ${Colorchange}`}
        >
            {/* Logo */}
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
                <div className="LOGO flex items-center gap-4">
                    <img src="/img/Logo1.svg" alt="Logo" className="max-w-[50px]" />
                    <h1 className="font-medium text-[20px]">Simply Natural</h1>
                </div>
            </NavLink>

            {/* Mobile hamburger */}
            <button className="lg:hidden" onClick={toggleMenu}>
                {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>

            {/* Links */}
            <div
                className={`${menuOpen
                        ? 'flex flex-col absolute top-full left-0 w-full bg-white p-4 shadow-lg'
                        : 'hidden lg:flex'
                    } lg:flex items-center gap-6`}
            >
                <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-red-500' : 'List'
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    {/* Store + dropdown */}
                    <li
                        className="relative"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <div className="flex items-center gap-1 cursor-pointer">
                            <NavLink
                                to="/store"
                                className={({ isActive }) =>
                                    isActive ? 'text-red-500' : 'List'
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                Store
                            </NavLink>
                            <MdOutlineKeyboardArrowDown />
                        </div>

                        {showDropdown && (
                            <ul className="absolute top-full left-0 w-48 bg-white border-t-2 border-red-600 shadow-md p-2">
                                <li onClick={() => setMenuOpen(false)}>
                                    <NavLink
                                        to="/plants"
                                        className="block py-1 px-2 hover:text-red-600"
                                        onClick={() => dispatch(setStoreHeading('Plants'))}
                                    >
                                        Plants
                                    </NavLink>
                                </li>
                                <li onClick={() => setMenuOpen(false)}>
                                    <NavLink
                                        to="/plants"
                                        className="block py-1 px-2 hover:text-red-600"
                                        onClick={() => dispatch(setStoreHeading('Cactus'))}
                                    >
                                        Cactus
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'text-red-500' : 'List'
                            }
                        >
                            About Us
                        </NavLink>
                    </li>

                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? 'text-red-500' : 'List'
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>

                    <li onClick={() => setMenuOpen(false)}>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? 'text-red-500' : 'List'
                            }
                        >
                            My Account
                        </NavLink>
                    </li>
                </ul>

                {/* Cart & user icons */}
                <div className="flex items-center gap-4 mt-4 lg:mt-0">
                    <button
                        onClick={() => {
                            setCartSlow(true);
                            setMenuOpen(false);
                        }}
                        className="flex items-center gap-2"
                    >
                        <span className="text-[#fc5f5f] font-semibold">
                            ${totalAmount}.00
                        </span>
                        <span className="relative">
                            <FaBagShopping className="text-[#fc5f5f] text-lg" />
                            <span className="absolute -top-1 -right-2 w-4 h-4 text-[10px] bg-[#fc5f5f] rounded-full flex items-center justify-center">
                                {cart.reduce((t, i) => t + i.quantity, 0)}
                            </span>
                        </span>
                    </button>
                    <FaUser className="text-lg" />
                </div>
            </div>
        </nav>
    );
};

export default NavBaer;
