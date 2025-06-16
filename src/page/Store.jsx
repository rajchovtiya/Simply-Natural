import React from 'react';
import FeaturedPlants from '../componets/FeaturedPlants';
import OurPlantsCollection from '../componets/OurPlantsCollection';
import HelpSection from '../componets/HelpSection';

const Store = ({ setColorchange }) => {
    setColorchange('bg-transition')
    return (
        <div className=''>
            <div className='relative'>
                <div className='bg-[#eae9ea] min-h-[500px] md:h-[500px] Storeheader w-full relative  h-[500px] opacity-[0.6]'></div>
                <div className='padding h-[100%] flex  justify-center flex-col absolute top-[2%]'>
                    <p className='text-black font-medium text-7xl mt-12'>Store</p>
                </div>
            </div>
            <div>
                <FeaturedPlants />
                <OurPlantsCollection />
                <div className="padding mt-16  bg-white h-[400px] ">
                    <HelpSection />
                </div>

            </div>

        </div>

    );
}

export default Store;
