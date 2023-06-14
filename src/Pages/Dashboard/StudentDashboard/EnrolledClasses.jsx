import PageTitle from "../../../Components/PageTitle/PageTitle";
import useEnrolledClass from "../../../Hooks/useEnrolledClass";
const EnrolledClasses = () => {
    const [classes] = useEnrolledClass();
    return (
        <div className="w-full">
             <PageTitle title="Enrolled Class" />
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
                                <td >{course?.status}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default EnrolledClasses;