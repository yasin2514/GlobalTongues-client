import {NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const student = true;
    const admin = false;
    const instructor = false;
    return (
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
                    {/* Sidebar content here */}

                    {/* admin */}
                    {admin && <>
                        <li className='hover:text-orange-600'><NavLink to={'/dashboard/admin'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>
                            Admin Home</NavLink></li>
                        <li className='hover:text-orange-600'><NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Home</NavLink></li>
                        <li className='hover:text-orange-600'><NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Home</NavLink></li>
                    </>}

                    {/* instructor */}
                    {instructor && <>
                        <li className='hover:text-orange-600'><NavLink to={'/dashboard/instructor'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>
                            Instructor Home</NavLink></li>
                        <li className='hover:text-orange-600'><NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Home</NavLink></li>
                        <li className='hover:text-orange-600'><NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Home</NavLink></li>
                    </>}

                    {/* student */}
                    {student && <>
                        <li className='hover:text-orange-600'><NavLink to={'/dashboard/instructor'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>
                            Student Home</NavLink></li>
                        <li className='hover:text-orange-600'><NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Home</NavLink></li>
                        <li className='hover:text-orange-600'><NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Home</NavLink></li>
                    </>}

                    <div className='divider'></div>

                    <li className='hover:text-orange-600'><NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Home</NavLink></li>
                    <li className='hover:text-orange-600'><NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-600" : ""}>Home</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;