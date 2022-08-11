import React from 'react';

const MusicCard = ({ music, handlePlayMusic }) => {
  const { name, cover, singer } = music;

  return (
    <>
      <div className='secondary-bg p-3 rounded-md relative'>
        {/* Card Image */}
        <div className='mb-3 relative'>
          <img style={{ width: "100%", height: "200px" }} src={cover} alt={name} width="100%" height="200px" className='rounded' />
          <i onClick={() => handlePlayMusic(music)} className="ri-play-fill text-2xl w-10 h-10 rounded-full text-white bg-sky-500 absolute right-3 bottom-4 flex justify-center items-center"></i>
        </div>
        {/* Content */}
        <div>
          <div> <p className='text-md mb-3'>{name.slice(0, 10)}</p></div>
          <div>
            <div className='flex justify-between'>
              <p>{singer}</p>
              <div>
                <button data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-md font-medium text-center text-white primary-bg rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none" type="button">
                  <svg className="w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </button>
              </div>
            </div>
            {/* Three dot menu */}
            <div id="dropdownDots" className="hidden z-10 w-44 secondary-bg rounded divide-y divide-gray-100 shadow absolute right-[-100px] bottom-[-10px]">
              <ul className="py-1 text-sm text-white" aria-labelledby="dropdownMenuIconButton">
                <li className="block py-2 px-4 hover:bg-gray-300">
                  Settings
                </li>
                <li className="block py-2 px-4 hover:bg-gray-300">
                  Earnings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default MusicCard;