import React, { useState } from 'react';
import { CiStar } from "react-icons/ci";
import { IoBag } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import useCartActions from '../logic/Cartlogic';
import { useSelector } from 'react-redux';

const PlantsHomeCart = () => {
    const [Chak, SetChak] = useState(null)
    const { addCart, OneCart } = useCartActions();
    const cartData = useSelector(state => state.shop.products); // or your correct path


    return (
        <div className='mt-44 padding'>
            <h1 className='text-center text-4xl font-normal'>Featured Plants</h1>
            <p className='text-center text-gray-700 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex items-center justify-between flex-wrap mt-9'>
                {cartData?.map((item, index) => {
                    return item.product?.map((datas, index) => {
                        {
                            return datas.HomeCart === "true" ?
                                <div className='relative mt-5 cursor-pointer' key={index}>
                                    <NavLink to='/CartDescription' id='NavLink' >
                                        <img src={datas.img} alt="" className='sm:w-[100%] md:w-[250px] xl:w-[280px]' onMouseMove={() => SetChak(datas.id)} onMouseLeave={() => SetChak(null)} onClick={() => OneCart(datas)} />
                                    </NavLink>
                                    {datas.Sale == "true" ? <div className='absolute top-2 left-2 bg-[#ffffff] shadow-lg p-2 px-4 rounded-3xl'>Sale!</div> : ""}
                                    <p className='opacity-60 text-[13px] mt-4'>{datas.category}</p>
                                    <h5 className='text-[17px] font-normal mt-3'>{datas.product__title}</h5>
                                    <div onMouseMove={() => SetChak(datas.id)} onMouseLeave={() => SetChak(null)} className={`h-[25px] w-[25px] rounded-[50%] bg-white absolute top-2 right-2 flex items-center justify-center ${Chak === datas.id ? "opacity-100" : "opacity-0"}`}><IoBag className='text-[18px] opacity-70 Cartclorlo' onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        addCart(datas)
                                    }} /></div>
                                    <div className='flex items-center'>
                                        <CiStar className='cursor-pointer' />
                                        <CiStar className='cursor-pointer' />
                                        <CiStar className='cursor-pointer' />
                                        <CiStar className='cursor-pointer' />
                                        <CiStar className='cursor-pointer' />
                                    </div>
                                    <div className='flex items-center gap-2 mt-3'>
                                        {datas.Sale == "true" ? <del className='text-[13px] '>${datas.Saleamount}.00</del> : ""}
                                        <h3 className='text-[17px]'><span className='font-medium'>$</span><span className='font-medium'>{datas.amount}.00</span></h3>
                                    </div>
                                </div>
                                : ""

                        }
                    })
                })}
            </div>
        </div>
    );
}

export default PlantsHomeCart;
