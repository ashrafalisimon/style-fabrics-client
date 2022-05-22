import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
      <div className="card-body space-y-4">
        <p>{review.description}</p>
        <div className="flex items-center space-x-5">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} />
            </div>
          </div>
          <div>
            <h2 className="card-title">{review.name}</h2>
            <p>
              <small>{review.customer}</small>
            </p>
            <div class="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
