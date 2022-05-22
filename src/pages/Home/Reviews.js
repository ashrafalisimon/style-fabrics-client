import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const {data:reviews, isLoading}= useQuery(['rewiews'],
    ()=>fetch('reviews.json').then(res=>res.json()));

    if(isLoading){
        return <Loading/>
    }
    return (
        <section className="px-2 md:px-12 lg:px-24 md:py-28 py-4 md:space-y-16">
      <div className="flex justify-center">
        <div>
          <h4 className="text-secondary font-bold text-xl">Testimonial</h4>
          <p className="text-neutral text-4xl">Our Customers <span className='font-bold'>Are Saying?</span></p>
          <div className="divider w-24 mx-auto"></div> 
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                reviews.map(review=> <Review key={review._id} review={review}></Review> )
            }
      </div>
    </section>
    );
};

export default Reviews;