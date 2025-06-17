import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
    return (
        <div className='padding'>
            <div className='flex justify-between gap-10 mt-12 flex-wrap'>
                <div className='w-[100%]  2xl:w-[58%]'>
                    <div className='w-[100%] 2xl:w-[80%]'>
                        <h1 className='text-3xl font-medium'>Contact Details</h1>
                        <div className='mt-7 flex items-center 2xl:justify-between flex-wrap gap-4 justify-center   md:justify-between'>
                            <div className='flex gap-3  w-[260px] '>
                                <FaMapMarkerAlt className='text-[#fc5f5f] text-[24px] mt-4' />
                                <div className='ml-5'>
                                    <h2 className='text-xl font-medium'>Our Location</h2>
                                    <p className='mt-2 text-gray-700 text-[16px]'>1569 2nd Ave, New York,<br />NY 10028, USA</p>
                                </div>
                            </div>
                            <div className='flex gap-2 w-[260px]'>
                                <IoCall className='text-[#fc5f5f] text-[24px] mt-4' />

                                <div className='ml-5'>
                                    <h2 className='text-xl font-medium'>Call Us</h2>
                                    <p className='mt-2 text-gray-700 text-[16px]'>+123 456 7890<br />+123 456 7891</p>
                                </div>
                            </div>
                            <div className='flex  gap-2 w-[260px] mt-4'>
                                <MdEmail className='text-[#fc5f5f] text-[24px] mt-4' />
                                <div className='ml-5'>
                                    <h2 className='text-xl font-medium'>Our Email</h2>
                                    <p className='mt-2 text-gray-700 text-[16px]'>info@example.com<br />support@example.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr className='mt-10' />
                    <div className=" flex items-center  p-4 px-0">
                        <form className=" p-8 w-full px-0">
                            <h2 className="text-2xl font-medium mb-6  text-gray-800">Send Us a Message</h2>

                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">Username</label>
                                <input
                                    type="text"
                                    name="userName"
                                    required
                                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ></textarea>
                            </div>

                            <button className='text-white bg-[#fc5f5f] h-[40px] w-[130px] md:h-[45px] md:w-[200px] mt-6 cursor-pointer SHOP rounded-3xl ease-in-out duration-300 hover:bg-[#75c32c'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className='w-[100%]  2xl:w-[38%]'>
                    <h1 className='text-3xl font-medium'>Find Us</h1>
                    <div className="w-full h-[650px] rounded-2xl overflow-hidden shadow-lg m-4 mx-0">
                        <iframe
                            src="https://www.google.com/maps?q=Ahmedabad,+India&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map" />
                    </div>
                    <p className='text-red-500 mt-6 cursor-pointer' >Open Map Navigation</p>
                </div>
            </div>
        </div >
    );
}

export default ContactForm;
