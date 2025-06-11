import React from 'react';
import { IoCallSharp } from 'react-icons/io5';

const Testimonials = () => {
    return (
        <div className='padding mt-16'>
            <div className='flex justify-between'>
                <div className='flex justify-between flex-col'>
                    <h1 className='text-3xl font-medium'>Need help in choosing the <br />right plants?</h1>
                    <div className='flex items-center gap-3'>
                        <IoCallSharp />
                        <p className='text-red-500 font-medium'>A s k F o r H e l p</p>
                    </div>
                </div>
                <div className='max-w-[720px]'>
                    <p className='opacity-70 text-[15px]'>Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget maecenas sedurna malesuada consectetuer.</p>
                    <p className='mt-10 opacity-70 text-[15px]'>Ornare integer commodo mauris et ligula purus, praesent cubilia laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum tempor quis, turpis luctus dolor sapien vivamus.</p>
                </div>
            </div>
            <div className='flex items-center justify-between gap-3 mt-24 flex-wrap xl:flex-col-reverse 2xl:flex-row'>
                <div className='xl:max-w-[100%] 2xl:max-w-[550px] xl:mt-9 2xl:mt-0'>
                    <h1 className='text-3xl font-medium'>Testimonials</h1>
                    <p className='opacity-60 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='flex items-center justify-between gap-2 mt-20'>
                        <img src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user1-free-img.jpg" alt="" className='rounded-xl 2xl:max-w-[250px] lg:max-w-[200px]' />
                        <div className='flex justify-center flex-col ml-10'>
                            <p className='text-[14px] opacity-85'>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </p>
                            <h3 className='font-medium mt-8 text-xl'>Sarah Jones</h3>
                            <p className='text-[13px] opacity-85'>Interior Designer</p>
                        </div>
                    </div>
                </div>
                <div className='xl:max-w-[100%] xl:w-[100%] 2xl:max-w-[550px] 2xl:w-[550px ] xl:flex 2xl:flex-col'>
                    <div className='flex items-center justify-between gap-2 mt-20 xl:max-w-[450px] '>
                        <img src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/01/testimonial-2.jpg" alt="" className='rounded-xl 2xl:max-w-[250px] lg:max-w-[200px]' />
                        <div className='flex justify-center flex-col ml-10'>
                            <p className='text-[14px] opacity-85'>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </p>
                            <h3 className='font-medium mt-8 text-xl'>Jessica Foxx</h3>
                            <p className='text-[13px] opacity-85'>Student</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-2 mt-20 xl:max-w-[450px] '>
                        <img src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user3-free-img.jpg" alt="" className='rounded-xl 2xl:max-w-[250px] lg:max-w-[200px]' />
                        <div className='flex justify-center flex-col ml-10'>
                            <p className='text-[14px] opacity-85'>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </p>
                            <h3 className='font-medium mt-8 text-xl'>Briana Luke</h3>
                            <p className='text-[13px] opacity-85'>Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Testimonials;
