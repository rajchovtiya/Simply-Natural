import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='padding pt-16 bg-[#f9f9f9] '>
            <div className='flex  justify-between mt-32 flex-wrap'>
                <div className='max-w-[384px]'>
                    <h1 className='text-xl font-normal'>Get In Touch With Us For The Best Quality Plants & Succulents</h1>
                    <p className='mt-12 text-[15px] text-gray-700'>Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <img src="./img/Logo1.svg" alt="Logo" className='w-[120px]' />
                    <h3 className='text-2xl font-medium mt-3'>Simply Natural</h3>
                    <div className='flex items-center justify-center gap-4 mt-3'>
                        <div className='bg-[#4e5768] h-[30px] w-[30px] rounded-[50%] flex items-center justify-center icone'>
                            <FaLinkedinIn className='text-white text-[18px]' />
                        </div>
                        <div className='bg-[#4e5768] h-[30px] w-[30px] rounded-[50%] flex items-center justify-center icone'>
                            <FaTwitter className='text-white text-[18px]' />
                        </div>
                        <div className='bg-[#4e5768] h-[30px] w-[30px] rounded-[50%] flex items-center justify-center icone'>
                            <FaInstagram className='text-white text-[18px]' />
                        </div>
                        <div className='bg-[#4e5768] h-[30px] w-[30px] rounded-[50%] flex items-center justify-center icone'>
                            <FaFacebookF className='text-white text-[18px]' />
                        </div>

                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-medium'>Quick Links</h1>
                    <ul className='mt-6'>
                        <li className=' text-[15px] text-gray-700 footer_list'>Introduction</li>
                        <li className='mt-5 text-[15px] text-gray-700 footer_list'>Know more About Us</li>
                        <li className='mt-5 text-[15px] text-gray-700 footer_list'>Visit Store</li>
                        <li className='mt-5 text-[15px] text-gray-700 footer_list'>Let's Connect</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-medium'>Important Links</h1>
                    <ul className='mt-6'>
                        <li className=' text-[15px] text-gray-700 footer_list'>Privacy Policy</li>
                        <li className='mt-5 text-[15px] text-gray-700 footer_list'>Shipping Details</li>
                        <li className='mt-5 text-[15px] text-gray-700 footer_list'>Terms & Conditions</li>
                        <li className='mt-5 text-[15px] text-gray-700 footer_list'>Media Kit</li>
                    </ul>
                </div>

            </div>
            <div className='flex items-center justify-between w-full mt-24 pb-10'>
                <p className='text-gray-700 text-[13px]'>Copyright © 2025 Simply Natural</p>
                <p className='text-gray-700 text-[13px]'>Powered by Simply Natural</p>
            </div>

        </div>
    );
}

export default Footer;
