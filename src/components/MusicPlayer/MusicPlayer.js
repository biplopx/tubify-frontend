import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
const MusicPlayer = (props) => {
    const music = props.music
    const options = {
        audioLists: [
            {
                name: music?.name,
                singer: music?.singer,
                cover: music?.musicCover,
                musicSrc: music?.musicSrc
            }
        ],

        mode: 'full',
        responsive: true,
        autoPlay: false,

    }
    return <ReactJkMusicPlayer {...options} />

};

export default MusicPlayer;