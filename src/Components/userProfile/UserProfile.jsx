import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useAdmin from "../../Hooks/useAdmin";
import useStudent from "../../Hooks/useStudent";
import useInstructor from "../../Hooks/useInstructor";
import { motion } from "framer-motion"
import { useEffect } from "react";
import AOS from 'aos';


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin()
    const [isStudent] = useStudent()
    const [isInstructor] = useInstructor()

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className=" text-center" data-aos="zoom-in">
                <h3 className="text-4xl font-bold">Welcome <span className="text-orange-600">{user.displayName}</span></h3>
            </div>
            <div className="flex flex-col items-center mt-10" data-aos="zoom-in">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                <div className="avatar online">
                    <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} />
                    </div>
                </div>
                </motion.button>
                <div className="text-center mt-10">
                    {isAdmin && <h2 className="text-5xl font-bold">Admin</h2>}
                    {isStudent && <h2 className="text-5xl font-bold">Student</h2>}
                    {isInstructor && <h2 className="text-5xl font-bold">Instructor</h2>}
                    <p className=" text-xl mt-4 font-bold">Email: {user.email}</p>
                    <p className="px-10"><span className="text-xl text-orange-600">{user.displayName}</span> have curious mind yearning for knowledge and boundless creativity. Embracing challenges, seeking growth, and embracing every moment's beauty. Avid traveler, soaking in diverse cultures, unraveling stories of faraway lands. Inspiring others to dream big, while savoring the small joys of life. Embracing the world's tapestry, one adventure at a time.</p>

                    <p className="text-green-600 italic mt-16">---Manage your dashboard & stay connected with Us---</p>
                    <p className=" text-orange-600">Team </p>
                    <p className="text-3xl font-bold text-blue-600">Global Tongues</p>
                </div>
            </div>

        </ >
    );
};

export default UserProfile;