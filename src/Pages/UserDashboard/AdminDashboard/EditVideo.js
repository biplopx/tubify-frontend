import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Loading from '../../../components/Loading/Loading';
import { toast } from 'react-toastify';

const EditVideo = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const { register, handleSubmit, reset } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',

  });

  const { title } = video;

  //  loading single song
  useEffect(() => {
    fetch(`https://tubifybd.herokuapp.com/video/single-video/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setVideo(data)
        reset(data)
      })
  }, [id, reset])


  const onSubmit = (data) => {
    fetch(`https://tubifybd.herokuapp.com/video/edit/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.status === "successful") {
          toast.success('video successfully updated');
        }
        else {
          toast.error(result.error)
        }
      })
  }

  if (!video) {
    return <Loading />
  }
  return (
    <div>
      <div className="max-w-4xl w-full mx-auto my-5 secondary-bg px-4 py-6 rounded-md">
        <h2 className="text-2xl signika mb-4">Edit Video: {title}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="transparent">
          {/* Video Name */}
          <div className="mb-4">
            <label className="block mb-4">Video Title</label>
            <input
              type="text"
              {...register("title")}
              className="w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
            focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter Video Name"
              required
            />
          </div>
          {/* Lysrics Input */}
          <div className='mb-4'>
            <label className='block mb-4'>Description</label>
            <textarea type="text" row="5"
              {...register("description")}
              className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
            focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
              placeholder='enter video description please'>
            </textarea>
          </div>
          {/* thumbnail Image Input */}
          <div className='mb-4'>
            <label className='block mb-4'>Thumbnail URL</label>
            <input type="url"
              {...register("thumbnail")}
              className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
            focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
              placeholder='Enter song name' required />
          </div>

          {/* video Source Input */}
          <div className="mb-4">
            <label className="block mb-4">Video URL</label>
            <input
              type="url"
              {...register("videoSrc")}
              className="w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
            focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1"
              placeholder="Enter Video URL"
              required
            />
          </div>
          {/* Video Content Type Input */}
          <div className='mb-4'>
            <label className='block mb-4'>Content Type</label>
            <div className="flex">
              <div className="mb-3 w-full">
                <select {...register('contentType')} className="form-select appearance-none
    block
    secondary-bg
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-300
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-300 focus:secondary-bg focus:border-blue-600 focus:outline-none" aria-label="Default select example" defaultValue={'Hindi'}>

                  <option value="Movie">Movie</option>
                  <option value="Song">Song</option>
                  <option value="Drama">Drama</option>
                  <option value="TV Series">TV Series</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
          {/* Type Input */}
          <div className="mb-4">
            <label className="block mb-4">Video Type</label>
            <div className="flex gap-x-5">
              <div>
                <input
                  type="radio"
                  value="free"
                  {...register("videoType")}
                  required
                />{" "}
                Free
              </div>
              <div>
                <input
                  type="radio"
                  value="paid"
                  {...register("videoType")}
                  required
                />{" "}
                Paid
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <input
            className="bg-sky-500 text-white px-3 py-2 w-full rounded-md hover:bg-sky-600 transition duration-300"
            type="submit"
            value="Add Video"
          />
        </form>
      </div>
    </div>
  );
};

export default EditVideo;