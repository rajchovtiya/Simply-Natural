import React from 'react';
import { IoCallSharp } from 'react-icons/io5';

const HelpSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10 h-[100%] items-center">
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

    );
}

export default HelpSection;
