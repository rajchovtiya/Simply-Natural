import React from 'react';
import { IoCallSharp } from 'react-icons/io5';
import HelpSection from './HelpSection';

const Testimonials = () => {
    return (
        <div className=" mt-16 padding">
            {/* Help Section */}
            <HelpSection />
            
            {/* Testimonials Section */}
            <div className="flex flex-col 2xl:flex-row gap-12 mt-24">
                {/* Left Column */}
                <div className="2xl:w-1/2">
                    <h1 className="text-2xl md:text-3xl font-medium">Testimonials</h1>
                    <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className="flex gap-4 mt-10">
                        <img
                            src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user1-free-img.jpg"
                            alt="User"
                            className="rounded-xl w-28 md:w-40 lg:w-52 object-cover"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-sm text-gray-700">
                                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit...
                            </p>
                            <h3 className="font-medium mt-4 text-lg">Sarah Jones</h3>
                            <p className="text-xs text-gray-500">Interior Designer</p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="2xl:w-1/2 space-y-10">
                    {[{
                        name: "Jessica Foxx",
                        role: "Student",
                        image: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/01/testimonial-2.jpg"
                    }, {
                        name: "Briana Luke",
                        role: "Student",
                        image: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user3-free-img.jpg"
                    }].map((person, index) => (
                        <div key={index} className="flex gap-4">
                            <img
                                src={person.image}
                                alt={person.name}
                                className="rounded-xl w-28 md:w-40 lg:w-52 object-cover"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-sm text-gray-700">
                                    Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit...
                                </p>
                                <h3 className="font-medium mt-4 text-lg">{person.name}</h3>
                                <p className="text-xs text-gray-500">{person.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
