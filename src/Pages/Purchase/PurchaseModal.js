import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
const PurchaseModal = ({myPlan,setModal, refetch }) => {
    const {plan,price}=myPlan;
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (userData) => {
        const order = {
            userName: user?.displayName,
            userEmail: user?.email,
            address: userData?.address,
            phoneNum: userData?.phone,
            price: price,
            planName: plan,
            statusPending: true,

        }
        fetch('http://localhost:5000/order/new', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    refetch()
                    setModal(null)
                    reset()
                    alert.success('successfully ordered please check my order page')

                }
            })


    };
    if(loading){
        return<Loading></Loading>
    }
    return (
        <div>
        <input type="checkbox" id="purchase-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="font-bold text-sm px-5 text-primary">{plan}</h3>
                <form onSubmit={handleSubmit(onSubmit)}  className=' flex justify-center items-center flex-col mt-5'>
                    <input value={user?.displayName} disabled className="input input-bordered mb-2  w-full max-w-xs" />
                    <input value={user?.email} disabled className="input input-bordered mb-2  w-full max-w-xs" />
                    <input value={`Total: $${price}`} readOnly className="input input-bordered mb-2  w-full max-w-xs" />
                    <input required type="number"{...register("phone")} placeholder='Your Phone Number' className="input input-bordered mb-2  w-full max-w-xs" />
                    <input required type='text' {...register("address")} placeholder='Your Address' className="input input-bordered mb-2  w-full max-w-xs" />
                    <input type='submit' value="order" className="input btn btn-secondary mb-2  w-full max-w-xs" />
                </form>
            </div>
        </div>

    </div>
    );
};

export default PurchaseModal;