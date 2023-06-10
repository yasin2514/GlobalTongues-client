import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="mt-auto">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;