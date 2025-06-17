import React, { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { removeCartItem, updateCartItemQuantity, selectTotalPrice } from '../logic/Store';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import useCartActions from '../logic/Cartlogic';

const Cart = ({ setColorchange }) => {
    setColorchange('bg-white');

    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.shop);
    const totalAmount = useSelector(selectTotalPrice);


    const handleQtyChange = (id, e) => {
        const value = Math.max(1, Math.min(10, Number(e.target.value)));
        dispatch(updateCartItemQuantity({ id, quantity: value }));
    };
    const { handleDelayedRemove, loadingItemId } = useCartActions();




    return (
        <div className="bg-[#f9f9f9] padding mt-20">
            <div className="bg-white py-20 mt-6 px-4 lg:px-20">
                <h1 className="text-4xl font-normal">Cart</h1>

                <div className="border border-gray-200 mt-8 w-full">
                    <div className="hidden lg:block">
                        <table className="min-w-full table-auto">
                            <thead className="bg-gray-100 text-gray-700 text-left">
                                <tr>
                                    <th className="p-3"></th>
                                    <th className="p-3">Product</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3">Quantity</th>
                                    <th className="p-3">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id} className="border-t">
                                        <td className="p-3 flex items-center gap-6">
                                            {loadingItemId === item.id ? (
                                                <div className="w-6 h-6 border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>
                                            ) : (
                                                <IoCloseCircleOutline
                                                    className="cursor-pointer text-[25px] opacity-40 hover:opacity-90 duration-300"
                                                    onClick={() => handleDelayedRemove(item.id)}
                                                />
                                            )}
                                            <img src={item.img} alt={item.title} className="w-16 h-16 object-cover" />
                                        </td>
                                        <td className="p-3">{item.title}</td>
                                        <td className="p-3">${item.price.toFixed(2)}</td>
                                        <td className="p-3">
                                            <input
                                                type="number"
                                                min={1}
                                                max={10}
                                                value={item.quantity}
                                                onChange={(e) => handleQtyChange(item.id, e)}
                                                className="border px-3 rounded w-24 h-10 lg:w-16"
                                            />
                                        </td>
                                        <td className="p-3 font-medium opacity-70">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile view - stacked cards */}
                    <div className="block lg:hidden space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="border rounded-lg p-4 shadow-sm bg-white">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center gap-4">
                                        {loadingItemId === item.id ? (
                                            <div className="w-6 h-6 border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            <IoCloseCircleOutline
                                                className="cursor-pointer text-[25px] opacity-40 hover:opacity-90 duration-300"
                                                onClick={() => handleDelayedRemove(item.id)}
                                            />
                                        )}
                                        <img src={item.img} alt={item.title} className="w-16 h-16 object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-medium">{item.title}</p>
                                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                    <p className="text-gray-600 mt-1">Quantity:</p>
                                    <input
                                        type="number"
                                        min={1}
                                        max={10}
                                        value={item.quantity}
                                        onChange={(e) => handleQtyChange(item.id, e)}
                                        className="border px-3 rounded w-full h-10 mt-1"
                                    />
                                    <p className="text-gray-800 font-semibold mt-2">
                                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {cart.length > 0 && (
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 py-3 px-3">
                            <div className="flex gap-3 w-full lg:w-auto">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="border p-2 w-full max-w-[160px]"
                                />
                                <button className="text-white bg-[#fc5f5f] h-10 px-5 rounded-3xl hover:bg-[#75c32c] duration-300">
                                    APPLY COUPON
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className='mt-8 flex items-center justify-end'>
                    <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md mt-10 lg:mt-0">
                        <div className="bg-[#f3f4f6] p-4 rounded-t-lg">
                            <h2 className="text-2xl font-semibold">Cart Totals</h2>
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between mb-4">
                                <span className="text-gray-700">Subtotal</span>
                                <span className="text-gray-900 font-normal text-lg">${totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between border-t border-gray-200 pt-4 mb-6">
                                <span className="text-gray-700 font-semibold">Total</span>
                                <span className="text-gray-900 font-normal text-lg">${totalAmount.toFixed(2)}</span>
                            </div>
                            <NavLink to='/checkout'>
                                <button className="w-full bg-[#fc5f5f] hover:bg-[#75c32c] text-white py-3 rounded-3xl font-semibold transition duration-300">
                                    PROCEED TO CHECKOUT
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
