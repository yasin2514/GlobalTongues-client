import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import useCart from "../../../Hooks/useCart";
import { Link } from "react-router-dom";

const MyClasses = () => {
    const [classes, refetch] = useCart();
    // delete class
    const handleDeleteClass = course => {
        Swal.fire({
            title: `Are you sure to delete this  ${course.className} class?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/student/myClasses/${course._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire(
                                'Class is Deleted!',
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
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr className="text-[14px] text-blue-600">
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Make Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes?.map((course, index) => (
                            <tr
                                key={course._id}
                            >
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={course.image} alt="userImage" />
                                        </div>
                                    </div>
                                </td>
                                <td>{course.className}</td>
                                <td >{course.instructorName}</td>
                                <td >${course.price}</td>
                                <td >{course?.status || 'Not enrolled'}</td>
                                <td >
                                    {course.status=='Enrolled'?
                                    <button className="btn btn-sm btn-primary btn-outline" disabled>Paid</button>
                                    :
                                    <Link to={`/dashboard/payment/${course._id}`} className="btn btn-sm btn-primary btn-outline">pay</Link>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteClass(course)} className="btn btn-ghost bg-red-600 text-white text-xl"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyClasses;