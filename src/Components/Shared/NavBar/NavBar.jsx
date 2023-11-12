import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const NavBar = () => {

    const {user, photo, name, logOut} = useContext(AuthContext)
    return (

        <div className="navbar bg-[#002f35bc] border-b fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 text-white shadow bg-base-100 rounded-box w-52">
                        <li className=''><NavLink className={({ isActive }) =>
                            isActive ? "active" : ""
                        } to='/'>Home</NavLink></li>
                        <li className=''><NavLink className={({ isActive }) =>
                            isActive ? "active" : ""
                        } to='/about'>About us</NavLink></li>
                        <li className=''><NavLink className={({ isActive }) =>
                            isActive ? "active" : ""
                        } to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost  normal-case text-3xl nav-logo shadow-xl text-white">Recipe Monster</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white px-1">
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to='/about'>About us</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                        isActive ? "active" : ""
                    } to='/blog'>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end ">

                {
                    user? <img src={user.photoURL || photo} className='w-12 h-12 rounded-full'  title={user.displayName || name} />: <FaUser className='text-3xl mr-3'></FaUser>
                    
                    
                    
                }
                {user? <button className='btn btn-secondary shadow-xl text-black font-bold mr-3 ml-2' onClick={logOut}>Log out</button>: <Link to='/login' className="btn btn-secondary shadow-xl text-black font-bold mr-3 ml-2">Login</Link>
                }

               
            </div>
        </div>

    );
};

export default NavBar;