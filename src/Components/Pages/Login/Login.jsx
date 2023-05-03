import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Login = () => {

    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const {signIn} = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            console.log(result)
            form.reset()
        })
        .catch(e =>{
            setError(e.message)
            form.reset()
        })
       
    }

    const handleShow = (event) =>{
        setShow(event.target.checked)
    }
    return (
        <div className=" bg-gradient-to-l from-purple-400 to-pink-400 my-10 p-10 w-11/12 md:w-1/2 lg:w-1/4 mx-auto rounded-lg">
            <h3 className="text-3xl font-bold">Please Login</h3>


            <form onSubmit={handleLogin}>
                <div>
                    <label className="block" htmlFor="email">Email</label>
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
                    <label className="block mt-3" htmlFor="password">Password</label>
                    <input
                        type={show?"text":"password"}
                        id="password"
                        name="password"
                        required 
                        placeholder="Enter Your Password"
                        className="p-2 shadow-xl w-full rounded "
                    />
                
                </div>
               <div className="mt-2">
               <input onClick={handleShow} className="mr-2" type="checkbox" name="check" id="check" />
              { !show?<span>Show password</span>:<span>Hide password</span>}
               </div>

                <button className="btn btn-secondary w-full shadow-xl  my-5" type="submit">Login</button>
            </form>
            
            <div>
                <p className="text-center text-2xl font-bold">Login with</p>
                <button className="btn btn-outline block mt-3 hover:bg-gradient-to-r from-purple-500 to-pink-500 font-bold   w-full ">Google</button>
                <button className="btn btn-outline mt-3 w-full hover:bg-gradient-to-r from-purple-500 to-pink-500 font-bold  ">GitHub</button>
                
            </div>
            <p className="mt-5">New to this website? <Link className="text-primary underline" to='/registration'>Registration</Link></p>

            <p className="font-bold text-red-700">
                {error}
            </p>
        </div>
    );
};

export default Login;