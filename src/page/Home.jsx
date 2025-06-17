import React, { useEffect } from 'react';
import Header from '../components/Header';
import Collection from '../components/Collection';
import PlantsHomeCart from '../components/PlantsHomeCart';
import Testimonials from '../components/Testimonials';
import Interestedplants from '../components/Interestedplants';
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
