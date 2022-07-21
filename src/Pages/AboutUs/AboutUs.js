import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section className='about container mx-auto px-5  pt-20 flex justify-between'>
    <div className="about-img">
      <img src="https://i.ibb.co/pPsRgP1/about-image.png" className='' alt="" />
    </div>
    <div className="about-text w-1/2 pt-20  ">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
    </div>
    </section>
  );
};

export default AboutUs;