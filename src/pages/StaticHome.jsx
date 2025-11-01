import React from 'react';
import GStore from '../assets/playStore.png';
import AStore from '../assets/appleStore.png';
import hero from '../assets/hero.png'

const StaticHome = () => {
    return (
        <div>
            <div className='px-[4%]'>
                <div className='text-4xl md:text-5xl font-bold text-center pt-6'>
                    <h1>We Build</h1>
                    <h1><span className='text-violet-600'>Productive</span> Apps</h1>
                </div>
                <div className='py-5 text-center text-gray-500 text-sm md:test-base'>
                    <p >At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.</p>
                    <p>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex gap-5 justify-center py-2 md:py-5'>
                    <a href="https://play.google.com/" className='btn flex gap-2 items-center'><img src={GStore} alt="" className='w-5 h-5' /> Google Play</a>
                    <a href="https://www.apple.com/app-store/" className='btn flex gap-2 items-center'><img src={AStore} alt="" className='w-5 h-5' /> App Store</a>
                </div>
                <div className='flex justify-around pt-2 px-[4%] md:px-[15%]'>
                    <img src={hero} alt="" className='w-full' />
                </div>
            </div>
            <div className='bg-violet-500 text-white py-[3%]'>
                <div className='flex flex-col md:flex-row justify-center text-3xl md:text-4xl font-semibold gap-0 md:gap-2'>
                    <h1 className='text-center'>Trusted by Millions, </h1>
                    <h1 className='text-center'>Built for You</h1>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 justify-around px-2 md:px-20 py-[3%] gap-2'>
                    <div className='text-center'>
                        <h6 className='text-xs md:text-sm'>Total Downloads</h6>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>29.6M</h1>
                        <h6 className='text-xs md:text-sm'>21% more than last month</h6>
                    </div>
                    <div className='text-center'>
                        <h6 className='text-xs md:text-sm'>Total Reviews</h6>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>906K</h1>
                        <h6 className='text-xs md:text-sm'>46% more than last month</h6>
                    </div>
                    <div className='text-center col-span-2 md:col-span-1'>
                        <h6 className='text-xs md:text-sm'>Active Apps</h6>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>132+</h1>
                        <h6 className='text-xs md:text-sm'>31 more will Launch</h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StaticHome;