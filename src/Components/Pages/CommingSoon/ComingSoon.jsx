import Lottie from "lottie-react";
import coming from '../../../assets/coming.json'
const ComingSoon = () => {
    return (
        <div className="h-[calc(100vh-62px)]">
            <h2 className="text-5xl font-bold text-purple-500 text-center">Coming soon</h2>
           <Lottie animationData={coming} loop={true} ></Lottie>
        </div>
    );
};

export default ComingSoon;