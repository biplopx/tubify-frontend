import React from 'react';
import { useForm } from 'react-hook-form';

const AddMusic = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <div className='max-w-4xl w-full mx-auto secondary-bg px-4 py-5 rounded-md'>
        <h2 className='text-2xl signika mb-4'>Add Music</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='transparent'>
          {/* Song Name */}
          <div className='mb-4'>
            <label className='block mb-4'>Song Name</label>
            <input type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: 'Please enter song name'
                }
              })}
              className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
              placeholder='Enter song name' required />
            <label className="block mt-2">
              {errors.name?.type === 'required' && <span className="text-sm text-red-500">{errors.name.message}</span>}
            </label>
          </div>
          {/* Singer Input */}
          <div className='mb-4'>
            <label className='block mb-4'>Singer Name</label>
            <input type="text"
              {...register("singer", {
                required: {
                  value: true,
                  message: 'Please singer name'
                }
              })}
              className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
              placeholder='Enter song name' required />
            <label className="block mt-2">
              {errors.singer?.type === 'required' && <span className="text-sm text-red-500">{errors.singer.message}</span>}
            </label>
          </div>
          {/* Cover Image Input */}
          <div className='mb-4'>
            <label className='block mb-4'>Cover Image</label>
            <input type="url"
              {...register("cover", {
                required: {
                  value: true,
                  message: 'Please enter cover url'
                }
              })}
              className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
              placeholder='Enter song name' required />
            <label className="block mt-2">
              {errors.cover?.type === 'required' && <span className="text-sm text-red-500">{errors.cover.message}</span>}
            </label>
          </div>
          {/* Music Source Input */}
          <div className='mb-4'>
            <label className='block mb-4'>Music URL</label>
            <input type="url"
              {...register("musicSrc", {
                required: {
                  value: true,
                  message: 'Please enter music url'
                }
              })}
              className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
              placeholder='Enter song name' required />
            <label className="block mt-2">
              {errors.musicSrc?.type === 'required' && <span className="text-sm text-red-500">{errors.musicSrc.message}</span>}
            </label>
          </div>
          {/* Lysrics Input */}
          <div className='mb-4'>
            <label className='block mb-4'>Lyrics</label>
            <textarea type="text" row="5"
              {...register("lyrics")}
              className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
              placeholder='Enter song name' required>
            </textarea>
          </div>
          {/* Playlist Input */}
          <div className='mb-4'>
            <label className='block mb-4'>Playlist Name</label>
            <input type="text"
              {...register("playlist", {
                required: {
                  value: true,
                  message: 'Please enter music url'
                }
              })}
              className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
              placeholder='Enter song playlist name' required />
            <label className="block mt-2">
              {errors.playlist?.type === 'required' && <span className="text-sm text-red-500">{errors.playlist.message}</span>}
            </label>
          </div>

          {/* Music Type Input */}
          <div className='mb-4'>
            <label className='block mb-4'>Music Type</label>
            <div className='flex gap-x-5'>
              <div>
                <input type="radio" value="free"
                  {...register("musicType", {
                    required: {
                      value: true,
                      message: 'Please select music type'
                    }
                  })}
                  required /> Free
              </div>
              <div>
                <input type="radio" value="paid"
                  {...register("musicType", {
                    required: {
                      value: true,
                      message: 'Please Select music type'
                    }
                  })}
                  required /> Paid
              </div>
            </div>

            <label className="block mt-2">
              {errors.musicType?.type === 'required' && <span className="text-sm text-red-500">{errors.musicType.message}</span>}
            </label>
          </div>

          {/* Submit Button */}
          <input className='bg-sky-500 text-white px-3 py-2 w-full rounded-md hover:bg-sky-600 transition duration-300' type="submit" value="Add Song" />
        </form>
      </div>
    </div>
  );
};

export default AddMusic;