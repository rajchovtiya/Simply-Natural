import React, { useEffect } from 'react';
import Header from '../componets/Header';
import Collection from '../componets/Collection';
import PlantsHomeCart from '../componets/PlantsHomeCart';
import Testimonials from '../componets/Testimonials';
import Interestedplants from '../componets/Interestedplants';
import { useDispatch } from 'react-redux';
import { setStoreHeading } from '../logic/uiSlice';

const Home = ({ setColorchange, CartSlow }) => {
    setColorchange(`bg-[#e9e9e7]`)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setStoreHeading("Plants"));
    }, [dispatch]);
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
