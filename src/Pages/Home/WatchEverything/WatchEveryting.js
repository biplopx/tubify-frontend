import React from 'react';
import style from './WatchEverything.module.css';
const movies = 'https://i.ibb.co/Fm9TsVh/movie-icon.png'
const music = 'https://i.ibb.co/kczL7tL/listen.png'
const video = 'https://i.ibb.co/qRmXBxc/video-song-icon.png'
const drama = 'https://i.ibb.co/C1JWNxq/dramas-icon.png'
const tvSeries = 'https://i.ibb.co/3yw7nyV/tv-series-icon.png'
const WatchEverything = () => {
    return (
        <section className='py-16'>
            <h3 className="text-center my-5 signika text-[40px]">Watch Everything</h3>
            <div className=' w-[90%] lg:w-[70%] grid grid-cols-2  gap-y-10 md:grid-cols-3 lg:grid-cols-5 items-center mx-auto px-5 my-10'>
                <div className={style.iconBox}>
                    <img src={movies} alt="" />
                    <h4 className='signika mt-2 text-[10px]'>Movies</h4>
                </div>
                <div className={style.iconBox}>
                    <img src={music} alt="" />
                    <h4 className='signika mt-2 text-[10px]'>Music</h4>
                </div>
                <div className={style.iconBox}>
                    <img src={video} alt="" />
                    <h4 className='signika mt-2 text-[10px]'>Video Song</h4>
                </div>
                <div className={style.iconBox}>
                    <img src={drama} alt="" />
                    <h4 className='signika mt-2 text-[10px]'>Dramas</h4>
                </div>
                <div className={style.iconBox}>
                    <img src={tvSeries} alt="" />
                    <h4 className='signika mt-2 text-[10px]'>Tv series</h4>
                </div>
            </div>
        </section>
    );
};

export default WatchEverything;