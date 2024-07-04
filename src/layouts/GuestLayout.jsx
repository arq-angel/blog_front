import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const GuestLayout = () => {
    return (<>
        <div>
            <Navbar/>
        </div>
        <div className="container mx-auto p-4 min-h-screen">
            <Outlet/>
        </div>
        <div>
            <Footer/>
        </div>
    </>)
}

export default GuestLayout;
