import SectionTItle from "../../../../Components/sectionTitle/SectionTItle";
import { FaDiscourse,FaLuggageCart,FaMoneyCheckAlt,FaUserPlus } from "react-icons/fa";
import img from "../../../../assets/apply.png"
const Apply = () => {
    return (
        <div className="grid md:grid-cols-2 gap-20 px-20">
            <div>
                <SectionTItle heading="How to Apply?" subHeading="INFORMATION">
                </SectionTItle>
                <div className="mt-10 space-y-10">
                    {/* option */}
                    <div className="flex items-center gap-7">
                        <div className="bg-[#EC615B] p-5 rounded-full">
                            <FaDiscourse className="text-5xl text-white"></FaDiscourse>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Select Suitable Course</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                    {/* option */}
                    <div className="flex items-center gap-7">
                        <div className="bg-[#EC615B] p-5 rounded-full">
                            <FaLuggageCart className="text-5xl text-white"></FaLuggageCart>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Student Information</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                    {/* option */}
                    <div className="flex items-center gap-7">
                        <div className="bg-[#EC615B] p-5 rounded-full">
                            <FaMoneyCheckAlt className="text-5xl text-white"></FaMoneyCheckAlt>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Payment Information</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                    {/* option */}
                    <div className="flex items-center gap-7">
                        <div className="bg-[#EC615B] p-5 rounded-full">
                            <FaUserPlus className="text-5xl text-white"></FaUserPlus>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Register Now</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <img src={img} alt="" />
            </div>

        </div>
    );
};

export default Apply;