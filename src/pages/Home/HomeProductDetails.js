import React from "react";
import { Link } from "react-router-dom";



const HomeProductDetails = ({ product }) => {
  const {
    price,
    productName,
    img,
    description,
    minimumQuantity,
    availableQuantity,
    size,
  } = product;
  return (
    <div className="card w-96 bg-base-100 my-4 shadow-xl">
    <figure><img src={img} alt="" /></figure>
    <div className="card-body">
      <h5 className="card-title text-2xl">{productName}</h5>
      <p className="text-gray-500">{description.slice(0,60)}...</p>
        <div className="text-lg font-medium space-y-2">
            <p>Minimum Quantity: <span className="font-medium">{minimumQuantity}</span></p>
            <p>Available Quantity: 
                    {
                        availableQuantity >0 ?<span className="font-bold">{availableQuantity}</span> 
                        : <span className='text-red-500'> Item Not Available</span>
                    }</p>
        </div>
        <div className="text-center">
            <p className="text-3xl font-bold text-neutral">$<span className="text-secondary text-7xl font-bold">{price}</span>/per pice</p>
        </div>
      <div className="card-actions justify-center">
      <Link to='/purchase' disabled={availableQuantity === 0} className="btn border-0  bg-gradient-to-r from-primary to-accent w-full text-white font-bold">Buy Now</Link>
      </div>
    </div>
  </div>
  );
};

export default HomeProductDetails;
