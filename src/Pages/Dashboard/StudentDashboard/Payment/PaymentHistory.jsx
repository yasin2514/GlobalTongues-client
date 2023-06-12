import moment from "moment/moment";
import useEnrolledClass from "../../../../Hooks/useEnrolledClass";

const PaymentHistory = () => {
    const [classes] = useEnrolledClass()
    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* head */}
                    <thead>
                        <tr className="text-[14px] text-blue-600">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>transactionId</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes?.map((course, index) => (
                            <tr
                                key={course._id}
                            >
                                <th>{index + 1}</th>
                                <td>{course.className}</td>
                                <td >{course.instructorName}</td>
                                <td >{course.transactionId}</td>
                                <td >{moment(course.date).format('YYYY-MM-DD HH:mm:ss')}</td>
                                <td >${course.price}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default PaymentHistory;