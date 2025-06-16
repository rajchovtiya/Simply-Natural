import React from 'react';
import { useState } from 'react';
import { CiStar } from "react-icons/ci";
import { IoBag } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import useCartActions from '../logic/Cartlogic';

const Featured = [
    {
        id: 2,
        HomeCart: "true",
        img: "/img/Plants2.png",
        category: "Plants",
        product__title: "Boncellensis Secullant",
        product_details: "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
        amount: 34.0,
        Sale: "false"
    },
    {
        id: 8,
        HomeCart: "true",
        img: "/img/Cactus2.png",
        category: "Cactus",
        product__title: "Cleistocactus",
        product_details: "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
        amount: 25.0,
        Sale: "false"
    },
    {
        id: 9,
        HomeCart: "false",
        img: "/img/Cactus3.png",
        category: "Cactus",
        product__title: "Green Soil Lotus",
        product_details: "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.",
        amount: 45.0,
        Sale: "false"
    },
]
const FeaturedPlants = () => {
    const [Chak, SetChak] = useState(null)
    const { addCart, OneCart, cartData } = useCartActions();

    return (
        <div className='padding pt-10 bg-white'>
            <h1 className='text-3xl font-medium mt-10'>Featured Plants</h1>
            <div className='flex items-center justify-between flex-wrap mt-9'>
                {Featured.map((datas, index) => {
                    return <div className='relative mt-5 cursor-pointer' key={index}>
                        <NavLink to='/CartDescription'  >
                            <img src={datas.img} alt="" className='sm:w-[100%] md:w-[250px] xl:w-[400px]' onMouseMove={() => SetChak(datas.id)} onMouseLeave={() => SetChak(null)} onClick={() => OneCart(datas)} />
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


                })
                }

            </div>

        </div>
    );
}

export default FeaturedPlants;
