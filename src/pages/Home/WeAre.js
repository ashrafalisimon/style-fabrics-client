import React from 'react';
import WeAreImg from '../../img/single-img-03.png';
import { BadgeCheckIcon } from '@heroicons/react/solid';

const WeAre = () => {
    return (
        <div className='p-4 md:px-28 md:pt-16 flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full md:w-1/2'>
                <img src={WeAreImg} alt="" />
            </div>
            <div className='w-full md:w-1/2 space-y-4'>
                <h5 className='text-secondary font-medium'>Who We Are</h5>
                <h4 className='md:text-5xl  text-2xl text-neutral leading-relaxed '>An Ultimate Textile <span className='font-bold'>Brand in Market Since 2004</span></h4>
                <p className='text-sm font-light leading-loose'>Bangladeshi weavers of designer of furnishing fabrics is a textile manufacturer founded in 1970 and renowned for new and stylish interpretations of natural and organic fabrics. All of our fabrics are designed and woven at our own weaving mill.</p>
                <div className='md: pt-8 grid grid-cols-1 md:grid-cols-2 gap-5'> 
                    <p className='flex items-center space-x-2 text-lg'><BadgeCheckIcon className='h-5 w-5 text-secondary'></BadgeCheckIcon>
                        <span>Trends the Current Market</span>
                    </p>
                    <p className='flex items-center space-x-2 text-lg'><BadgeCheckIcon className='h-5 w-5 text-secondary'></BadgeCheckIcon>
                        <span>Biological tested fabrics</span>
                    </p>
                    <p className='flex items-center space-x-2 text-lg'><BadgeCheckIcon className='h-5 w-5 text-secondary'></BadgeCheckIcon>
                        <span>The rayon fabrics wholesaler</span>
                    </p>
                    <p className='flex items-center space-x-2 text-lg'><BadgeCheckIcon className='h-5 w-5 text-secondary'></BadgeCheckIcon>
                        <span>Awarded For Best Exporter</span>
                    </p>
                    <p className='flex items-center space-x-2 text-lg'><BadgeCheckIcon className='h-5 w-5 text-secondary'></BadgeCheckIcon>
                        <span>The Global fabrics distributor</span>
                    </p>
                    <p className='flex items-center space-x-2 text-lg'><BadgeCheckIcon className='h-5 w-5 text-secondary'></BadgeCheckIcon>
                        <span>Stable partner global textile</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WeAre;