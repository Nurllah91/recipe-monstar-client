import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import swal from 'sweetalert'
import { updateProfile } from "firebase/auth";


const Registration = () => {

    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const {createUser, setPhoto, setName} = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

       
        if(password.length < 6){
            setError('Password should be more than 6 character')
        }
        else{
            createUser(email, password)
            .then( (result) =>{
                const user = result.user;
                updateNameAndPhoto(user, name, photo);
                swal({
                    title: "Congratulation!",
                    text: "Your account created successful!",
                    icon: "success",
                    button: "Okay",
                  });
        
                form.reset();
                setError('')
               navigate('/')
            })
            .catch(e =>{
                setError(e.message)
                console.log(error)
                form.reset();
            })
        }
    }

    const updateNameAndPhoto = (user, name, photo) =>{
        updateProfile(user, {
            displayName: name,
            photoURL: photo
            
        })
        .then(
            setPhoto(photo),
            setName(name)
        )
        .catch(err =>{
            console.log(err)
        })
        
    }

    const handleShow = (event) => {
        setShow(event.target.checked)
    }


    return (
       <div className="loginPage py-10">
         <div className=" bg-gradient-to-l from-purple-400 to-pink-400  p-10 w-11/12 md:w-1/2 lg:w-1/4 mx-auto rounded-lg">
            <h3 className="text-3xl my-3 font-bold">Please Sign up</h3>


            <form onSubmit={handleSignUp}>
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
                        placeholder="Enter Your Photo Url"
                        className="p-2 shadow-xl w-full rounded "
                    />
                </div>

                <button className="btn btn-secondary w-full shadow-xl  my-5" type="submit">Sign up</button>
            </form>
            <p className="font-bold text-red-700">
                {error}
            </p>

            <p className="mt-5">Already Have an account? <Link className="text-primary underline" to='/login'>Login</Link></p>

        </div>
       </div>
    );
};

export default Registration;