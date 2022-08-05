import React from 'react';

const AboutUs = () => {
  return (
    <div className='container mx-auto pl-5 grid grid-cols-2 bg-gray-800 bg-opacity-70'>
      <div className='p-6'>
        <h1 className=' text-5xl mb-5'>About Us</h1>
        <p className=' text-xl'>
          With Tubify, it’s easy to find the right music or podcast for every moment – on your phone, your computer, your tablet and more.
          <br className='m'/>
          There are millions of tracks and episodes on Tubify. So whether you’re behind the wheel, working out, partying or relaxing, the right music or podcast is always at your fingertips. Choose what you want to listen to, or let Tubify surprise you.
          You can also browse through the collections of friends, artists, and celebrities, or create a radio station and just sit back.
          Soundtrack your life with Tubify. Subscribe or listen for free.
        </p>
      </div>
      <div className='ml-6 p-6'>
        <h2 className=' text-4xl mb-5'>Customer Service and Support</h2>
        <ol className=' list-decimal'>
          <li>coffe</li>
        </ol>
      </div>
    </div>
  );
};

export default AboutUs;