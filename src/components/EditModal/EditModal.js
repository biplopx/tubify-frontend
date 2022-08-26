import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const EditModal = ({ setShowModal, singleSong, refetch }) => {
  const { _id } = singleSong;
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: { ...singleSong },
  });

  useEffect(() => {
    // 
  }, [singleSong])

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/song/edit/${_id}`, {
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
          toast.success('Song successfully updated');
          refetch();
        }
        else {
          toast.error(result.error)
        }
      })
  }

  if (!singleSong.name) {
    return <Loading />
  }

  return (
    <>
      <div tabIndex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden absolute z-50 w-full md:inset-0 h-modal md:h-full">
        <div style={{ margin: "0 auto" }} className="relative p-4 top-1/4 w-full max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative secondary-bg rounded-lg shadow border border-gray-600">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start p-4 rounded-t border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">
                Edit Song
              </h3>
              <button onClick={() => { setShowModal(false) }} type="button" className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6 text-white">
              <form onSubmit={handleSubmit(onSubmit)} className='transparent'>
                {/* Song Name */}
                <div className='mb-4'>
                  <label className='block mb-4'>Song Name</label>
                  <input type="text"
                    {...register("name")}
                    className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
                    placeholder='Enter song name' />
                </div>
                {/* Singer Input */}
                <div className='mb-4'>
                  <label className='block mb-4'>Singer Name</label>
                  <input type="text"
                    {...register("singer")}
                    className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
                    placeholder='Enter song name' />
                </div>
                {/* Cover Image Input */}
                <div className='mb-4'>
                  <label className='block mb-4'>Cover Image</label>
                  <input type="url"
                    {...register("cover")}
                    className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
                    placeholder='Enter song name' />
                </div>
                {/* Music Source Input */}
                <div className='mb-4'>
                  <label className='block mb-4'>Music URL</label>
                  <input type="url"
                    {...register("musicSrc")}
                    className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
                    placeholder='Enter song name' />
                </div>
                {/* Lysrics Input */}
                <div className='mb-4'>
                  <label className='block mb-4'>Lyrics</label>
                  <textarea type="text" row="5"
                    {...register("lyrics")}
                    className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
                    placeholder='Enter song name'>
                  </textarea>
                </div>
                {/* Album Input */}
                <div className='mb-4'>
                  <label className='block mb-4'>Album Name</label>
                  <input type="text"
                    {...register("album")}
                    className='w-full bg-transparent px-3 py-2 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none 
              focus:border-sky-300 focus:ring-sky-300 block rounded-md sm:text-sm focus:ring-1'
                    placeholder='Enter album name' />
                </div>

                {/* Language Input */}
                <div className='mb-4'>
                  <label className='block mb-4'>Language</label>
                  <div className="flex">
                    <div className="mb-3 w-full">
                      <select {...register('lang')} className="form-select appearance-none
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
      focus:text-gray-300 focus:secondary-bg focus:border-blue-600 focus:outline-none" aria-label="Default select example">

                        <option value="Hindi">Hindi</option>
                        <option value="Bangla">Bangla</option>
                        <option value="English">English</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Music type Input */}
                <div className='mb-4'>
                  <label className='block mb-4'>Music Type</label>
                  <div className='flex gap-x-5'>
                    <div>
                      <input type="radio" value="free" name='musicType'
                        {...register("musicType")}
                      /> Free
                    </div>
                    <div>
                      <input type="radio" value="paid"
                        {...register("musicType")}
                      /> Paid
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <input className='bg-sky-500 text-white px-3 py-2 w-full rounded-md hover:bg-sky-600 transition duration-300' type="submit" value="Update Song" />
              </form>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-700">
              <button onClick={() => { setShowModal(false) }} data-modal-toggle="defaultModal" type="button" className="text-gray-500 w-full bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;