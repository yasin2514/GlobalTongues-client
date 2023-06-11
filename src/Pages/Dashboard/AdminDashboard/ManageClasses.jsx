import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useRef } from "react";

const ManageClasses = () => {
    const [modalData, setModalData] = useState();
    const feedbackRef = useRef();
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes');
        return res.data;
    })

    //  // make approved
    const handleApprove = course => {
        axios.patch(`http://localhost:5000/classes/approve/${course._id}`, { status: 'approve' })
            .then(res => {
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

    const handleModal = id => {
        const findCourse = classes.find(course => course._id == id);
        setModalData(findCourse)
    }
    const handleFeedback = (id) => {
        const feedback = feedbackRef.current.value;
        axios.patch(`http://localhost:5000/classes/${id}`, { feedback })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: "Feedback Submitted",
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

                                    <button className="btn btn-sm btn-outline btn-primary text-[10px]" onClick={() => {
                                        window.my_modal_1.showModal()
                                        handleModal(course._id)
                                    }}>Feedback</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                {/* Modal box */}
                <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box ">
                        <h3 className="font-bold text-lg ">Why <span className="text-blue-600">{modalData?.status}</span> {modalData?.className} ?</h3>
                        <div className="form-control mb-5 mt-2">
                            <textarea className="textarea textarea-primary" required ref={feedbackRef} placeholder="Write here your feedback" ></textarea>
                        </div>
                        <div className="modal-action">
                            <button onClick={() => handleFeedback(modalData._id)} className="btn btn-sm">Submit</button>
                        </div>
                    </form>
                </dialog>

            </div>
        </div>
    );
};

export default ManageClasses;