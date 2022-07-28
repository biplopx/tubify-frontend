import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from '../../components/Loading/Loading';
const SignUp = () => {

  /*==============================================
        User Email & Password Handle Start
  ===============================================*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();


  const handleUserEmail = (e) => {
    setEmail(e.target.value);
  }


  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  }


  const handleUserConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }
  /*==============================================
          User Email & Password Handle End
    ===============================================*/


  /*==============================================
              Navigate & page Lodding  Start
    ===============================================*/

  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>
  }
  /*==============================================
            Navigate & page Lodding  End
  ===============================================*/


  /*==============================================
         Create User & Check Password Start
  ===============================================*/
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confrimPassword) {
      setError("Your Password did't match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  }
  /*==============================================
        Create User & Check Password End
 ===============================================*/

  return (
    <div className='flex justify-center mt-16'>
      <div >
        <h2 className=' text-2xl font-bold pb-8'>Let’s SignUp Here</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group pb-3">
            <label htmlFor="name" className='block  text-base pb-2'>Your Name </label>
            <input type="name" name="name" id="" className='px-3' />
          </div>
          <div className="input-group pb-3">
            <label htmlFor="email" className='block  text-base pb-2 '>Email </label>
            <input onBlur={handleUserEmail} type="email" name="email" id="" className='px-3' />
          </div>
          <div className="input-group pb-3">
            <label htmlFor="password" className='block text-base pb-2'> Password </label>
            <input onBlur={handleUserPassword} type="password" name="password " className=' px-3' id="" />
          </div>
          <div className="input-group pb-3">
            <label htmlFor="confirm-password" className='block text-base pb-2'>Confirm Password </label>
            <input onBlur={handleUserConfirmPassword} type="password" name="confirm-password " className=' px-3' id="" />
          </div>
          <p className=' text-red-600  p-3 rounded text-center'>{error}</p>
          <button className='login-btn text-base font-bold white'>SignUp</button>
        </form>
        <div className=' text-base mt-3 text-center'>
          <p className=' white'>Already have an account ? <Link to='/login' className=' buttom-text'>Login</Link> </p>

          <div className='or-login-option text-center relative mt-2 mb-5  '>or</div>
          <button onClick={() => signInWithGoogle()} className='flex  items-center border-2 pl-14 pr-12  rounded mb-10 '><img src="https://i.ibb.co/gdnsvzX/7123025-logo-google-g-icon-4.png" alt="" />  Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;