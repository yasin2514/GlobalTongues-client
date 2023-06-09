import logo from '../../../assets/logo-1.png'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='bg-black text-gray-300 py-16 px-3'>
            <div className="lg:grid grid-cols-[1.3fr_3fr] items-center gap-20 ">
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between items-center'>
                        <img src={logo} alt="logo" className=' object-contain' />
                        <h2 className='text-2xl font-bold text-white'>Foreign Language Learning School </h2>

                    </div>
                    <p className='text-[1.2rem] text-gray-300'>"Global Tongues: Dhaka's language school for global communication. Learn foreign languages with expert instructors and expand your horizons."</p>

                </div>
                <div className='grid mt-6 lg:mt-0 lg:place-content-start grid-cols-2 lg:grid-cols-4 gap-10  '>
                    <div className='flex flex-col gap-1'>
                        <h4 className="text-White text-[1.4rem] font-medium">Company</h4>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Courses</a>
                        <a className="link link-hover">Best for Learn</a>
                        <a className="link link-hover">Word wide Service</a>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className="text-White text-[1.4rem] font-medium">Services</h4>
                        <a className="link link-hover">Premium Classes</a>
                        <a className="link link-hover">All Languages</a>
                        <a className="link link-hover">Fluent Skills</a>
                        <a className="link link-hover">Proper guide</a>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className="text-White text-[1.4rem] font-medium">Terms</h4>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className="text-White text-[1.4rem] font-medium">Contact</h4>
                        <a className="link link-hover">Dhaka,Bangladesh</a>
                        <a className="link link-hover">015-000-1111</a>

                        <span className='flex gap-4 mt-4 text-xl'>
                            <a className='bg-white rounded-full text-blue-500' href=""><FaFacebook className='text-xl '></FaFacebook></a>
                            <a className='text-blue-500' href=""><FaTwitter></FaTwitter></a>
                            <a className='bg-white  text-blue-500' href=""><FaLinkedin></FaLinkedin></a>
                            <a className='bg-white  text-red-500' href=""><FaInstagramSquare></FaInstagramSquare></a>
                        </span>

                    </div>
                </div>
            </div>
            <div className='text-center mt-10 '>
                <small>&copy; 2023 The<span className='text-orange-600'> Global Tongues</span>  All Rights Reserved</small>
                <br />
                <small>Develop By <span className='text-red-500'>Yasin Khan Rabbi</span></small>

            </div>
        </footer>
    );
};

export default Footer;