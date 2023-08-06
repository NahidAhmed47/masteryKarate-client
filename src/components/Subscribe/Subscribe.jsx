import React from 'react';

const Subscribe = () => {
    return (
        <div className='rounded-md bg-[#f6f5fb] grid md:grid-cols-2 mb-10 p-5 md:p-8 lg:p-10'>
            <div className='flex justify-center items-center'>
                <img src="/public/subscribe.webp" alt="subscribeImg" ></img>
            </div>
            <div className='flex items-center'>
                <div className='space-y-4'>
                    <h1 className='text-2xl md:text-3xl text-neutral font-bold '>Subscribe For Our Latest Updates</h1>
                    <p className='text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quae quam et dolore necessitatibus dolores dolor, nam nisi officia quia.</p>
                    <div className='space-y-3'>
                        <input type="email" name="" id="" className='w-full h-12 px-5 rounded-md bg-white outline-none ' placeholder='Enter Your Email' />
                        <button className='px-5 py-2 bg-primary text-sm text-white font-semibold rounded-md'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;