import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset 
      } = useForm();
      const imageStorageKey ='24fbf1611b877df3036c1d3f6d1035bd';


      const onSubmit = async (data) => {
        //   console.log(data.img[0])
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url =`https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result=> {
            // console.log(result);
            if(result.success){
                const img = result.data.url;
                    const product = {
                        productName: data.name,
                        img: img,
                        price: data.price,
                        description: data.description,
                        minimumQuantity: data.minimumQuantity,
                        availableQuantity: data.availableQuantity ,
                        
                    }

                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                    .then(res =>res.json())
                    .then(inserted =>{
                        console.log('inserted: ',inserted);
                        if(inserted.insertedId){
                            toast.success('Product added successfully')
                            reset();
                        }
                        else{
                            toast.error('Failed to add the Product');
                        }
                    })
    
            }
        })
        
      };


    return (
        <div>
            <h1 className='text-xl text-center py-2'>Add A Product</h1>

        <div className='text-center'>

        <form className='grid grid-cols-1 md:grid-cols-2 gap-4  place-items-center ' onSubmit={handleSubmit(onSubmit)}>
            {/* // Name: */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name: </span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            {/* // Image: */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("img", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
                type="file"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.img?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.img.message}
                  </span>
                )}
              </label>
            </div>

            {/* // price: */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Price: </span>
              </label>
              <input
                {...register("price", {
                  required: {
                    value: true,
                  },
                })}
                type="number"
                placeholder="Per Pics Price"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
            {/* // Description: */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea 
                 {...register("description", {
                    required: {
                      value: true,
                      message: "Description is Required",
                    },
                  })}
                  placeholder="Enter Your Description"
                  className="input input-bordered w-full max-w-xs"
              ></textarea>
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>


            {/* // minimumQuantity: */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Minimum Quantity: </span>
              </label>
              <input
                {...register("minimumQuantity", {
                  required: {
                    value: true,
                  },
                })}
                type="number"
                placeholder="Minimum Quantity"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.minimumQuantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.minimumQuantity.message}
                  </span>
                )}
              </label>
            </div>
            {/* // availableQuantity: */}
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Available Quantity: </span>
              </label>
              <input
                {...register("availableQuantity", {
                  required: {
                    value: true,
                  },
                })}
                type="number"
                placeholder="Available Quantity"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.availableQuantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.availableQuantity.message}
                  </span>
                )}
              </label>
            </div>
            
            {/* add btn */}
            <input className="btn w-full" value="Add Product " type="submit" />
          </form>

        </div>
        </div>
    );
};

export default AddProduct;