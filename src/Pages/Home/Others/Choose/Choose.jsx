import { Link } from "react-router-dom";
import SectionTItle from "../../../../Components/sectionTitle/SectionTItle";
import img from "../../../../assets/choose.png"
import {FaChalkboardTeacher,FaBusinessTime,FaBook,FaBoxes  } from "react-icons/fa";
const Choose = () => {
    return (
        <div className="grid md:grid-cols-2 items-center bg-blue-50 gap-20 px-20">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="">
                <SectionTItle heading="Amazing Courses to Learn Language Better" subHeading="WHY CHOOSE US">
                </SectionTItle>
                <p className="mt-10 text-xl">We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!</p>
                <div className="grid grid-cols-2 gap-2 mt-6 mb-10">
                    <span className="flex items-center gap-1"><FaChalkboardTeacher className="text-xl text-red-500"></FaChalkboardTeacher> Skilled Teachers</span>
                    <span className="flex items-center gap-1"><FaBook className="text-xl text-red-500"></FaBook> Affordable Courses</span>
                    <span className="flex items-center gap-1"><FaBoxes className="text-xl text-red-500"></FaBoxes> Efficient & Flexible</span>
                    <span className="flex items-center gap-1"><FaBusinessTime className="text-xl text-red-500"></FaBusinessTime> Lifetime Access</span>
                </div>
                <Link className="btn btn-primary">View All Courses</Link>
            </div>
        </div>
    );
};

export default Choose;