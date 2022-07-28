import React from 'react';
import logingIMG from '../../../src/images/loading2.gif'

const Loading = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center ">
        <div className="w-16 h-16 border-b-2 border-primary rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;