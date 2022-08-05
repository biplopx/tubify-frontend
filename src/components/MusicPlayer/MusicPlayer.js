import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
const MusicPlayer = (props) => {
    const music = props.music[0]
    console.log(music.musicSrc); 
   const options  = {
        audioLists: [
            {
                name: music?.name,
                singer: music?.singer,
                cover: music?.musicCover,
                musicSrc: 'https://23.filelu.com/d/x53akelnjrojnjtancmyo4hftyxt225lwxt2zkfycuap6lywde4pnbj23gphgcsutiyjewy2/_Abhi_Toh_Party_Shuru_Hui_Hai__FULL_VIDEO_Song___Khoobsurat___Badshah___Aast.mp3'
             },
            
        ],

        mode: 'full',
        responsive: true,
        autoPlay: false,

    }
    return <ReactJkMusicPlayer {...options} />

};

export default MusicPlayer;