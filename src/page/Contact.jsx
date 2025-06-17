import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = ({ setColorchange }) => {
    setColorchange(`boxshadow`)

    return (
        <div className=''>
            <div className='relative'>
                <div className='bg-[#eae9ea] min-h-[500px] md:h-[500px] Contactheader w-full relative  h-[500px] opacity-[0.6]'></div>
                <div className='padding h-[100%] flex  justify-center flex-col absolute top-[2%]'>
                    <p className='text-black font-medium text-7xl mt-12'>Contact Us</p>
                </div>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>

    );
}

export default Contact;
