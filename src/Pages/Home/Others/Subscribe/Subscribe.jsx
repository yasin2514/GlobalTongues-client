import { useEffect } from "react";
import SectionTItle from "../../../../Components/sectionTitle/SectionTItle";
import AOS from 'aos';

const Subscribe = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="bg-[#FFFAF3] py-20">
            <SectionTItle heading="Subscribe to Our Newsletter" subHeading="GO AT YOUR OWN PACE">
            </SectionTItle>
            <p className="text-center mt-5" data-aos="zoom-in-down">Global Tongues: Dhaka's language school for global communication. Learn foreign languages <br /> with expert instructors and expand your horizons."</p>

            <div className="flex items-center w-11/12 md:w-1/2 mx-auto my-10" data-aos="fade-up">
                <input type="text" placeholder="Enter Your Email" className="input text-black input-bordered input-primary rounded-r-none w-full" />
                <button className="btn btn-primary rounded-l-none">Subscribe Now</button>
            </div>

        </div>
    );
};

export default Subscribe;