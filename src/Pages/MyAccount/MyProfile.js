import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />
  }

  return (
    <section>
      <h2 className='text-2xl signika mb-5'>My Profile</h2>
      <div className='max-w-4xl mx-auto secondary-bg p-4 rounded-md'>
        <h2 className="text-center">{user?.displayName}</h2>
      </div>
    </section>
  );
};

export default MyProfile;