import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import musicCover from '../../audio/cover.png'
import audio from '../../audio/Avash___Avash___Official_Video.mp3'
const Explore = () => {
  const options = {
    audioLists: [
      {
        name: 'Bedtime Stories',
        singer: 'Jay Chou',
        cover: musicCover,
        musicSrc: audio
      },
      {
        name: 'Bedtime Stories',
        singer: 'Jay Chou',
        cover:
          'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
        musicSrc:
          'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
      },

    ]

  }
  return <ReactJkMusicPlayer {...options} />

};

export default Explore;