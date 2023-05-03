import { useState } from "react";
import { Link } from "react-router-dom";


const Registration = () => {

    const [show, setShow] = useState(false)

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }

    const handleShow = (event) => {
        setShow(event.target.checked)
    }


    return (
        <div className=" bg-gradient-to-l from-purple-400 to-pink-400 my-10 p-10 w-11/12 md:w-1/2 lg:w-1/4 mx-auto rounded-lg">
            <h3 className="text-3xl my-3 font-bold">Please Sign up</h3>


            <form onSubmit={handleSignIn}>
                <div>
                    <label className="block" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Enter Your Name"
                        className="p-2 shadow-xl w-full rounded "
                    />
                </div>

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
                    {!show ? <span>Show password</span> : <span>Hide password</span>}
                </div>
                <div>
                    <label className="block mt-3 " htmlFor="name">Photo URL</label>
                    <input
                        type="text"
                        id="photo"
                        name="photo"
                        required
                        placeholder="Enter Your Photo Url"
                        className="p-2 shadow-xl w-full rounded "
                    />
                </div>

                <button className="btn btn-secondary w-full shadow-xl  my-5" type="submit">Sign up</button>
            </form>

            <p className="mt-5">Already Have an account? <Link className="text-primary underline" to='/login'>Login</Link></p>

        </div>
    );
};

export default Registration;