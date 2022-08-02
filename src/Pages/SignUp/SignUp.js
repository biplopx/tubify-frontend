import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from '../../components/Loading/Loading';
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let signupError;

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleUserName = (e) => {
    setName(e.target.value);
  }

  const handleUserEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  }
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, user, navigate])

  if (loading || gLoading) {
    return <Loading></Loading>
  }

  // error handling
  if (error || gError) {
    signupError = <div className="p-2 w-full my-3 border border-red-500 text-white rounded-md">
      <p><small>{error?.message || gError?.message}</small></p>
    </div>
  }

  const handleCreateUser = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name })
  }
  return (
    <div className='flex justify-center mt-16'>
      <div>
        <h2 className=' text-2xl font-bold pb-8'>Let's SignUp Here</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group pb-3">
            <label htmlFor="name" className='block  text-base pb-2'>Your Name</label>
            <input onChange={handleUserName} type="name" name="name" id="name" className='px-3' />
          </div>
          <div className="input-group pb-3">
            <label htmlFor="email" className='block  text-base pb-2 '>Email</label>
            <input onChange={handleUserEmail} type="email" name="email" id="email" className='px-3' />
          </div>
          <div className="input-group pb-3">
            <label htmlFor="password" className='block text-base pb-2'> Password </label>
            <input onChange={handleUserPassword} type="password" name="password " className=' px-3' id="password" />
          </div>
          <div>
            {signupError}
          </div>
          <button className='login-btn text-base font-bold white'>SignUp</button>
        </form>
        <div className='text-base mt-5'>
          <p className='text-white'>Already have an account ? <Link to='/login' className='buttom-text'>Login</Link></p>
          <div className='or-login-option text-center relative mt-2 mb-5'>or</div>
          <button onClick={() => signInWithGoogle()} className='flex  items-center border-2 pl-14 pr-12  rounded mb-10 '><img src="https://i.ibb.co/gdnsvzX/7123025-logo-google-g-icon-4.png" alt="" />Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;