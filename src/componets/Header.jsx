import React from 'react';

const Header = () => {
    return (
        <div className='bg-[#eae9ea] min-h-[500px] md:h-[800px] w-full relative header h-[500px]'>
            <div className='padding h-full flex justify-center flex-col'>
                <p className='text-black font-normal text-base md:text-lg'>Best Quality Plants</p>
                <h2 className='mt-3 font-medium text-3xl md:text-6xl leading-[40px] md:leading-[80px]'>
                    Amazing Variety <br /> Of Plants Starting <br /> Just $6
                </h2>
                <button className='text-white bg-[#fc5f5f] h-[40px] w-[130px] md:h-[44px] md:w-[146px] mt-6 cursor-pointer SHOP rounded-3xl ease-in-out duration-300 hover:bg-[#75c32c]'>
                    SHOP NOW
                </button>
            </div>
        </div>
    );
}

export default Header;
