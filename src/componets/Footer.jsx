import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="bg-[#f9f9f9]  padding pt-16">
            <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-12 mt-28">
                {/* Left Info */}
                <div className="max-w-md">
                    <h1 className="text-xl font-normal text-center lg:text-left">
                        Get In Touch With Us For The Best Quality Plants & Succulents
                    </h1>
                    <p className="mt-6 text-[15px] text-gray-700 text-center lg:text-left">
                        Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.
                    </p>
                </div>

                {/* Logo + Social */}
                <div className="flex flex-col items-center">
                    <img src="./img/Logo1.svg" alt="Logo" className="w-[100px] md:w-[120px]" />
                    <h3 className="text-2xl font-medium mt-3">Simply Natural</h3>
                    <div className="flex gap-3 mt-4">
                        {[FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF].map((Icon, i) => (
                            <div key={i} className="bg-[#4e5768] h-[34px] w-[34px] rounded-full flex items-center justify-center hover:bg-[#75c32c] cursor-pointer transition-colors duration-300">
                                <Icon className="text-white text-[16px]" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="min-w-[160px] text-center lg:text-left">
                    <h1 className="text-xl font-medium">Quick Links</h1>
                    <ul className="mt-4 space-y-3 text-[15px] text-gray-700">
                        <li className="footer_list">Introduction</li>
                        <li className="footer_list">Know more About Us</li>
                        <li className="footer_list">Visit Store</li>
                        <li className="footer_list">Let's Connect</li>
                    </ul>
                </div>

                {/* Important Links */}
                <div className="min-w-[160px] text-center lg:text-left">
                    <h1 className="text-xl font-medium">Important Links</h1>
                    <ul className="mt-4 space-y-3 text-[15px] text-gray-700">
                        <li className="footer_list">Privacy Policy</li>
                        <li className="footer_list">Shipping Details</li>
                        <li className="footer_list">Terms & Conditions</li>
                        <li className="footer_list">Media Kit</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-12 pb-8 text-center gap-2 text-gray-700 text-[13px]">
                <p>© 2025 Simply Natural</p>
                <p>Powered by Simply Natural</p>
            </div>
        </div>
    );
};

export default Footer;
