import React from 'react';

const AllUsers = () => {
  return (
    <div className='text-gray-500'>
      <h1 className='text-2xl signika mb-5'>All Users List</h1>
      <div className='w-full'>
        <div className='overflow-x-auto w-full'>
          <table className='mx-auto max-w-5xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
            <thead className="bg-gray-900">
              <tr className="text-white text-left">
                <th className="font-semibold text-sm uppercase px-6 py-4"> Index </th>
                <th className="font-semibold text-sm uppercase px-6 py-4"> Name </th>
                <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> Email </th>
                <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> Role </th>
                <th className="font-semibold text-sm uppercase px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">
                  <p className="text-gray-500 text-sm font-semibold tracking-wide">Index</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-500 text-sm font-semibold tracking-wide"> Biplop </p>
                </td>
                <td className="px-6 py-4 text-center">
                  <p className="text-gray-500 text-sm font-semibold tracking-wide"> jahdi </p>
                </td>
                <td className="px-6 py-4 text-center">
                  <p className="text-gray-500 text-sm font-semibold tracking-wide"> Admin </p>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className='p-1 bg-sky-500 text-white text-xs rounded-sm'>Make Admin</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;