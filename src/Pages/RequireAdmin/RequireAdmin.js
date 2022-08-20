import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/UseAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login"></Navigate>
    }
    return children
};

export default RequireAdmin;