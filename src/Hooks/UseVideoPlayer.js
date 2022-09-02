import React from 'react';
import ReactPlayer from 'react-player'
const UseVideoPlayer = ({link}) => {


    
    return (
        <div>
          <ReactPlayer className='react-player'
            url={link}
          controls={true}
           />
        </div>
    );
};

export default UseVideoPlayer;