import React from 'react';
import ClickedMusic from '../components/MusicPlayer/ClickedMusic';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
const UsePlayer = ({ musics, clickedMusic, toggle }) => {
    return (
        <div>
            {!toggle && <MusicPlayer music={musics} ></MusicPlayer>}
            {toggle && <ClickedMusic clickedMusic={clickedMusic} ></ClickedMusic>}
        </div>
    );
};

export default UsePlayer;