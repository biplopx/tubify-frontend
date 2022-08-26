import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = () => {
    fetch(`http://localhost:5000/user/all-users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }

  useEffect(() => {
    fetchUsers()
  }, []);
  return (
    <div>
      <h1 className='text-2xl signika mb-5'>All Users List</h1>
      <div className='w-full'>
        <div className='overflow-x-auto w-full'>
          <table className='mx-auto max-w-5xl w-full whitespace-nowrap rounded-lg bg-glass overflow-hidden'>
            <thead className="bg-gray-900">
              <tr className="text-white text-left">
                <th className="font-semibold text-sm uppercase px-6 py-4"> Index </th>
                <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> Email </th>
                <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> Role </th>
                <th className="font-semibold text-sm uppercase px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {
                users.map((user, index) => <UserRow key={user._id} user={user} index={index} fetchUsers={fetchUsers}></UserRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;