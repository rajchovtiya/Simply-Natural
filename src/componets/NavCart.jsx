import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { CartAdd, removeCartItem, selectTotalItems, selectTotalPrice } from '../logic/Store';

const NavCart = ({ CartSlow, setCartSlow }) => {
    const dispatch = useDispatch();
    const { cart } = useSelector(CartAdd => CartAdd.shop);
    const totalAmount = useSelector(selectTotalPrice);
    const totalQuantity = useSelector(selectTotalItems);
    return (
        <div>
            <div className={`absolute w-[100%] 2xl:w-[32%] min-h-[100vh] bg-white top-0  z-50 py-4 duration-300  ${CartSlow === true ? "right-0" : "right-[-100%]"}`}>
                <div className='flex items-center justify-between border-b pb-3  px-5'>
                    <p className='text-[15px] font-normal'>Shopping Cart</p>
                    <IoMdClose className='text-[20px] cursor-pointer' onClick={() => setCartSlow(false)} />
                </div>
                <ul className='mt-4 px-5'>
                    {cart.length === 0 ? <p className='opacity-60 text-center h-[650px] flex items-center justify-center text-[14px]'>No products in the cart.</p> :
                        cart.map((item, index) => {
                            return <li className='flex items-center justify-between mt-3' key={index}>
                                <div className='flex items-center gap-3'>
                                    <img src={item.img} alt="" className='max-w-[70px]' />
                                    <div>
                                        <h2 className='text-[15px] font-medium'>{item.title}</h2>
                                        <p className='flex items-center opacity-70 gap-1'><span className='font-normal'>{item.quantity}</span><IoMdClose className='text-[10px] font-normal' /><span className='font-normal'>$</span><span className='font-normal'>{item.price}.00</span></p>
                                    </div>
                                </div>
                                <div>
                                    <IoCloseCircleOutline className='cursor-pointer text-[25px] opacity-40 hover:opacity-90 duration-500' onClick={() => dispatch(removeCartItem({ id: item.id }))}
                                    />
                                </div>
                            </li>

                        })
                    }
                </ul>

                {cart.length === 0 ? <div className='px-5 flex items-center justify-center duration-300 absolute bottom-3 flex-col w-[100%]'>
                    <button className='text-white  bg-[#fc5f5f]  mt-2 cursor-pointer SHOP rounded-3xl ease-in-out duration-300 hover:bg-[#75c32c] p-3 px-10 w-[100%]'>
                        CONTINUE SHOPPING</button>
                </div> : <div className='px-5 flex items-center justify-center duration-300 absolute bottom-3 flex-col w-[100%]'>
                    <div className='border flex items-center justify-between px-5 absolute bottom-32 w-[100%] py-4'>
                        <p className='font-normal'>Subtotal:</p>
                        <h3 className='opacity-80'><span>$</span><span>{totalAmount}.00</span></h3>
                    </div>
                    <button className='text-white  bg-[#fc5f5f]  mt-2 cursor-pointer SHOP rounded-3xl ease-in-out duration-300 hover:bg-[#75c32c] p-3 px-10 w-[100%]'>
                        VIEW CART</button>
                    <button className='text-white  bg-[#fc5f5f]  mt-2 cursor-pointer SHOP rounded-3xl ease-in-out duration-300 hover:bg-[#75c32c] p-3 px-10 w-[100%]'>
                        CHECKOUT</button>
                </div>
                }
            </div>
            <div className={`w-[100%] absolute top-0 z-40 bg-black opacity-40 min-h-[100vh] duration-300  ${CartSlow === true ? "flex" : "hidden"}`} onClick={() => setCartSlow(false)}></div>
        </div>
    );
}

export default NavCart;
