import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo-1.png'
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import useAdmin from '../../../Hooks/useAdmin';
import useInstructor from '../../../Hooks/useInstructor';
import useStudent from '../../../Hooks/useStudent';



const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();

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
        <li className='hover:text-Orange-600'><NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Home</NavLink></li>
        <li className='hover:text-orange-600'><NavLink to={'/allInstructor'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Instructors</NavLink></li>
        <li className='hover:text-orange-600'><NavLink to={'/allClasses'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Classes</NavLink></li>
        {
            user && <>
                <li className='hover:text-orange-600'><NavLink to={isAdmin && '/dashboard/admin' || isInstructor && '/dashboard/instructor' || isStudent && '/dashboard/student'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Dashboard </NavLink></li>
            </>

        }

    </>

    return (
        <div className="navbar bg-black text-white py-5 z-50 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-compact dropdown-content mt-3 p-6 shadow bg-black rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <div className='flex'>
                    <img src={logo} alt="logo" className='w-16 md:w-20' />
                    <h2 className='text-2xl md:text-4xl font-bold'>Global Tongues</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-14  menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
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