import React, { useEffect } from 'react';
import FeaturedPlants from '../components/FeaturedPlants';
import OurPlantsCollection from '../components/OurPlantsCollection';
import HelpSection from '../components/HelpSection';

const Store = ({ setColorchange }) => {
    useEffect(() => {
        setColorchange('bg-transition')
    }, [])
    return (
        <div className=''>
            <div className='relative'>
                <div className='bg-[#eae9ea] min-h-[400px] md:h-[500px] Storeheader w-full relative  h-[400px] opacity-[0.6]'></div>
                <div className='padding h-[100%] flex  justify-center flex-col absolute top-[2%]'>
                    <p className='text-black font-medium text-7xl mt-12'>Store</p>
                </div>
            </div>
            <div>
                <FeaturedPlants />
                <OurPlantsCollection />
                <div className="padding mt-16  bg-white h-[300px] 2xl:h-[400px]">
                    <HelpSection />
                </div>

            </div>

        </div>

    );
}

export default Store;
