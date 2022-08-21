import React from 'react';
import dolby from './dolby.png'
import disnep from './disnep.png'
import pandora from './pandora.png'
import spotify from './spotify.png'

const Partner = () => {
    return (
        <section className='container px-5 py-16 mx-auto'>
            <h3 className="text-center my-5 signika text-[40px]">Our Partner</h3>

            <div className=" bg-pricing py-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1   content-around  ">
                <div className='w-2/4 mx-auto'><img className='w-[80px]' src={dolby} alt="" /></div>
                <div className='w-2/4 mx-auto'><img className='w-[80px]' src={pandora} alt="" /></div>
                <div className='w-2/4 mx-auto'><img className='w-[80px]' src={spotify} alt="" /></div>
                <div className='w-2/4 mx-auto'><img className='w-[80px]' src={disnep} alt="" /></div>
            </div>

        </section>
    );
};

export default Partner;