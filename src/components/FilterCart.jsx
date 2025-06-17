import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoBag } from 'react-icons/io5';
import { CiStar } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import useCartActions from '../logic/Cartlogic';
import { setPriceRange, setStoreHeading } from '../logic/uiSlice';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';



const FilterCart = ({ min = 0, max = 45 }) => {
    const dispatch = useDispatch();
    const priceRange = useSelector((s) => s.ui.priceRange);
    const storeHeading = useSelector((s) => s.ui.storeHeading);
    const { addCart, OneCart, cartData } = useCartActions();
    const [hoverId, setHoverId] = React.useState(null);

    /* --- Hottest‑Deals helper --- */
    const hotDeals = React.useMemo(() => {
        const found = cartData.find(c => c.Heding === storeHeading);
        return found?.product.filter(p => p.Sale === 'true') || [];
    }, [cartData, storeHeading]);

    /* --- slider change handler --- */
    const handleChange = (values) => {
        dispatch(setPriceRange(values));
    };

    return (
        <div className='w-[100%] 2xl:w-[33%]'>
            {/* ───────── Price filter ───────── */}
            <div className="bg-white p-3">
                <h2 className="text-3xl font-medium">Filter by price</h2>

                <div className="max-w-md mx-auto mt-10">
                    <Slider
                        value={priceRange}
                        min={min}
                        max={max}
                        onChange={handleChange}
                    />


                    {priceRange.length === 2 && (
                        <div className="flex justify-between mt-4">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                        </div>
                    )}
                </div>
            </div>
            {/* ───────── Categories ───────── */}
            <div className="bg-white p-6 mt-8">
                <h2 className="text-2xl font-medium opacity-70">Categories</h2>
                <ul className="mt-6 space-y-3">
                    <li onClick={() => dispatch(setStoreHeading('Cactus'))} className="flex justify-between cursor-pointer hover:text-red-600">Cactus <span>(6)</span></li>
                    <li onClick={() => dispatch(setStoreHeading('Plants'))} className="flex justify-between cursor-pointer hover:text-red-600">Plants <span>(6)</span></li>
                </ul>
            </div>

            {/* ───────── Hottest deals ───────── */}
            <div className="bg-white p-6 mt-8">
                <h2 className="text-2xl font-medium opacity-70">Hottest Deals</h2>
                <div className='flex items-center justify-between flex-wrap gap-4 2xl:justify-center'>
                    {hotDeals.map((p) => (
                        <div key={p.id} className="relative mt-6">
                            <NavLink to="/CartDescription" onClick={() => OneCart(p)}>
                                <img
                                    src={p.img}
                                    alt={p.product__title}
                                    className="w-full md:w-[250px] xl:w-[300px] cursor-pointer"
                                    onMouseEnter={() => setHoverId(p.id)}
                                    onMouseLeave={() => setHoverId(null)}
                                />
                            </NavLink>

                            <span className="absolute top-2 left-2 bg-white shadow px-4 py-1 rounded-3xl text-sm">Sale!</span>

                            {/* add‑to‑cart badge */}
                            <div
                                className={`absolute top-2 right-2 h-6 w-6 rounded-full bg-white flex items-center justify-center transition-opacity ${hoverId === p.id ? 'opacity-100' : 'opacity-0'
                                    }`}
                                onMouseEnter={() => setHoverId(p.id)}
                                onMouseLeave={() => setHoverId(null)}
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
                                {[...Array(5)].map((_, i) => <CiStar key={i} />)}
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <del className="text-sm">${p.Saleamount}.00</del>
                                <span className="text-lg font-medium">${p.amount}.00</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default FilterCart;

