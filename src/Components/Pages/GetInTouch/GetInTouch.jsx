import Lottie from "lottie-react";
import emailAnimation from '../../../assets/email.json'
import SectionHeading from "../../Utils/SectionHeading";


const GetInTouch = () => {
    return (
        <div className="w-11/12 lg:w-9/12 mx-auto my-10">
            <SectionHeading title={"Get in touch"}>If you want to get update regularly via email please subscribe</SectionHeading>
            <div className="flex flex-col-reverse md:flex-row items-center">
                <div className="w-1/2"><Lottie animationData={emailAnimation} loop={true}></Lottie></div>
                <div className="grow text-slate-300">
                    <div className="my-5 relative">
                        <input className="shadow-lg p-3 rounded-full w-full" type="text" placeholder="Enter Your Email" />

                        <span className="bg-orange-500 text-white p-3 rounded-full absolute shadow-lg right-0">Subscribe</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetInTouch;