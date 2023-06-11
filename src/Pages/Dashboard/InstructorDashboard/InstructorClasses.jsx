import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const InstructorClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['email'], async () => {
        const res = await axiosSecure.get(`/classes/myClasses/${user?.email}`)
        return res.data;
    })
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
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Total Enrolled</th>
                            <th>Feedback</th>
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
                                <td >{course.availableSeats}</td>
                                <td >{course.price}</td>
                                <td >{course.status}</td>
                                <td >{course.totalEnrolled}</td>
                                <td className="w-2/12">{course.status == 'deny' ? course.feedback.feedback : "no feedback"}</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-primary">Update</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default InstructorClasses;