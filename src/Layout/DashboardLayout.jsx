import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import useAdmin from '../Hooks/useAdmin'
import useInstructor from '../Hooks/useInstructor'
import useCart from '../Hooks/useCart';
import useStudent from '../Hooks/useStudent';
import { FaHome, FaUsersCog, FaElementor, FaEdit, FaCartArrowDown, FaCartPlus, FaMoneyCheckAlt } from "react-icons/fa";
const DashboardLayout = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    const [classes, refetch] = useCart();

    refetch()
    return (
        <>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col w-full items-center md:block md:py-10 md:px-5 ">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button my-14  lg:hidden">Open DashBoard</label>
                    <div className='w-full'>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu flex flex-col  justify-center md:block  md:p-4 w-80 h-full bg-base-200 text-base-content">

                        {/* admin */}
                        {isAdmin && <>
                            <li className='hover:text-orange-600'> <NavLink to={'/dashboard/admin'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>
                                <FaHome></FaHome> Admin Home</NavLink></li>
                            <li className='hover:text-orange-600'><NavLink to={'/dashboard/manageUsers'} className={({ isActive }) => isActive ? "text-orange-600" : ""}><FaUsersCog></FaUsersCog> Manage Users</NavLink></li>
                            <li className='hover:text-orange-600'><NavLink to={'/dashboard/manageClasses'} className={({ isActive }) => isActive ? "text-orange-600" : ""}><FaEdit></FaEdit> Manage Classes</NavLink></li>
                        </>
                            || isInstructor && <>
                                <li className='hover:text-orange-600'> <NavLink to={'/dashboard/instructor'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>
                                    <FaHome></FaHome> Instructor Home</NavLink></li>
                                <li className='hover:text-orange-600'><NavLink to={'/dashboard/instructorClasses'} className={({ isActive }) => isActive ? "text-orange-600" : ""}><FaElementor></FaElementor> My Classes</NavLink></li>
                                <li className='hover:text-orange-600'><NavLink to={'/dashboard/addClasses'} className={({ isActive }) => isActive ? "text-orange-600" : ""}><FaEdit></FaEdit> Add a Classes</NavLink></li>
                            </>

                            || isStudent && <>
                                <li className='hover:text-orange-600'> <NavLink to={'/dashboard/student'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>
                                    <FaHome></FaHome> Student Home
                                </NavLink></li>
                                <li className='hover:text-orange-600'><NavLink to={'/dashboard/myClassStudent'} className={({ isActive }) => isActive ? "text-orange-600" : ""}><FaCartPlus></FaCartPlus>My Classes
                                    <span className="badge badge-secondary absolute left-32">+{classes?.length || 0}</span>
                                </NavLink></li>
                                <li className='hover:text-orange-600'><NavLink to={'/dashboard/enrolledClass'} className={({ isActive }) => isActive ? "text-orange-600" : ""}><FaCartArrowDown></FaCartArrowDown> My Enrolled Classes</NavLink></li>
                                <li className='hover:text-orange-600'><NavLink to={'/dashboard/paymentHistory'} className={({ isActive }) => isActive ? "text-orange-600" : ""}><FaMoneyCheckAlt></FaMoneyCheckAlt>Payment History</NavLink></li>
                            </>}
                    </ul>

                </div>
            </div >
            <Footer></Footer>
        </>
    );
};

export default DashboardLayout;