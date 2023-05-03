import Lottie from "lottie-react";
import emailAnimation from '../../../assets/email.json'


const GetInTouch = () => {
    return (
        <div className="flex w-11/12 lg:w-9/12 mx-auto my-10  flex-col-reverse md:flex-row items-center">
            <div className="grow">
                <h3 className="text-center text-3xl font-bold text-fuchsia-800">Get in touch</h3>

                <div className="my-5 relative">
                    <p className="mb-5">If you want to get update regularly via email please subscribe</p>
                    <input className="shadow-lg p-3 rounded-full w-full" type="text" placeholder="Enter Your Email" />
                    
                    <span className="bg-pink-500 text-white p-3 rounded-full absolute shadow-lg right-0">Subscribe</span>
                </div>
                
            </div>
         <div className="w-1/2"><Lottie animationData={emailAnimation} loop={true}></Lottie></div>
        </div>
    );
};

export default GetInTouch;