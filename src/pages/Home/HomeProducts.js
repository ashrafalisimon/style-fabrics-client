import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import HomeProductDetails from './HomeProductDetails';

const HomeProducts = () => {
    const {data:products, isLoading}= useQuery(['products'],
    ()=>fetch('products.json').then(res=>res.json()));

    if(isLoading){
        return <Loading/>
    }
    return (
        <div className='px-4 py-4 md:px-28 md:py-28'>
            <div className='text-center space-y-6 mb-4 md:mb-28'>
                <h2 className='text-primary text-4xl '>Our Products</h2>
                <div className="divider w-24 mx-auto"></div> 
                <p>We care about the quality, not the quantity.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-full mx-auto'>
                {
                    products.slice(0,6).map(product => 
                        <HomeProductDetails 
                        key={product._id}
                        product={product}
                        ></HomeProductDetails> )
                }
            </div>
            <div className='flex items-center justify-center mt-8'>
            <Link to='/products' className="btn  border-0 bg-neutral hover:bg-secondary hover:text-neutral px-16 duration-500 ease-in-out text-white font-bold">See All <ArrowRightIcon className='h-6 w-6 ml-2'/> </Link>
            </div>
        </div>
    );
};

export default HomeProducts;