import React from 'react';
import { IoCallSharp } from 'react-icons/io5';

const Testimonials = () => {
    return (
        <div className=" mt-16 padding">
            {/* Help Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl md:text-3xl font-medium leading-snug">
                        Need help in choosing the <br /> right plants?
                    </h1>
                    <div className="flex items-center gap-2">
                        <IoCallSharp className="text-xl text-red-500" />
                        <p className="text-red-500 font-medium tracking-wider">Ask For Help</p>
                    </div>
                </div>
                <div className="max-w-2xl text-sm text-gray-600 space-y-6">
                    <p>
                        Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sed urna malesuada consectetuer.
                    </p>
                    <p>
                        Ornare integer commodo mauris et ligula purus, praesent cubilia laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat fusce. Elit etiam phasellus suscipit dapibus, condimentum tempor quis, turpis luctus dolor sapien vivamus.
                    </p>
                </div>
            </div>

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
