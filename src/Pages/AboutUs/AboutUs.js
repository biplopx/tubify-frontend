import React from 'react';
import aboutMusic from '../../images/Headphone.svg';
import aboutSupport from '../../images/Service_24.svg';

const AboutUs = () => {
  return (
    <div>
      <section className='container mx-auto pl-5 grid grid-cols-2 bg-gray-800 bg-opacity-20 py-10'>
        <div className='p-6'>
          <h1 className=' text-5xl mb-5'>About Us</h1>
          <p className=' text-xl mb-4'>With Tubify, it’s easy to find the right music or podcast for every moment – on your phone, your computer, your tablet and more.</p>
          <p className=' text-xl mb-4'>There are millions of tracks and episodes on Tubify. So whether you’re behind the wheel, working out, partying or relaxing, the right music or podcast is always at your fingertips. Choose what you want to listen to, or let Tubify surprise you.</p>
          <p className=' text-xl mb-4'>You can also browse through the collections of friends, artists, and celebrities, or create a radio station and just sit back.
          </p>
          <p className=' text-xl mb-4'>Soundtrack your life with Tubify. Subscribe or  listen  for free.
          </p>

        </div>
        <div className=' '>
          <img src={aboutMusic} alt="" className=' w-[80%]' />
        </div>
      </section>
      <section className='container mx-auto pl-5 grid grid-cols-2 bg-gray-800 bg-opacity-20 py-10'>
        <div className=''>
          <img src={aboutSupport} alt="" />
        </div>
        <div className=' pt-20 px-8'>
          <h2 className=' text-4xl mb-5'>Customer Service and Support</h2>
          <ol className=' list-decimal'>
            <li>Help site. Check out our help site for answers to your questions and to learn how to get the most out of Tubify and your music.</li>
            <li>Community. Get fast support from expert Tubify users. If there isn’t already an answer there to your question, post it and someone will quickly answer. You can also suggest and vote on new ideas for Tubify or simply discuss music with other fans.</li>
            <li>Contact us. Contact our Customer Support if you don’t find a solution on our support site or Community.</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;