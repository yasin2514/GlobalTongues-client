import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo-3.png'
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from 'react';
import useAdmin from '../../../Hooks/useAdmin';
import useInstructor from '../../../Hooks/useInstructor';
import useStudent from '../../../Hooks/useStudent';



const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");


    const handleTheme = e => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }

    }


    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);

    }, [theme])

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Logout Successfully',
                })
            })
            .catch(() => {
            })
    }


    const menu = <>
        <li className='hover:text-orange-600'><NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Home</NavLink></li>
        <li className='hover:text-orange-600'><NavLink to={'/allInstructor'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Instructors</NavLink></li>
        <li className='hover:text-orange-600'><NavLink to={'/allClasses'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Classes</NavLink></li>
        {
            user && <>
                <li className='hover:text-orange-600'><NavLink to={isAdmin && '/dashboard/admin' || isInstructor && '/dashboard/instructor' || isStudent && '/dashboard/student'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Dashboard </NavLink></li>
            </>

        }

    </>

    return (
        <div className="z-20 py-6 navbar sticky top-0 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-compact dropdown-content mt-3 p-6 shadow bg-black rounded-box w-60">
                        {menu}
                        <span className='flex items-center mt-2 justify-center'>
                            <label className="swap swap-rotate mr-2 ">

                                <input type="checkbox" onChange={handleTheme} />
                                {/* sun icon */}
                                <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                {/* moon icon */}
                                <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                            <h2 className='text-xl  font-bold '>Global Tongues</h2>
                        </span>

                    </ul>
                </div>
                <div className='flex'>
                    <img src={logo} alt="logo" className='w-20 ' />
                    <h2 className='text-2xl md:text-4xl font-bold hidden md:block'>Global Tongues</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-14  menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="swap swap-rotate mr-3 md:flex   hidden ">

                    <input type="checkbox" onChange={handleTheme} className='mt-0'/>
                    {/* sun icon */}
                    <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                    {/* moon icon */}
                    <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
                {
                    user ? <>
                        <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} src={user?.photoURL} alt={user?.displayName} className='rounded-full w-9 h-9 border mr-5' />
                        <Link onClick={handleLogout} to={'/login'} className={`btn-custom`}>Sign Out</Link>
                        <Tooltip id="my-tooltip" />
                    </> :
                        <Link to={'/login'} className={`btn-custom `}>Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;