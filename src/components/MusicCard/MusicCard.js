import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import PlaylistModal from '../PlaylistModal/PlaylistModal';

const MusicCard = ({ music, handlePlayMusic, singleUser, fetchSingleUser }) => {
  const { _id, name, cover, singer } = music;
  const [cardSideMenu, setCardSideMenu] = useState(false);
  const [isPlaylistModal, setPlaylistModal] = useState(false);
  const refmenu = useRef();
  const [user, loading] = useAuthState(auth);
  const playlists = singleUser?.playlist;
  const userId = singleUser?._id;

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (cardSideMenu && refmenu.current && !refmenu.current.contains(e.target)) {
        setCardSideMenu(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [cardSideMenu])

  if (loading) {
    return <Loading />
  }

  const toggleLike = () => {
    if (singleUser?.likedSongs.find(song => song._id === _id)) {
      fetch(`http://localhost:5000/song/unlike`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ id: _id, email: user?.email })
      })
        .then(res => res.json())
        .then(result => {
          fetchSingleUser()
        })
    }
    else {
      fetch(`http://localhost:5000/song/like`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ id: _id, email: user?.email })
      })
        .then(res => res.json())
        .then(result => {
          fetchSingleUser()
        })
    }


  }

  const toggleSaveForLater = () => {
    fetch(`http://localhost:5000/song/save-for-later`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ id: _id, email: user?.email })
    })
      .then(res => res.json())
      .then(result => {
        fetchSingleUser()
      })
  }

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
            <div className='flex justify-between items-center'>
              <p className='text-sm'>{singer}</p>
              <div className='relative' onClick={() => { setCardSideMenu(!cardSideMenu) }}>
                <button data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-md font-medium text-center text-white primary-bg rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none" type="button">
                  <svg className="w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </button>
              </div>
            </div>
            {/* Three dot menu */}
            {
              cardSideMenu && <>
                <div ref={refmenu} className="z-10 w-50 border border-gray-600 secondary-bg rounded divide-y divide-gray-100 shadow absolute right-[-120px] bottom-[-0px]">
                  <ul className="py-1 text-white">
                    <li onClick={() => setPlaylistModal(!isPlaylistModal)} className="flex items-center py-2 px-4 text-sm  hover:bg-blue-900">
                      <i className="ri-play-list-add-line text-lg mr-2"></i> Add to Playlist
                    </li>
                    <li onClick={() => toggleSaveForLater()} className="flex items-center py-2 px-4 text-sm hover:bg-blue-900">
                      <i className="ri-add-line text-lg mr-2"></i>  Save For Later
                    </li>
                    <li onClick={() => toggleLike()} className="flex items-center py-2 px-4 text-sm hover:bg-blue-900">
                      <i className={`${singleUser?.likedSongs?.find(song => song._id === _id) ? 'ri-heart-fill text-red-500' : "ri-heart-line"} text-lg mr-2`}></i> {singleUser?.likedSongs.find(song => song._id === _id) ? 'Liked' : 'Like'}
                    </li>
                  </ul>
                </div>
              </>
            }
          </div>
        </div>
      </div>
      {
        isPlaylistModal && <PlaylistModal isPlaylistModal={isPlaylistModal} setPlaylistModal={setPlaylistModal} songId={_id} playlists={playlists}
          userId={userId} />
      }
    </>

  );
};

export default MusicCard;