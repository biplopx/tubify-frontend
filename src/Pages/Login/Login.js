import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  return (
    <div className='flex justify-center mt-16'>
    <div >
      <h2 className=' text-2xl font-bold pb-4'>Let’s Login Here</h2>
      <form action="">
        <div className="input-group pb-3">
          <label htmlFor="email" className='block  text-base pb-2'>Email </label>
          <input type="email" name="email" id="" />
        </div>
        <div className="input-group ">
          <label htmlFor="password" className='block text-base pb-2'>Password </label>
          <input type="password" name="password " className=' ' id="" />
        </div>
        <button className='login-btn text-base font-bold white'>Login</button>
      </form>
     <div className='bottom-text text-base mt-3 '>
     <p >Forgte Password</p>
    <p className='pt-2'>  <Link to="/signup">Create Account</Link></p>
      <div className='or-login-option text-center relative mt-2 mb-5'>or</div>
      <button className='flex  items-center border-2 pl-14 pr-12  rounded mb-10 '><img src="https://i.ibb.co/gdnsvzX/7123025-logo-google-g-icon-4.png" alt="" />  Continue With Google</button>
     </div>
    </div>
  </div>
  );
};

export default Login;