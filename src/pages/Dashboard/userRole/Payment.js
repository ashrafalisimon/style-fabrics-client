import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1sswFlniIeQFhAxGeu4Us4KrWQjjyvY4vDKztLcYjkMQ4z861WvX0BI4skKl1JaYriV4TEahIQdwI1OSYtDyap003aO35HyQ');

const Payment = () => {
    const {id} = useParams();
    const url =`http://localhost:5000/order/${id}`
    const {data: order, isLoading}= useQuery(['products'],
    ()=>fetch(url).then(res=>res.json()));

    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <div class="card w-full max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.userName}</p>
                    <h2 class="card-title">Please Pay for {order.productName}</h2>
                    <p>Your Product Quantity: <span className='font-bold'>{order.quantity}</span></p>
                    <p>Please pay: <span className='text-secondary font-bold'>${order.price}</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;