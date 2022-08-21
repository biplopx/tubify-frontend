import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const [message, setMessage] = useState('');

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qv3qu8e', 'template_5rpfjcw', form.current, 'm1cLx2Fj-fUdx0WDc')
      .then(() => {
        setMessage(" your messege send successfully")
      });
  };
  return (
    <div className='container mx-auto pb-16'>
      <h1 className=' text-center text-4xl m-8 '>Contact Us</h1>
      <p className=' text-green-600 p-6 text-center'>{message}</p>
      <div className=' grid lg:grid-cols-3 md:grid-clos-1 grid-cols-1  '>
        <div className="bg-gray-800 bg-opacity-40 py-16 px-20 col-span-2 relative">
          <h2 className=' text-3xl pb-10'>Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className=''>
            <input type="text" name="user_name" className=' bg-transparent border-b w-full mb-6 pb-1 ' placeholder='Name' />
            <input type="email" name="user_email" className=' bg-transparent border-b w-full mb-6 pb-1 ' placeholder='Email' />
            <input type="number"  className=' bg-transparent border-b w-full mb-6 pb-1 ' placeholder='Phone' />
            <input type="text"  className=' bg-transparent border-b w-full mb-6 pb-1' placeholder='Orgazination' />
            <textarea name="message" className=' bg-transparent w-full  border-b block mb-8 mt-4' placeholder='Your Messege'></textarea>
            <button type='submit' value="Send" className='bg-sky-500 py-2 px-5 text-xl rounded uppercase '>Submit</button>
          </form>
        </div>
        <div className="contact-info bg-gray-800 bg-opacity-20 py-16 px-14 ">
          <h1 className=' text-3xl mb-9  '>Contact info</h1>
          <div >
            <p >Tubify Music limited</p>
            <p >Plot No. 16</p>
            <p className='mb-6'>Udyog Vihar Phase IV
              Mirpur – 1210</p>
            <p className='mb-10'>Corporate Identity Number: U74140DL2015PLC275325</p>

            <p className=' font-bold'>Write to us</p>
            <p className='mb-8 hover:text-sky-600  cursor-pointer'>contactWithTubify@gmail.com</p>
            <p className='pb-2'>If you have any feedback or concerns with respect to any content available on Tubify Music limited , please contact us . </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;