import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='h-screen flex justify-center items-center flex-col'>
      <h2 className='text-center text-4xl font-bold mb-4'>Page Not Found</h2>
      <button className='py-1 px-2 bg-sky-500 text-white rounded-md'><Link to="/">Back to Home</Link></button>
    </section>
  );
};

export default NotFound;