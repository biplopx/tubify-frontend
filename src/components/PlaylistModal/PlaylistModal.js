import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const PlaylistModal = ({ setPlaylistModal, playlists, songId, userId }) => {

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const onSubmit = (data) => {
    const playlistName = data.playlistName;
    fetch(`https://tubifybd.herokuapp.com/playlists/${songId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ userId: userId, playlistName: playlistName }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === "song already exist") {
          toast.error(`Song already exits on this playlist`)
        }
        else {
          toast.success(result.message)
        }
      })
  }

  return (
    <>
      <div tabIndex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden absolute z-50 w-full md:inset-0 h-modal md:h-full">
        <div style={{ margin: "0 auto" }} className="relative p-4 top-1/4 w-full max-w-sm	 h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative secondary-bg rounded-lg shadow border border-gray-600">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start p-4 rounded-t border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">
                Add to playlist
              </h3>
              <button onClick={() => { setPlaylistModal(false) }} type="button" className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6 text-white">
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="text"
                    {...register("playlistName", {
                      required: {
                        value: true,
                        message: 'Enter exit playlist name or new name'
                      }
                    })}
                    className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
                    placeholder='Enter playlist name' required />
                  <label className="block mt-2">
                    {errors.playlistName?.type === 'required' && <span className="text-sm text-red-500">{errors.playlistName.message}</span>}
                  </label>
                  <input className='bg-sky-500 text-white text-sm px-2 py-2 w-full rounded-md hover:bg-sky-600 transition duration-300' type="submit" value="Add song to palylist" />
                </form>
              </div>
              <div>
                <h3 className='text-md mb-3 font-bold'>Your Playlists</h3>
                {
                  playlists?.length > 0 ? <>
                    <ul className="w-full text-sm font-medium text-white rounded-lg border border-gray-700 overflow-hidden">
                      {
                        playlists.map((playlist, index) => <li key={index} className="py-2 px-4 w-full border-b border-gray-700 hover:bg-sky-500 transition duration-300">{playlist.name}</li>)
                      }
                    </ul> </>
                    : <>
                      <p>No Playlist</p>
                    </>
                }

              </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-700">
              <button onClick={() => { setPlaylistModal(false) }} data-modal-toggle="defaultModal" type="button" className='bg-sky-500 text-white text-sm px-2 py-2 w-full rounded-md hover:bg-sky-600 transition duration-300'>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaylistModal;