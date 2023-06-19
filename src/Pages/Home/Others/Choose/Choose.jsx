import { Link } from "react-router-dom";
import SectionTItle from "../../../../Components/sectionTitle/SectionTItle";
import img from "../../../../assets/choose.png"
import { FaChalkboardTeacher, FaBusinessTime, FaBook, FaBoxes } from "react-icons/fa";
import { useEffect } from "react";
import AOS from 'aos';

const Choose = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="grid md:grid-cols-2 items-center bg-red-50 gap-20 px-5 md:px-20">
            <div data-aos="zoom-in-down" >
                <img src={img} alt="" />
            </div>
            <div >
                <SectionTItle heading="Amazing Courses to Learn Language Better" subHeading="WHY CHOOSE US">
                </SectionTItle>
                <div  className="py-10 md:py-0">
                    <p className="mt-10 text-xl" data-aos="zoom-in-down" >We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!</p>
                    <div className="grid grid-cols-2 gap-2 mt-6 mb-10">
                        <span className="flex items-center gap-1" data-aos="fade-right" ><FaChalkboardTeacher className="text-xl text-red-500"></FaChalkboardTeacher> Skilled Teachers</span>
                        <span className="flex items-center gap-1" data-aos="fade-left" ><FaBook className="text-xl text-red-500"></FaBook> Affordable Courses</span>
                        <span className="flex items-center gap-1" data-aos="fade-right" ><FaBoxes className="text-xl text-red-500"></FaBoxes> Efficient & Flexible</span>
                        <span className="flex items-center gap-1" data-aos="fade-left" ><FaBusinessTime className="text-xl text-red-500"></FaBusinessTime> Lifetime Access</span>
                    </div>
                    <Link to={"/allClasses"} className="btn btn-primary" data-aos="fade-up" >View All Courses</Link>
                </div>
            </div>
        </div>
    );
};

export default Choose;