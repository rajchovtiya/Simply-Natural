import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import useCartActions from '../logic/Cartlogic';
import ZoomImage from '../components/ZoomImage';
import Relatedproducts from '../components/Relatedproducts';

const CartDescription = ({ setColorchange }) => {
    setColorchange('bg-white')
    const [quantity, setQuantity] = useState(1);
    const [DescriptionSlow, setDescriptionSlow] = useState(true)
    const onlyCart = useSelector(CartDescription => CartDescription.shop.productView);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const { addCart } = useCartActions();
    const handleChange = (e) => {
        const value = Math.max(1, Math.min(10, Number(e.target.value)));
        setQuantity(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className='padding' id='top NavLink'>
            <div className='min-h-[100vh] w-[100%] bg-white mt-28 py-3 px-3 2x:py-12 2xl:px-20'>
                <div className='flex  justify-between gap-4 flex-wrap xl:flex-nowrap'>
                    <div className='w-[100%] xl:w-[80%] h-[400px]  overflow-hidden flex items-center justify-center bg-no-repeat xl:'>
                        <ZoomImage src={onlyCart.img} />
                    </div>
                    <div className='px-3 xl:px-10'>
                        <p className='text-[14px] opacity-50'>{onlyCart.category}</p>
                        <h3 className='text-4xl font-normal mt-3'>{onlyCart.title}</h3>
                        <div className='flex items-end gap-3'>
                            {onlyCart.Sale === "true" ? <del className='text-2xl font-medium opacity-50'>${onlyCart.mounts}.00</del> : ""}
                            <div className='mt-5 flex z gap-1 items-end'>
                                <span className='text-2xl font-bold opacity-65'>$</span>
                                <span className='text-2xl font-bold opacity-65'>{onlyCart.amount}.00</span>
                                <p className='text-[14px] opacity-75'> + Free Shipping</p>
                            </div>
                        </div>
                        <p className='mt-3 text-[15px] opacity-70'>{onlyCart.productdetails}</p>
                        <div className='gap-2 flex items-center mt-5 flex-wrap'>
                            <input
                                type="number"
                                min={1}
                                max={10}
                                value={quantity}
                                onChange={handleChange}
                                className="border px-3 rounded w-24 h-10 xl:w-16"
                            />
                            <button className='text-white  bg-[#fc5f5f]  mt-2 cursor-pointer text-[15px] SHOP rounded-3xl ease-in-out duration-300 hover:bg-[#75c32c] p-1 px-10 w-[245px]' onClick={() => {
                                const itemWithQty = { ...onlyCart, quantity };
                                addCart(itemWithQty);
                            }}> ADD TO CART</button>
                        </div>
                        <hr className='mt-5' />
                        <p className='mt-2 opacity-70 text-[15px] font-normal'>Category: {onlyCart.category}</p>
                    </div>
                </div>
                <hr className='mt-16' />
                <div>
                    <div className='flex items-center '>
                        <h1 className={`pt-2 px-4 pl-0 cursor-pointer font-semibold ${DescriptionSlow === true ? " border-t-2 border-black" : " border-t-0 border-black"}`} onClick={() => setDescriptionSlow(true)}>Description </h1>
                        <h1 className={`pt-2 px-4 cursor-pointer font-semibold ${DescriptionSlow === false ? " border-t-2 border-black" : " border-t-0 border-black"}`} onClick={() => setDescriptionSlow(false)}>Reviews (0)</h1>
                    </div>
                    {DescriptionSlow === true ? <div className='mt-6'>
                        <p className='opacity-75'>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.</p>
                    </div>
                        : <div className='mt-6'>
                            <p className='opacity-60 text-[15px]'>There are no reviews yet.</p>
                            <div>
                                <form onSubmit={handleSubmit} className="p-2 xl:p-6 w-full bg-white shadow rounded">
                                    <h2 className="text-xl font-semibold mb-2 opacity-40">
                                        Be the first to review “Boncellensis Secullant”
                                    </h2>
                                    <p className="text-[14px] mt-2 opacity-50">
                                        Your email address will not be published. Required fields are marked *
                                    </p>

                                    {/* ⭐ Rating */}
                                    <div className="flex mb-4 mt-4 items-center">
                                        <h2 className="text-xl font-semibold mb-4 opacity-50 mr-4">Your rating *</h2>
                                        {[...Array(5)].map((_, index) => {
                                            const starValue = index + 1;
                                            return (
                                                <label key={index}>
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        className="hidden"
                                                    />
                                                    <FaStar
                                                        size={23}
                                                        className="cursor-pointer transition-colors text-[17px]"
                                                        color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                        onMouseEnter={() => setHover(starValue)}
                                                        onMouseLeave={() => setHover(null)}
                                                    />
                                                </label>
                                            );
                                        })}
                                    </div>

                                    {/* 🙍 Name */}
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium mb-1 opacity-60">
                                            Your Name *
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            className="w-full border rounded px-3 py-2"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    {/* 📧 Email */}
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium mb-1 opacity-60">
                                            Your Email *
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            className="w-full border rounded px-3 py-2"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    {/* ✍ Review Text */}
                                    <label htmlFor="reviewText" className="block text-sm font-medium mb-1 opacity-60">
                                        Your Review *
                                    </label>
                                    <textarea
                                        id="reviewText"
                                        className="w-full p-2 border rounded mb-4"
                                        rows="4"
                                        required
                                        placeholder="Write your review here..."
                                    />

                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                                    >
                                        Submit Review
                                    </button>
                                </form>
                            </div>
                        </div>}

                </div>
                <div className='mt-10'>
                    <h1>Related products</h1>
                    <div className='flex items-center'>
                        <Relatedproducts category={onlyCart.category} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CartDescription;
