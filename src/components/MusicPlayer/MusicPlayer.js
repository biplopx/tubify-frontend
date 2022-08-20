import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
const MusicPlayer = (props) => {
    let audioList = []
    // eslint-disable-next-line array-callback-return
    props.music?.map(music => {
        audioList.push({
            name: music?.name,
            singer: music?.singer,
            cover: music?.cover,
            musicSrc: music?.musicSrc,
            lyric: music?.lyrics

        })
    })
    const options = {
        audioLists: audioList,
        mode: 'full',
        responsive: true,
        autoPlay: false,
        playIndex: 0,
        showLyric: true,
        showPlay: true,
        glassBg: true,
        showProgressLoadBar: true,


    }
    return <ReactJkMusicPlayer {...options} />

};

export default MusicPlayer;