import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [error , setError] =useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [
    signInWithEmailAndPassword,
    user,
  ] = useSignInWithEmailAndPassword(auth);
  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  }
  const handleUserEmail = (e) => {
    setEmail(e.target.value);
  }
  // const from = location.state?.from?.pathname || "/";
  //*********** Error handle*************** //
  // if (user) {
  //   navigate(from, { replace: true });
  // }
  // if (email != password) {
  //   setPassword("Something Went Wrong. Please Try Again.")
  // }
  //*********** Error handle*************** //
  const handleLoginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
  return (
    <div className='flex justify-center items-center mt-10'>
      <div >
     
        <h2 className=' text-2xl font-bold pb-4'>Let’s Login Here</h2>
        <form action="" onSubmit={handleLoginUser}>
          <div className="input-group pb-3">
            <label htmlFor="email" className='block  text-base pb-2'>Email </label>
            <input onBlur={handleUserEmail} type="email" name="email" id="" className='px-3' />
          </div>
          <div className="input-group ">
            <label htmlFor="password" className='block text-base pb-2'>Password </label>
            <input onBlur={handleUserPassword} type="password" name="password " className=' px-3' id="" />
          </div>
          <button className='login-btn text-base font-bold white'>Login</button>
        </form>
         <p className=' text-red-600'>{error}</p> 
        <div className=' text-base mt-4 '>
          <p className=' buttom-text'>Forgte Password</p>
          <p className='pt-2 buttom-text'>  <Link to="/signup">Create Account</Link></p>
          <div className='or-login-option text-center relative mt-2 mb-5 text-white'>or</div>
          <button className='flex  items-center border-2 pl-14 pr-12  rounded mb-10 '><img src="https://i.ibb.co/gdnsvzX/7123025-logo-google-g-icon-4.png" alt="" />  Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;