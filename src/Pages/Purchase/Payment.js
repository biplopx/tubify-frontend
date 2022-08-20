import React from 'react';
import { Elements, } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import UseOrder_info from '../../Hooks/UseOrder_info';
import CheckoutFrom from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0Z9NHKPkPGbWfR23AenemDc8oGBjTTBB42S1xTYRTBGrzG8aYDlz1YXqSl0E2lB5xVJ0OfJlX6yifY384ot6Q200Q65Ed65y');

const Payment = () => {
    const orderInfo = UseOrder_info()
    const { userName, userEmail } = orderInfo;
    return (
        <div className="card w-[90%] bg-base-100 shadow-xl mt-5">
            <h3 className='text-center text-secondary text-2xl'>Please pay us</h3>
            <div className='lg:flex'>
                <div className='lg:w-[50%] ml-12'>
                    <h2 className=" ">Hi {userName} </h2>
                    <h2 className=" ">email {userEmail} </h2>
                </div>
                <div className=' border bg-[#0D1838] rounded-lg px-12  py-16 lg:w-[50%] mt-2'>
                    <Elements stripe={stripePromise}>
                        <CheckoutFrom data={orderInfo}></CheckoutFrom>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;