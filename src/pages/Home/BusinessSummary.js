import { CalculatorIcon, CalendarIcon, ShieldCheckIcon, ShoppingBagIcon } from '@heroicons/react/solid';
import React from 'react';
import summery from '../../img/summery.jpg';

const BusinessSummary = () => {
    return (
        <section className='bg-neutral'>
            <div className='px-4 md:px-28 py-16 flex flex-col md:flex-row space-x-4'>
                <div className='md:w-1/2 w-full space-y-4 md:mr-12'>
                    <h6 className='text-secondary'>WELL DESIGNED </h6>
                    <h4 className=' text-2xl md:text-4xl text-white leading-relaxed'>We Provide Clothes <span className='font-bold'>More Than Just Stitched Fabric</span></h4>
                    <p className='text-white text-sm font-light leading-loose pb-8'>Style Fabrics is the largest peer-to-peer comparison initiative in the textile industry. It tracks the apparel material and home textile sector’s progress toward more sustainable materials sourcing, as well as alignment with global effort. Besides the regular production became the largest exporter.</p>
                    <div className='flex justify-between border-t border-white pt-8 pb-4 md:pb-0'>
                        <div className='flex items-center space-x-3'>
                            <ShieldCheckIcon className='w-12 h-12 text-white'></ShieldCheckIcon>
                            <div className='text-white text-center'>
                                <h4 className='md:text-3xl text-2xl  font-medium'>25 + </h4>
                                <p className='text-xs md:text-lg'>Win Awards</p>
                            </div>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ShoppingBagIcon className='w-12 h-12 text-white'></ShoppingBagIcon>
                            <div className='text-white text-center'>
                                <h4 className='md:text-3xl text-2xl  font-medium'> 800 + </h4>
                                <p className='text-xs md:text-lg'>Equipment</p>
                            </div>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <CalendarIcon className='w-12 h-12 text-white'></CalendarIcon>
                            <div className='text-white text-center'>
                                <h4 className='md:text-3xl text-2xl  font-medium'>17 + </h4>
                                <p className='text-xs md:text-lg'>Total Years</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 w-full md:translate-y-14 '>
                    <img className='border-[30px]  md:scale-y-125 shadow-lg border-white' src={summery} alt="" />
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;