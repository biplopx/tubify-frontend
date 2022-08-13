import React from 'react';
import Modal from 'react-modal';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const PurchaseModal = ({ myPlan, setIsOpen, refetch, modalIsOpen }) => {
    const navigate = useNavigate()
    const { plan, price } = myPlan;
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
            plan:true

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
                console.log(data)
                if (data._id) {
                    refetch()
                    setIsOpen(false)
                    reset()
                    toast.success('successfully ordered please check my order page')
                    navigate('/payment')

                }
                else{
                    toast.error(data.massage)
                }
            })


    };
    Modal.setAppElement('#root');
    const closeModal = () => {
        setIsOpen(false);
    }
    if (loading) {
        return <Loading></Loading>
    }
    const customStyles = {
        content: {
            width: "500px",
            height: "450px",
            background: "#000221",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <div className=''>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="purchase Modal">

                <div className='' >
                    <h2 className=' text-center signika text-[20px] mt-2' >Add Your Purchase Information</h2>
                    <p className=' text-right mt-[-40px]'><button className='  border px-1 rounded' onClick={closeModal}>close</button></p>
                </div>

                <h3 className="font-bold text-sm text-center mt-5 ">{plan}</h3>
                <h3 className="font-bold text-sm text-center mt-2 ">price: ${price}</h3>
                <form onSubmit={handleSubmit(onSubmit)} className=' flex justify-center items-center flex-col mt-5'>
                    <input value={user?.displayName} disabled className=" p-2 mb-2  w-full max-w-xs rounded" />
                    <input value={user?.email} disabled className="p-2 mb-2  w-full max-w-xs rounded" />
                    <input value={`Total: $${price}`} readOnly disabled className="p-2 mb-2  w-full  max-w-xs rounded" />
                    <input required type="number"{...register("phone")} placeholder='Your Phone Number' className="p-2 mb-2 text-black  w-full max-w-xs rounded" />
                    <input required type='text' {...register("address")} placeholder='Your Address' className="p-2 mb-2   w-full max-w-xs rounded text-black" />
                    <input type='submit' value="Booking plan" className="p-2 mb-2  w-full max-w-xs rounded bg-[#3F9FFF]" />
                </form>

            </Modal>
        </div>
    );
};

export default PurchaseModal;