import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../components/Loading/Loading';
import auth from '../firebase.init';
const UseOrder_info = () => {
    const [user, loading] = useAuthState(auth)
    const email = user?.email;
    const [orderInfo, setOrderInfo] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/booking/my-booking/${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Barer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => setOrderInfo(data)
            )
    }, [email])
    if (loading) {
        return <Loading></Loading>
    }

    return orderInfo
};

export default UseOrder_info;