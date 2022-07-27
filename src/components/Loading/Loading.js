import React from 'react';
import logingIMG from '../../../src/images/loading2.gif'

const Loading = () => {
  return (
    <div>
      <img src={logingIMG} className=' w-full h-1/5' alt="" />
    </div>
  );
};

export default Loading;