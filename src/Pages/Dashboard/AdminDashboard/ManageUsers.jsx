import Swal from "sweetalert2";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import useUsers from "../../../Hooks/useUsers";

const ManageUsers = () => {
    const [users,refetch] = useUsers();
   
    // make admin
    const handleMakeAdmin = user => {
        axios.patch(`http://localhost:5000/users/admin/${user._id}`, { role: 'admin' })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${user?.name} is Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // make admin
    const handleMakeInstructor = user => {
        axios.patch(`http://localhost:5000/users/instructor/${user._id}`, { role: 'instructor' })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${user?.name} is Instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // delete user
    const handleDeleteUser = user => {
        console.log(user._id);
        Swal.fire({
            title: `Are you sure to delete this user? ${user.name}`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/users/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire(
                                'User is Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div className="w-full">
            <div className="uppercase font-semibold h-[60px] items-center text-3xl flex justify-evenly">
                <h3 >Total Users: {users.length}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => (
                            <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photo} alt="userImage" />
                                        </div>
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td >{user.role}</td>
                                <td className="space-x-2 text-sm">
                                    <button onClick={() => handleMakeAdmin(user)} disabled={(user.role === 'admin' ? true : false) || (user.role === 'superAdmin' ? true : false)} className="btn btn-sm btn-outline btn-primary">Make Admin</button>

                                    <button onClick={() => handleMakeInstructor(user)} disabled={(user.role === 'instructor' ? true : false) || (user.role === 'admin' ? true : false) || (user.role === 'superAdmin' ? true : false)} className="btn btn-sm btn-outline btn-primary">Make Instructor</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} disabled={user.role ==='superAdmin' ? true : false} className="btn btn-ghost bg-red-600 text-white text-xl"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;