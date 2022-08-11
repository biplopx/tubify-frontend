import React from 'react';
import swal from 'sweetalert';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, fetchUsers }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    swal({
      title: "Are you sure?",
      text: "You want to make this user admin?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willAdmin) => {
        if (willAdmin) {
          fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
          })
            .then(res => {
              if (res.status === 403) {
                toast.error('Failed to make an admin');
              }
              return res.json()
            })
            .then(data => {
              if (data.modifiedCount > 0) {
                fetchUsers()
                toast.success('Successfully made an admin')
              }
            })
          swal("User Successfully Admin", {
            icon: "success",
          });
        } else {
          swal("No");
        }
      });
  }


  const removeAdmin = () => {
    swal({
      title: "Are you sure?",
      text: "You want to remove this user from admin?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willAdmin) => {
        if (willAdmin) {
          fetch(`http://localhost:5000/user/admin/remove/${email}`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              // if (result.status === "successful") {
              //   toast.success("user successfully remove from admin role")
              // }
              // else {
              //   toast.error("Failed to remove admin")
              // }
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
        <td className="px-6 py-4 text-center">
          {email}
        </td>
        <td className="px-6 py-4 text-center">
          {role === "admin" ? "Admin" : "User"}
        </td>
        <td className="px-6 py-4 text-center">
          {role === "admin" ? <button onClick={removeAdmin} className='p-1 bg-red-500 text-white text-xs rounded-sm'>Remove Admin</button> : <button onClick={makeAdmin} className='p-1 bg-sky-500 text-white text-xs rounded-sm'>Make Admin</button>}
        </td>
      </tr>
    </>
  );
};

export default UserRow;