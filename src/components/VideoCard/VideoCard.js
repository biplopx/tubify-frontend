import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// import { toast } from "react-toastify";

const VideoCard = ({ video, singleUser, fetchSingleUser }) => {
  const refmenu = useRef();
  const [cardSideMenu, setCardSideMenu] = useState(false);
  const [isPlaylistModal, setPlaylistModal] = useState(false);
  //   const [user, loading] = useAuthState(auth);
  //   const playlists = singleUser?.playlist;
  //   const userId = singleUser?._id;
  const { cover, name, _id, singer } = video;

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

  const toggleLike = () => {
    // if (singleUser?.likedSongs.find((song) => song._id === _id)) {
    //   fetch(`https://tubifybd.herokuapp.com/song/unlike`, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
    //     body: JSON.stringify({ id: _id, email: user?.email }),
    //   })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       fetchSingleUser();
    //     });
    // } else {
    //   fetch(`https://tubifybd.herokuapp.com/song/like`, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
    //     body: JSON.stringify({ id: _id, email: user?.email }),
    //   })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       fetchSingleUser();
    //     });
    // }
    console.log("Toggle Like");
  };

  const toggleSaveForLater = () => {
    // fetch(`https://tubifybd.herokuapp.com/song/save-for-later`, {
    //   method: 'PUT',
    //   headers: {
    //     'content-type': 'application/json',
    //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //   },
    //   body: JSON.stringify({ id: _id, email: user?.email })
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     console.log(result)
    //     fetchSingleUser()
    //   })
    // fetch(`https://tubifybd.herokuapp.com/playlists/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    //   body: JSON.stringify({ userId: userId, playlistName: "saveForLater" }),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result.message === "song already exist") {
    //       toast.error(`Song already exits on this save for later`);
    //     } else {
    //       toast.success(result.message);
    //     }
    //   });
    console.log("Toggle Save");
  };

  return (
    <div className="secondary-bg p-3 rounded-md relative hover:scale-[1.03] transition-all duration-500">
      {/* Card Image */}
      <Link to={`/dashboard/video/${_id}`} className="relative">
        <img
          src={cover}
          alt={name}
          className="rounded object-cover h-52 w-full"
        />
          <i className="ri-play-fill text-2xl w-10 h-10 rounded-full text-white bg-sky-500 absolute right-3 bottom-4 flex justify-center items-center cursor-pointer"></i>
      </Link>
      {/* Content */}
      <div className="ml-1 mt-4">
        <div>
          <Link to={`/dashboard/video/${_id}`} className="text-md font-semibold mb-1">{name.slice(0, 50)}</Link>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <Link to={`/dashboard/video/${_id}`} className="text-xs ml-2">{singer}</Link>
            <div
              className="relative"
              onClick={() => {
                setCardSideMenu(!cardSideMenu);
              }}
            >
              <button
                data-dropdown-toggle="dropdownDots"
                className="inline-flex items-center p-2 text-md font-medium text-center text-white primary-bg rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none"
                type="button"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Three dot menu */}
          {cardSideMenu && (
            <>
              <div
                ref={refmenu}
                className="z-10 w-50 border border-gray-600 secondary-bg rounded divide-y divide-gray-100 shadow absolute right-[-120px] bottom-[-0px]"
              >
                <ul className="py-1 text-white">
                  <li
                    onClick={() => setPlaylistModal(!isPlaylistModal)}
                    className="flex items-center py-2 px-4 text-sm  hover:bg-blue-900"
                  >
                    <i className="ri-play-list-add-line text-lg mr-2"></i> Add
                    to Playlist
                  </li>
                  <li
                    onClick={() => toggleSaveForLater()}
                    className="flex items-center py-2 px-4 text-sm hover:bg-blue-900"
                  >
                    <i className="ri-add-line text-lg mr-2"></i> Save For Later
                  </li>
                  <li
                    onClick={() => toggleLike()}
                    className="flex items-center py-2 px-4 text-sm hover:bg-blue-900"
                  >
                    <i
                      className={`${
                        singleUser?.likedSongs?.find((song) => song._id === _id)
                          ? "ri-heart-fill text-red-500"
                          : "ri-heart-line"
                      } text-lg mr-2`}
                    ></i>{" "}
                    {singleUser?.likedSongs.find((song) => song._id === _id)
                      ? "Liked"
                      : "Like"}
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
