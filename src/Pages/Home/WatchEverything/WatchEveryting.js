import React from 'react';
import style from'./WatchEverything.module.css';
const movies ='https://i.ibb.co/Fm9TsVh/movie-icon.png'
const WatchEverything = () => {
    return (
        <div>
            <h3 className="text-center my-5 signika text-[40px]">Watch Everything</h3>
            <div className='md:w-[70%] flex sm:flex-row  justify-between mx-auto px-5 my-10'>
                <div className={style.iconBox}>
                    <img src={movies} alt="" />
                    <h4 className='signika mt-2 text-[10px]'>Movies</h4>
                </div>
                <div className={style.iconBox}>
                    <img src={movies} alt="" />
                    <h4 className='signika mt-2 text-[10px]'>Movies</h4>
                </div>
                <div className={style.iconBox}>
                    <img src={movies} alt="" />
                    <h4 className='signika mt-2 text-[10px]'>Movies</h4>
                </div>
                <div className={style.iconBox}>
                    <img src={movies} alt="" />
                    <h4 className='signika mt-2 text-[10px]'>Movies</h4>
                </div>
                <div className={style.iconBox}>
                    <img src={movies} alt="" />
                    <h4 className='signika mt-2 text-[10px]'>Movies</h4>
                </div>
            </div>
        </div>
    );
};

export default WatchEverything;