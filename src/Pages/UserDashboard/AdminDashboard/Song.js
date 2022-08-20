import React from 'react';
import swal from 'sweetalert';
import { toast } from 'react-toastify';

const Song = ({ song, index, refetch, setShowModal, editModal }) => {
  const { _id, name, album } = song;
  // Delete Song
  const deletSong = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this song?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willAdmin) => {
        if (willAdmin) {
          fetch(`http://localhost:5000/song/delete/${id}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
            .then(res => res.json())
            .then(result => {
              if (result.status === "successful") {
                toast.success('Song successfully Deleted', { autoClose: 2000 });
                refetch()
              }
              else {
                toast.error(result.error, { autoClose: 2000 })
              }
            })
        } else {
          swal("No");
        }
      });
  }
  return (
    <tr>
      <td className="px-6 py-4">
        {index + 1}
      </td>
      <td className="px-6 py-4">
        {name}
      </td>
      <td className="px-6 py-4 text-center">
        {album}
      </td>
      <td className="px-6 py-4 text-center">
        <div className='flex gap-4'>
          <button onClick={() => { editModal(_id) }} className='px-2 py-1 bg-sky-500 text-white text-xs rounded-sm'><i className="ri-edit-box-line text-xl"></i></button>
          <button onClick={() => { deletSong(_id) }} className='px-2 py-1 bg-red-500 text-white text-xs rounded-sm'><i className="ri-delete-bin-7-line text-xl"></i></button>
        </div>
      </td>
    </tr>
  );
};

export default Song;