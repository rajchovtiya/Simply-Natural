import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { CiStar } from "react-icons/ci";
import { IoBag } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import useCartActions from '../logic/Cartlogic';

const Category = () => {
    const dispatch = useDispatch();
    const storeHeading = useSelector((state) => state.ui.storeHeading);
    const [Chak, SetChak] = useState(null);
    const [sortOption, setSortOption] = useState('');
    const { addCart, OneCart, cartData } = useCartActions();
    const priceRange = useSelector((s) => s.ui.priceRange);

    const filteredProducts =
        cartData.find(i => i.Heding === storeHeading)?.product || [];

    const visibleProducts = filteredProducts
        .filter(p => {
            if (!Array.isArray(priceRange) || priceRange.length < 2) return true; // no filtering
            return p.amount >= priceRange[0] && p.amount <= priceRange[1]; // ✅ FIXED RANGE
        })
        .sort((a, b) => {
            if (sortOption === 'lowToHigh') return a.amount - b.amount;
            if (sortOption === 'highToLow') return b.amount - a.amount;
            return 0;
        });



    return (
        <div className='bg-white w-[100%] h-max 2xl:w-[66%]'>
            <div className='px-3 py-10 2xl:px-20 2xl:py-20 '>
                <p className='opacity-70 text-[15px]'>Home / {storeHeading}</p>
                <h1 className='text-5xl mt-12 font-normal'>{storeHeading}</h1>
                <div>
                    <div className='flex items-center justify-between mt-5'>
                        <p>Showing all  results</p>
                        <div className="md:col-span-2">
                            <select
                                className="w-full opacity-75 rounded px-3 py-2 bg-white"
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <option value="">Default sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="latest">Sort by latest</option>
                                <option value="lowToHigh">Sort by price: low to high</option>
                                <option value="highToLow">Sort by price: high to low</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex items-center justify-between flex-wrap mt-9'>
                        {visibleProducts.map((datas, index) => (
                            <div className='relative mt-5 cursor-pointer' key={index}>
                                <NavLink to='/CartDescription' id='NavLink'>
                                    <img src={datas.img} alt="" className='sm:w-[100%] md:w-[250px] xl:w-[280px]'
                                        onMouseMove={() => SetChak(datas.id)}
                                        onMouseLeave={() => SetChak(null)}
                                        onClick={() => OneCart(datas)}
                                    />
                                </NavLink>

                                {datas.Sale === "true" && (
                                    <div className='absolute top-2 left-2 bg-[#ffffff] shadow-lg p-2 px-4 rounded-3xl'>Sale!</div>
                                )}

                                <p className='opacity-60 text-[13px] mt-4'>{datas.category}</p>
                                <h5 className='text-[17px] font-normal mt-3'>{datas.product__title}</h5>

                                <div
                                    onMouseMove={() => SetChak(datas.id)}
                                    onMouseLeave={() => SetChak(null)}
                                    className={`h-[25px] w-[25px] rounded-[50%] bg-white absolute top-2 right-2 flex items-center justify-center ${Chak === datas.id ? "opacity-100" : "opacity-0"}`}
                                >
                                    <IoBag
                                        className='text-[18px] opacity-70 Cartclorlo'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            addCart(datas);
                                        }}
                                    />
                                </div>

                                <div className='flex items-center'>
                                    {[...Array(5)].map((_, i) => <CiStar className='cursor-pointer' key={i} />)}
                                </div>

                                <div className='flex items-center gap-2 mt-3'>
                                    {datas.Sale === "true" && <del className='text-[13px] '>${datas.Saleamount}.00</del>}
                                    <h3 className='text-[17px]'><span className='font-medium'>$</span><span className='font-medium'>{datas.amount}.00</span></h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
