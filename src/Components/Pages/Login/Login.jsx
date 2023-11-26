import './login.css'
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import swal from 'sweetalert'


const Login = () => {

    const [show, setShow] = useState(false)
    const [error, setError] = useState('')

    const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((result) => {
                console.log(result)
                form.reset();
                setError('')
                navigate(from, { replace: true });

            })
            .catch(e => {
                swal({
                    title: "Opps!",
                    text: `${e.message}`,
                    icon: "error",
                    button: "Okay",
                });
                setError(e.message)
                form.reset()
            })

    }


    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(() => {
                setError('')
                navigate(from, { replace: true });
            })
            .catch(er => {
                swal({
                    title: "Opps!",
                    text: `${er.message}`,
                    icon: "error",
                    button: "Okay",
                });
                setError(er.message)
            })
    }

    const handleGitHubSingIn = () => {
        gitHubSignIn()
            .then(() => {
                setError('')
                navigate(from, { replace: true });
            })
            .catch(er => {
                swal({
                    title: "Opps!",
                    text: `${er.message}`,
                    icon: "error",
                    button: "Okay",
                });
                setError(er.message)
            })
    }

    const handleShow = (event) => {
        setShow(event.target.checked)
    }
    return (
       <div className="loginPage py-10">
         <div className="bg-gradient-to-l from-purple-400/50 to-pink-400/50 my-20 p-10 w-11/12 md:w-1/2 lg:w-1/4 mx-auto rounded-lg">
            <h3 className="text-3xl font-bold text-white">Please Login</h3>


            <form onSubmit={handleLogin}>
                <div>
                    <label className="block text-white mt-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Enter Your Email"
                        className="p-2 shadow-xl w-full rounded "


                    />
                </div>
                <div>
                    <label className="block mt-3 text-white" htmlFor="password">Password</label>
                    <input
                        type={show ? "text" : "password"}
                        id="password"
                        name="password"
                        required
                        placeholder="Enter Your Password"
                        className="p-2 shadow-xl w-full rounded "
                    />

                </div>
                <div className="mt-2">
                    <input onClick={handleShow} className="mr-2" type="checkbox" name="check" id="check" />
                    {!show ? <span className='text-white'>Show password</span> : <span className='text-white'>Hide password</span>}
                </div>

                <button className="btn btn-secondary w-full shadow-xl  my-5" type="submit">Login</button>
            </form>

            <div>
                <p className="text-center text-white text-2xl font-bold">Login with</p>
                <button onClick={handleGoogleSingIn} className="btn btn-outline block mt-3 hover:bg-gradient-to-r from-purple-500 to-pink-500 font-bold   w-full ">Google</button>
                <button onClick={handleGitHubSingIn} className="btn btn-outline mt-3 w-full hover:bg-gradient-to-r from-purple-500 to-pink-500 font-bold  ">GitHub</button>

            </div>
            <p className="mt-5 text-white">New to this website? <Link className="text-blue-800 font-bold underline" to='/registration'>Registration</Link></p>

            <p className="font-bold text-red-700">
                {error}
            </p>
        </div>
       </div>

    );
};

export default Login;