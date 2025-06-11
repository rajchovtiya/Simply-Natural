import React from 'react';

const Interestedplants = () => {
    return (
        <div className='h-[300px] md:h-[750px] w-full relative Interrestheader mt-6'>
            <div className='flex items-center justify-center flex-col pt-28'>
                <h1 className='font-medium text-4xl text-center leading-[60px]'>Interested? Shop This Plant <br /> Collection!</h1>
                <p className='text-wrap pt-6'>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
                <button className='text-white bg-[#fc5f5f] h-[40px] w-[130px] md:h-[44px] md:w-[146px] mt-9 cursor-pointer SHOP rounded-3xl ease-in-out duration-300 hover:bg-[#75c32c'>
                    GO TO SHOP
                </button>

            </div>
        </div>
    );
}

export default Interestedplants;
