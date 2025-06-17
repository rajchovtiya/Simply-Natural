import { useEffect, useState } from 'react';
import FilterCart from '../components/FilterCart';
import Category from '../components/Category';

const Plants = ({ setColorchange }) => {
    const [range, setRange] = useState([0, 45]);

    useEffect(() => {
        setColorchange('bg-white');
    }, [setColorchange]);

    return (
        <div className="bg-[#fafafa] mt-24 padding">
            <div className="flex flex-wrap justify-between">
                <FilterCart min={0} max={45} onChange={setRange} />
                <Category />
            </div>
        </div>
    );
};

export default Plants;
