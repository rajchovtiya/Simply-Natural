import React from 'react';
import Header from '../componets/Header';
import Collection from '../componets/Collection';
import PlantsHomeCart from '../componets/PlantsHomeCart';
import Testimonials from '../componets/Testimonials';
import Interestedplants from '../componets/Interestedplants';

const Home = ({ setColorchange }) => {
    setColorchange(`bg-[#e9e9e7]`)

    return (
        <div>
            <Header />
            <Collection />
            <PlantsHomeCart />
            <Testimonials />
            <Interestedplants />
        </div>
    );
}

export default Home;
