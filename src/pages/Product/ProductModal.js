import React, { useState } from "react";

const ProductModal = ({ items, setItems, refetch }) => {
  const {
    price,
    productName,
    img,
    description,
    minimumQuantity,
    availableQuantity,
    size,
  } = items;
  const [quantity,setQuantity] =useState(minimumQuantity);
  const handleIncrement =()=>{
      if(quantity < availableQuantity){
        setQuantity(preCount=> preCount+ 1);
      }

      refetch();
  }
  const handleDecrement =()=>{
      if(quantity> minimumQuantity){
        setQuantity(preCount=> preCount - 1);
    }
    
    refetch();
   
  }
  const handleOrderNow =(event)=>{
        event.preventDefault();
        const inputQuantity = event.target.quantity.value;
        console.log(inputQuantity);
        refetch();
        setItems(null);
  }

  return (
    <div>
      <input type="checkbox" id="Product-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="Product-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="space-y-3">
            <h4 className="font-bold text-center text-secondary text-xl">
              {productName}
            </h4>
           <div className="flex justify-around">
           <p className="text-center">Minimum Quantity: {minimumQuantity}</p>
            <p className="text-center">
              Available Quantity:{" "}
              <span className="text-accent font-bold">{availableQuantity}</span>
            </p>
           </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-neutral">
                $
                <span className="text-secondary text-5xl font-bold">
                  {price}
                </span>
                /per pice
              </p>
            </div>
             <div className="w-full">
              <label className="input-group">
                <button className="bg-primary px-4 text-lg" onClick={handleDecrement}>-</button>
                <input
                value={quantity}
                  type="number"
                  name="productQuantity"
                  className="input input-bordered w-full"
                />
                <button className="bg-primary px-4" onClick={handleIncrement}>+</button>
              </label>
            </div>
          </div>
          <form onSubmit={handleOrderNow} className="space-y-2 mt-8">
            <input
              type="number"
              name="quantity"
                disabled
                value={quantity}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              //   disabled
              //   value={user?.displayName || ""}
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              //   disabled
              //   value={user?.email || ""}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              //   disabled
              //   value={user?.email || ""}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="customDetails"
              placeholder="Product Custom Details"
              className="input input-bordered w-full"
            ></textarea>
           
            <input type="submit" value="Order Now" className="btn w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
