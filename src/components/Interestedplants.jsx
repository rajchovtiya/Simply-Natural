import React from 'react';

const Interestedplants = () => {
    return (
        <div className="h-[400px] md:h-[750px] w-full relative bg-cover bg-center mt-6 bg-no-repeat Interrestheader" >
            <div className="flex items-center justify-center flex-col text-center px-4 md:px-0 pt-20 md:pt-28 max-w-4xl mx-auto">
                <h1 className="font-medium text-2xl md:text-4xl leading-snug md:leading-[60px]">
                    Interested? Shop This Plant <br className="hidden md:block" /> Collection!
                </h1>
                <p className="pt-4 md:pt-6 text-gray-500  md:text-base max-w-xl">
                    Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.
                </p>
                <button className="text-white bg-[#fc5f5f] h-[40px] w-[130px] md:h-[44px] md:w-[146px] mt-6 md:mt-9 rounded-3xl transition-all duration-300 hover:bg-[#75c32c]">
                    GO TO SHOP
                </button>
            </div>
        </div>
    );
};

export default Interestedplants;
