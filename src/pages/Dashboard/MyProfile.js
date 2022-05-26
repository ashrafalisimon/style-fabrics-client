import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset 
      } = useForm();
      const [useInfo, setUseInfo] =useState({})

        useEffect(()=>{
          fetch(`http://localhost:5000/user/${user?.email}`)
          .then(res=>res.json())
          .then(result => {
            console.log(result);
            setUseInfo(result)
          })
        }, [])

      const onSubmit = async (data) => {
            const email =user.email
                    const profile = {
                        email: email,
                        name: user.displayName,
                        education: data.education,
                        address: data.address,
                        phone: data.phone,
                        linkend: data.linkend,
                    }
                    if(email){
                        fetch(`http://localhost:5000/user/${email}`, {
                            method:'PUT',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body:JSON.stringify(profile)
                        })
                        .then(res=>res.json())
                        .then(data => {
                            console.log(data)
                            toast.success('Review added successfully')
                            reset();
                        })
                    }
        
      };
    return (
        <div className='text-center'>
            <h4 className='font-bold text-xl py-4'>My Profile Details</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 place-items-start'>
                <p><span className='font-bold'>Account Name:</span> {user.displayName}</p>
                <p className='font-medium'><span className='font-bold'>Email</span>: {user.email}</p>
                <p><span className='font-bold'>Education</span>:{useInfo.education
}</p>
                <p><span className='font-bold'>Address</span>:{useInfo.address}</p>
                <p><span className='font-bold'>Phone</span>:{useInfo.phone}</p>
                <p><span className='font-bold'>Linkend</span>:{useInfo.linkend}</p>
            </div>
            <div class="divider"></div> 
            <h4 className='font-bold text-xl py-2'>My Profile Update</h4>
          <div className='text-center'>
          <form className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-3' onSubmit={handleSubmit(onSubmit)}>
            {/* // Education: */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Education: </span>
              </label>
              <input
                {...register("education", {
                  required: {
                    value: true,
                    message: "Education is Required",
                  },
                })}
                type="text"
                placeholder="Enter Your School/Collage"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.education?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.education.message}
                  </span>
                )}
              </label>
            </div>
            {/* // Address: */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Address: </span>
              </label>
              <input
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is Required",
                  },
                })}
                type="text"
                placeholder="Enter Your City,Country"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>
            {/* // Phone: */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone: </span>
              </label>
              <input
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone is Required",
                  },
                })}
                type="number"
                placeholder="Enter Your Phone Number"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.number?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.number.message}
                  </span>
                )}
              </label>
            </div>
            {/* // Linkend: */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Linkend: </span>
              </label>
              <input
                {...register("linkend", {
                  required: {
                    value: true,
                    message: "Linkend is Required",
                  },
                })}
                type="text"
                placeholder="Enter Linkend URL"
                className="input input-bordered w-full"
              />
              <label className="label">
                {errors.linkend?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.linkend.message}
                  </span>
                )}
              </label>
            </div>
           
            

            {/* add btn */}
            <input className="btn w-full" value="Update Account " type="submit" />
          </form>

          </div>  
        </div>
    );
};

export default MyProfile;