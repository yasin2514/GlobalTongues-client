import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import useStudent from "../../Hooks/useStudent";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
const ClassCart = ({ course }) => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    const { className, price, instructorName, image, availableSeats } = course;
    const navigate = useNavigate();
    const handleClick = course => {
        if (!isStudent) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You new to login to add class!',
            })
            navigate('/login')
        }
        const saveClass = {
            courseId: course._id,
            email: user?.email,
            className: course.className,
            price: course.price,
            instructorName: course.instructorName,
            image: course.image
        }

        if (isStudent) {
            axios.post(`https://global-tongues-server.vercel.app/student/myClasses`, saveClass)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Class booked Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    }
    return (

       
            <div className={`shadow-2xl w-full overflow-hidden flex flex-col hover:!scale-110 duration-200 rounded-lg relative ${availableSeats == 0 ? "bg-red-500 text-white" : ""}`} data-aos="flip-right" >
                <img src={image} alt="" className="w-full h-48 object-cover" />
                <div className="mt-5 px-6 pb-6">
                    <h4 className="font-bold text-xl">{className}</h4>
                    <p>Instructor: {instructorName}</p>
                    <p>Available Seats: <span className="font-bold">{availableSeats}</span></p>
                    <p className="absolute top-5 bg-red-600 text-white px-2 py-1 rounded-lg text-sm right-5">Price: <span>${price}</span></p>
                </div>
                <div className="text-end mt-auto mb-6 mr-6">
                    <button onClick={() => handleClick(course)} disabled={(isAdmin ? true : false) || (isInstructor ? true : false) || (availableSeats == 0 ? true : false)} className={`${availableSeats == 0 ? " btn-outline btn-sm btn text-white" : "btn btn-sm btn-primary btn-outline"}`}>Add class</button>
                </div>
            </div>
    );
};

export default ClassCart;