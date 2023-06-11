import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes');
        return res.data;
    })

    //  // make approved
    const handleApprove = course => {
        axios.patch(`http://localhost:5000/classes/approve/${course._id}`, { status: 'approve' })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${course?.className} is approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    //  // make deny
    const handleDeny = course => {
        axios.patch(`http://localhost:5000/classes/deny/${course._id}`, { status: 'deny' })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${course?.className} is deny`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="w-full">
            <div className="uppercase font-semibold mb-10 items-center text-3xl flex justify-evenly">
                <h3 >Total Classes: {classes?.length}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr className="text-[14px] text-blue-600">
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
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
                                <td>{course.instructorName}</td>
                                <td>{course.instructorEmail}</td>
                                <td >{course.availableSeats}</td>
                                <td >{course.price}</td>
                                <td >{course.status}</td>
                                <td className=" space-x-2">
                                    <button onClick={() => handleApprove(course)} className="btn btn-sm btn-outline btn-primary text-[10px]" disabled={(course.status === 'approve' ? true : false) || (course.status === 'deny' ? true : false)}>Approved</button>
                                    <button onClick={() => handleDeny(course)} className="btn btn-sm btn-outline btn-primary text-[10px]" disabled={(course.status === 'approve' ? true : false) || (course.status === 'deny' ? true : false)}>Deny</button>
                                    <button className="btn btn-sm btn-outline btn-primary text-[10px]">Feedback</button>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;