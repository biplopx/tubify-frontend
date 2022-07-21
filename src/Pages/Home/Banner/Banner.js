import React from 'react';
import './Banner.css'
const Banner = () => {
  return (
    <section className='px-5 py-12'>
      <div className="container mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className='signika leading-relaxed text-4xl mb-7'>Best place for streaming your favariute musics and videos.</h1>
          <p className='mb-7 leading-loose'>Tubify is the best online music and video streaming website where you can enjoy every type of content. You can play your favorite music, video songs, movies, tv series, dramas, etc. Tubify makes your entertainment life easy and simple.</p>
          <button className='px-4 py-2 font-semibold text-sm border border-sky-500 text-white rounded-md shadow-sm opacity-100 mr-10'>Explore</button>
          <button className='px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100'>Subscribe</button>
        </div>
        <div>
          <img src="https://i.ibb.co/wcXKXmC/feature-image.png" className='w-full' alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;