import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section className='about container mx-auto px-5  pt-20 flex justify-between'>
    <div className="about-img">
      <img src="https://i.ibb.co/pPsRgP1/about-image.png" className='' alt="" />
    </div>
    <div className="about-text w-1/2 pt-20  ">
      <p>Tubify is an online video and music streaming platform. It is making online music easy and fun established to bring entertainment to people at a low cost. It's easy to find the right music or podcast for every moment - on your phone, computer, tablet, and more. You can run your professional and efficient stream studio from home or office with Tubify. Subscribe or listen for free. </p>
    </div>
    </section>
  );
};

export default AboutUs;