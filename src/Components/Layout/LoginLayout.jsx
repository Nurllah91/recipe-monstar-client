import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const LoginLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-67px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;