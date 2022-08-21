import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import Loading from '../../components/Loading/Loading';
import PurchaseModal from './PurchaseModal';
import UseOrder_info from '../../Hooks/UseOrder_info';
import { useAuthState } from 'react-firebase-hooks/auth';
const Purchase = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const orderInfo = UseOrder_info()

    const navigate = useNavigate()
    const { id } = useParams()
    const url = `https://tubifybd.herokuapp.com/pricing/plan/${id}`

    const { data: myPlan, isLoading, refetch } = useQuery(['product'], () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate('/login')
        }
        return res.json()
    })
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const { plan, _id, price, services } = myPlan;


    const openModal = () => {
        setIsOpen(true)

    }
    return (
        <div className='w-3/4 mx-auto my-12'>

            <div key={_id} className="col bg-pricing p-1">
                <h3 className="text-center text-[40px] signika ">
                    {plan}
                </h3>
                <p className="text-xl text-center my-2">
                    $ <span className="font-[500] text-2xl">{price}</span>
                </p>
                <div className="lg:pl-[70px] md:pl-[40px] pl-[40px]">
                    <ul className="list-disc">
                        {services?.map((service, index) => (
                            <li key={index} className="mt-2 text-[16px]">{service}</li>
                        ))}
                    </ul>
                </div>
                <div className="text-center my-5">
                    <button onClick={() => openModal()} className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 mt-5 lg:mt-0 md:mt-0">checkout
                    </button>
                </div>
            </div>
            <div className='my-12'>
                {
                    modalIsOpen === true && <PurchaseModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} myPlan={myPlan} refetch={refetch}>
                    </PurchaseModal>
                }
            </div>
        </div>
    );
};
export default Purchase;