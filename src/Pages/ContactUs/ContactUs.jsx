import { useEffect } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import {FaMailBulk,FaPhoneAlt,FaLocationArrow,FaFacebookF,FaTwitter  } from "react-icons/fa";
import AOS from 'aos';

const ContactUs = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <PageTitle title={'Contact Us'}></PageTitle>
            <div className="InstructorBanner text-center space-y-2 h-[50vh] flex flex-col items-center justify-center text-white" data-aos="flip-up">
                <h3 className="text-4xl md:text-5xl font-bold">Contact Us</h3>
                <p className="text-gray-100 ">Fill up the from to contact with us to get our support</p>
            </div>

            <div className="grid grid-cols-1 px-5 my-10 md:px-0 md:grid-cols-[2fr_1fr] md:m-20 gap-16">
                <form>
                    <div className="grid grid-cols-2 gap-5 ">
                        <div className="form-control w-full" data-aos="zoom-in">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full" data-aos="zoom-in">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full" data-aos="zoom-in">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder="Your Phone" className="input input-bordered w-full " />
                        </div>

                        <div className="form-control w-full" data-aos="zoom-in">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control mt-5 mb-10" data-aos="zoom-in">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Your Message"></textarea>
                    </div>

                    <div className="text" data-aos="flip-up">
                        <input type="submit" className="btn btn-primary" value="Send Message" />
                    </div>

                </form>
                {/* others section */}
                <div className="space-y-10">
                    <div data-aos="zoom-in">
                        <h5 className="text-2xl font-semibold mb-2">Before Contacting Us</h5>
                        <p>Writing content in your unique style just got easier. Try ContentShake to create, optimize, and publish engaging articles in an instant.</p>
                    </div>
                    <div className="space-y-1 mb-2" data-aos="zoom-in">
                        <h5 className="text-2xl font-semibold">Contact Information</h5>
                        <p className="flex items-center gap-2"><FaLocationArrow className="text-blue-600"></FaLocationArrow> Dhaka,Bangladesh</p>
                        <p className="flex items-center gap-2"><FaPhoneAlt className="text-blue-600"></FaPhoneAlt>+880 17744647257</p>
                        <p className="flex items-center gap-2"><FaMailBulk className="text-blue-600"></FaMailBulk> yasinkhanrabbi1999@gmail.com</p>
                    </div>
                    <div data-aos="flip-up">
                        <h5 className="text-2xl font-semibold">Social Media</h5>
                        <div className="space-x-5 mt-5">
                            <button className="btn btn-outline  btn-sm"> <FaTwitter className="text-xl"></FaTwitter> Twitter</button>
                            <button className="btn btn-outline  btn-sm"><FaFacebookF className="text-xl"></FaFacebookF> Facebook</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;