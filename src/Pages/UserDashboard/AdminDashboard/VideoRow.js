import React from 'react';
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { toast } from 'react-toastify';
const VideoRow = ({ index, video, refetch }) => {
  const { _id, title, contentType } = video;

  // Delete video
  const deleteVideo = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this song?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willAdmin) => {
        if (willAdmin) {
          fetch(`https://tubifybd.herokuapp.com/video/delete/${id}`, {
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
    <>
      <tr>
        <td className="px-6 py-4">
          {index + 1}
        </td>
        <td className="px-6 py-4">
          {title.slice(0, 30) + '...'}
        </td>
        <td className="px-6 py-4 text-center">
          {contentType}
        </td>
        <td className="px-6 py-4 text-center">
          <div className='flex gap-4'>
            <button className='px-2 py-1 bg-sky-500 text-white text-xs rounded-sm'>
              <Link to={`/dashboard/edit-video/${_id}`}><i className="ri-edit-box-line text-xl"></i></Link>
            </button>
            <button onClick={() => deleteVideo(_id)} className='px-2 py-1 bg-red-500 text-white text-xs rounded-sm'><i className="ri-delete-bin-7-line text-xl"></i></button>
          </div>
        </td>
      </tr>
    </>

  );
};

export default VideoRow;