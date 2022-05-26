import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";
import reviewBg from '../../img/reviewbg.jpg';

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery(["rewiews"], () =>
    fetch("http://localhost:5000/review").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="hero min-h-screen" style={{backgroundImage: `url(${reviewBg})` }} >
      <div className="px-2 md:px-12 lg:px-24 md:py-44 py-4 md:space-y-14" >
        <div className="flex justify-center">
          <div>
            <h4 className="text-secondary text-center text-xl">Testimonial</h4>
            <p className="text-neutral text-center text-2xl md:text-4xl">
              Our Customers <span className="font-bold">Are Saying?</span>
            </p>
            <div className="divider w-24 mx-auto"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          )).reverse().slice(0,3)}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
