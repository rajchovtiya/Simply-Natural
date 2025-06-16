import Filter from '../componets/Filter';
import Category from '../componets/Category';
import { useState } from 'react';

const Plants = ({ setColorchange }) => {

    setColorchange('bg-white')
    const [range, setRange] = useState([0, 100]);


    return (
        <div className='bg-[#fafafa] mt-24 padding'>
            <div className='flex  justify-between'>
                <Filter min={0} max={100} onChange={setRange} />
                <Category />
            </div>
        </div>
    );
}

export default Plants;
