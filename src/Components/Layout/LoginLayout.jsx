import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";

const LoginLayout = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;