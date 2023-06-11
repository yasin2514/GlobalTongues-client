import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
const DashboardLayout = () => {
    const admin = true;
    const instructor = false;
    return (
        <>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                        {/* admin */}
                        {admin && <>
                            <li className='hover:text-orange-600'><NavLink to={'/dashboard/admin'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>
                                Admin Home</NavLink></li>
                            <li className='hover:text-orange-600'><NavLink to={'/dashboard/manageUsers'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Manage Users</NavLink></li>
                            <li className='hover:text-orange-600'><NavLink to={'/dashboard/manageClasses'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Manage Classes</NavLink></li>
                        </>
                            || instructor && <>
                                <li className='hover:text-orange-600'><NavLink to={'/dashboard/instructor'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>
                                    Instructor Home</NavLink></li>
                                <li className='hover:text-orange-600'><NavLink to={'/dashboard/instructorClasses'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>My Classes</NavLink></li>
                                <li className='hover:text-orange-600'><NavLink to={'/dashboard/addClasses'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Add a Classes</NavLink></li>
                            </>

                            || <>
                                <li className='hover:text-orange-600'><NavLink to={'/dashboard/student'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>
                                    Student Home</NavLink></li>
                                <li className='hover:text-orange-600'><NavLink to={'/dashboard/myClassStudent'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>My Classes</NavLink></li>
                                <li className='hover:text-orange-600'><NavLink to={'/dashboard/enrolledClass'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>My Enrolled Classes</NavLink></li>
                                <li className='hover:text-orange-600'><NavLink to={'/dashboard/paymentHistory'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Payment History</NavLink></li>
                            </>}
                    </ul>

                </div>
            </div >
            <Footer></Footer>
        </>
    );
};

export default DashboardLayout;