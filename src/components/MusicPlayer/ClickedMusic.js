import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
const ClickedMusic = (props) => {
    const music = props.clickedMusic;
    const audioList = [
        {
            name: music?.name,
            singer: music?.singer,
            cover: music?.cover,
            musicSrc: music?.musicSrc,
            lyric: music?.lyrics
        }
    ]
    const options = {
        audioLists: audioList,
        mode: 'full',
        responsive: true,
        autoPlay: true,
        playIndex: 0,
        showLyric: true,
        showPlay: true,
        glassBg: true,
        showProgressLoadBar: true,
        clearPriorAudioLists: true,
        quietUpdate: true
    }
    return <ReactJkMusicPlayer {...options} />
};

export default ClickedMusic;