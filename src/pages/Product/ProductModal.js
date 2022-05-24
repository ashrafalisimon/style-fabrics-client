import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ProductModal = ({ items, setItems, refetch }) => {
  const [user, loading, error] = useAuthState(auth);
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
      if(quantity > availableQuantity){
        toast.error('Available Quantity is Bigger...');
        refetch();
      }
      else{
        setQuantity(preCount=> preCount+ 1);
        refetch();
      }
  }
  const handleDecrement =()=>{
      if(quantity < minimumQuantity){
       toast.error('Minimum Quantity Not Small...');
       refetch();
    }
    else{
      setQuantity(preCount=> preCount - 1);
      refetch();
    }
  }
  const handleOrderForm = (event) => {
    event.preventDefault();
    const myQuantity = event.target.quantity.value;
    console.log(myQuantity);
    refetch();
    setItems(null);
  };

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
                <span className="text-accent font-bold">
                  {availableQuantity}
                </span>
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-neutral">
                $
                <span className="text-secondary text-4xl font-bold">
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
          <form onSubmit={handleOrderForm} className="space-y-2 mt-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Quantity :</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder={minimumQuantity}
                value={quantity}
                disabled
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name: </span>
              </label>
              <input
               type="text"
               name="name"
                  disabled
                value={user?.displayName || ""}
               className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email: </span>
              </label>
              <input
              type="email"
              name="email"
                disabled
                value={user?.email || ""}
               className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Address: </span>
              </label>
              <input
              type="text"
              name="address"
              required
               className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone : </span>
              </label>
              <input
            type="text"
            name="phone"
            required
               className="input input-bordered w-full"
              />
            </div>

            <textarea
              name="customDetails"
              placeholder="Product Custom Details"
              className="input input-bordered w-full"
            ></textarea>

            <input
            disabled={quantity > availableQuantity || quantity < minimumQuantity}
            type="submit" value="Order Now" className="btn w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
