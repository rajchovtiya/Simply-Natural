import React from 'react';

const Login = ({ setColorchange }) => {
    setColorchange(`bg-white`)

    return (
        <div className='relative padding flex items-center justify-center min-h-[100vh]'>
            <div className='bg-white mt-28  w-full p-5 py-14 2xl:p-24 2xl:py-20'>
                <h2 className='text-3xl font-light'>My account</h2>
                <h1 className='mt-8 text-4xl font-medium'>Login</h1>
                <div className='mt-6 border border-gray-100 pb-5'>
                    <form className=" p-0 2x:p-8 w-full ">
                        <div className="mb-4">
                            <label className="block mb-1 text-gray-700">Username or email address *</label>
                            <input
                                type="text"
                                name="userName"
                                required
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-gray-700">Password *</label>
                            <input
                                type="password"
                                name="userName"
                                required
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className=" flex items-center gap-3">
                                <input className="" name="rememberme" type="checkbox" id="rememberme" value="forever" />
                                <span>Remember me</span>
                            </label>
                        </div>
                        <button className='text-white bg-[#fc5f5f] h-[40px] w-[130px] md:h-[45px] md:w-[120px] mt-6 cursor-pointer SHOP rounded-3xl ease-in-out duration-300 hover:bg-[#75c32c'>
                            LOG IN
                        </button>

                        <div className='mt-5'>
                            <a href="#" className='hover:text-green-400 text-gray-700'>Lost your password?</a>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
}

export default Login;
