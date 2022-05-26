import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
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
                    const review = {
                        name: data.name,
                        customer: data.customer,
                        description: data.description,
                        img: img
                    }

                    fetch('http://localhost:5000/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(review)
                    })
                    .then(res =>res.json())
                    .then(inserted =>{
                        console.log('inserted: ',inserted);
                        if(inserted.insertedId){
                            toast.success('Review added successfully')
                            reset();
                        }
                        else{
                            toast.error('Failed to add the Review');
                        }
                    })
    
            }
        })
        
      };

    

    return (
        <div>
            <h1 className='text-xl text-center py-2'>Please Add Review</h1>
        <div className='text-center'>

        <form onSubmit={handleSubmit(onSubmit)}>
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
            {/* // customer: */}
            <div className="form-control w-full">
              <input
                {...register("customer", {
                  required: {
                    value: true,
                  },
                })}
                type="text"
               value='customer'
                className="input input-bordered w-full max-w-xs"
              />
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
                  placeholder="Enter Your Review"
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
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>


            {/* add btn */}
            <input className="btn w-full" value="Add Review " type="submit" />
          </form>


        
        </div>
        </div>
    );
};

export default AddReview;