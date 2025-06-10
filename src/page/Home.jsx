import React from 'react';
import Header from '../componets/Header';
import Collection from '../componets/Collection';

const Home = ({setColorchange}) => {
    setColorchange(`bg-[#e9e9e7]`)

    return (
        <div>
            <Header />
            <Collection />
        </div>
    );
}

export default Home;
