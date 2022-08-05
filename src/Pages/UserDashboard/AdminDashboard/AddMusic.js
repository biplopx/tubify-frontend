import React from 'react';

const AddMusic = () => {
  return (
    <div>
      <div className='max-w-5xl w-full mx-auto secondary-bg px-4 py-5 rounded-md'>
        <h2 className='text-2xl signika'>Add Music</h2>
        <div class="max-w-sm mx-auto bg-white shadow py-5 px-6">
          <form>
            <div>
              <label for="username" class="block text-sm font-medium text-slate-700">Username</label>
              <div class="mt-1">
                <input type="text" name="username" id="username" class="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" value="tbone" disabled="" />
              </div>
            </div>
            <div class="mt-6">
              <label for="email" class="block text-sm font-medium text-slate-700">Email</label>
              <div class="mt-1">
                <input type="email" name="email" id="email" class="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" value="george@krugerindustrial." placeholder="you@example.com" />
              </div>
            </div>
            <div class="mt-6">
              <label for="password" class="block text-sm font-medium text-slate-700">Password</label>
              <div class="mt-1">
                <input type="password" name="password" id="password" class="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" value="Bosco" />
              </div>
            </div>
            <div class="mt-6 text-right">
              <button class="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMusic;