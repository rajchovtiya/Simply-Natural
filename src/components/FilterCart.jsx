import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IoBag } from 'react-icons/io5';
import { CiStar } from 'react-icons/ci';
import { setPriceRange, setStoreHeading } from '../logic/uiSlice';
import useCartActions from '../logic/Cartlogic';

const FilterCart = ({ min = 0, max = 45 }) => {
    const dispatch = useDispatch();
    const priceRange = useSelector(s => s.ui.priceRange);
    const storeHeading = useSelector(s => s.ui.storeHeading);
    const { addCart, OneCart, cartData } = useCartActions();

    const [hoverId, setHoverId] = useState(null);
    const [minPrice, setMinPrice] = useState(priceRange[0] || min);
    const [maxPrice, setMaxPrice] = useState(priceRange[1] || max);

    const handleApply = () => {
        dispatch(setPriceRange([minPrice, maxPrice]));
    };

    const hotDeals = useMemo(() => {
        const group = cartData.find(c => c.Heding === storeHeading);
        return group?.product.filter(p => p.Sale === 'true') || [];
    }, [cartData, storeHeading]);

    return (
        <div className="w-full 2xl:w-1/3">
            {/* Filter by Price */}
            <div className="bg-white p-4">
                <h2 className="text-2xl font-semibold mb-4">Filter by price</h2>
                <div className="flex items-center gap-3">
                    <input
                        type="number"
                        className="border p-2 rounded w-1/2"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        placeholder="Min"
                        min={0}
                    />
                    <span>to</span>
                    <input
                        type="number"
                        className="border p-2 rounded w-1/2"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        placeholder="Max"
                        max={45}
                    />
                </div>
                <button
                    onClick={handleApply}
                    className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition-all duration-200"
                >
                    Apply
                </button>
                <div className="flex justify-between mt-3 text-sm text-gray-700">
                    <span>${minPrice}</span>
                    <span>${maxPrice}</span>
                </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 mt-8">
                <h2 className="text-xl font-medium opacity-70">Categories</h2>
                <ul className="mt-6 space-y-3">
                    <li
                        onClick={() => dispatch(setStoreHeading('Cactus'))}
                        className="flex justify-between cursor-pointer hover:text-red-600"
                    >
                        Cactus <span>(6)</span>
                    </li>
                    <li
                        onClick={() => dispatch(setStoreHeading('Plants'))}
                        className="flex justify-between cursor-pointer hover:text-red-600"
                    >
                        Plants <span>(6)</span>
                    </li>
                </ul>
            </div>

            {/* Hottest Deals */}
            <div className="bg-white p-6 mt-8">
                <h2 className="text-xl font-medium opacity-70">Hottest Deals</h2>
                <div className="flex flex-wrap gap-4 2xl:justify-center">
                    {hotDeals.map((p) => (
                        <div key={p.id} className="relative mt-6">
                            <NavLink to="/CartDescription" onClick={() => OneCart(p)}>
                                <img
                                    src={p.img}
                                    alt={p.product__title}
                                    className="w-full md:w-60 xl:w-72 cursor-pointer"
                                    onMouseEnter={() => setHoverId(p.id)}
                                    onMouseLeave={() => setHoverId(null)}
                                />
                            </NavLink>
                            <span className="absolute top-2 left-2 bg-white shadow px-3 py-1 rounded-3xl text-sm">
                                Sale!
                            </span>
                            <div
                                className={`absolute top-2 right-2 h-6 w-6 rounded-full bg-white flex items-center justify-center transition-opacity ${hoverId === p.id ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <IoBag
                                    className="text-[18px] opacity-70"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addCart(p);
                                    }}
                                />
                            </div>
                            <p className="mt-3 text-xs opacity-60">{p.category}</p>
                            <h3 className="text-[17px]">{p.product__title}</h3>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <CiStar key={i} />
                                ))}
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <del className="text-sm">${p.Saleamount}.00</del>
                                <span className="text-lg font-medium">${p.amount}.00</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterCart;
