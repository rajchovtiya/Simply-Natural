import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Interestedplants from '../componets/Interestedplants';

const OurTeam = [
    {
        img: "/img/user1.png",
        name: "Jessica Gordon",
        description: "Co-Founder"
    },
    {
        img: "/img/user2.png",
        name: "Bryan Joes",
        description: "Co-Founder"
    },
    {
        img: "/img/user3.png",
        name: "Angella Mike",
        description: "Co-Founder"
    }

]
const About = ({ setColorchange }) => {
    setColorchange(`boxshadow`)
    return (
        <div className=''>
            <div className=' bg-[#eae9ea]  h-[600px] w-[100%] relative About_header z-1'>
                <div className='padding h-[100%] flex  justify-center flex-col'>
                    <p className='text-black font-medium text-7xl mt-12'>About Us</p>
                </div>
            </div>
            <div className='padding  mt-20'>
                <div className='flex  justify-between'>
                    <div className='max-w-[400px] text-2xl font-normal'>
                        <h1>We Work Hard To Provide You The Best Quality Plants And Succulents</h1>
                    </div>
                    <div className=' max-w-[720px]'>
                        <p className='text-gray-600 text-[15px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                        <button className='text-white bg-[#fc5f5f] h-[44px] w-[146px] mt-6 cursor-pointer SHOP rounded-3xl  ease-in-out delay-150 hover:bg-[#75c32c]'>READ MORE</button>

                    </div>
                </div>
                <div className='flex items-center justify-center flex-col mt-56'>
                    <h1 className='text-4xl font-medium'>Our Company</h1>
                    <p className='text-center mt-5 max-w-[624px] text-gray-700 leading-[29px] '>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo, when an unknown printer took a galley.</p>
                    <img src="./img/about.jpg" alt="" className='mt-12' />
                    <div className='flex items-center justify-between gap-3 mt-12 w-[100%]'>
                        <p className='text-gray-700 text-[15px] max-w-[500px] text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors</p>
                        <p className='text-gray-700 text-[15px] max-w-[500px] text-left'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. </p>
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col mt-40 '>
                    <h1 className='text-4xl font-medium'>Our Company</h1>
                    <p className='text-center mt-5 max-w-[624px] text-gray-700 leading-[29px] '>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo, when an unknown printer took a galley.</p>
                    <div className='flex items-center justify-between w-[100%] '>
                        {OurTeam.map((item, index) => {
                            return <div key={index} className='w-[330px] p-2'>
                                <div>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='mt-10'>
                                    <h1 className='text-center text-2xl font-medium'>{item.name}</h1>
                                    <p className='text-center text-gray-700 mt-2'>Co-Founder</p>
                                    <div className='flex items-center justify-center mt-6'>
                                        <p className='bg-red-500 w-[40px] h-[2px]'></p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-4 mt-11'>
                                    <div className='bg-black h-[30px] w-[30px] rounded-[50%] flex items-center justify-center'>
                                        <FaLinkedinIn className='text-white text-[20px]' />
                                    </div>
                                    <div className='bg-black h-[30px] w-[30px] rounded-[50%] flex items-center justify-center'>
                                        <FaTwitter className='text-white text-[20px]' />
                                    </div>
                                    <div className='bg-black h-[30px] w-[30px] rounded-[50%] flex items-center justify-center'>
                                        <FaInstagram className='text-white text-[20px]' />
                                    </div>
                                    <div className='bg-black h-[30px] w-[30px] rounded-[50%] flex items-center justify-center'>
                                        <FaFacebookF className='text-white text-[20px]' />
                                    </div>

                                </div>
                            </div>

                        })}
                    </div>

                </div>

            </div>
            <div>
                <Interestedplants />
            </div>
        </div>
    );
}

export default About;
