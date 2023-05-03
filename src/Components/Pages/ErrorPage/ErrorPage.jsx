
import { Link, useRouteError } from 'react-router-dom'
import Lottie from "lottie-react";
import errorAnimation from '../../../assets/errorAnimation.json'

const ErrorPage = () => {
    
  const { error, status } = useRouteError()

    return (
        <section className='flex items-center h-screen p-16 bg-gray-300 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            
        <Lottie animationData={errorAnimation} loop={true} />
          <div className='max-w-md text-center'>
            
            <p className='text-2xl font-semibold md:text-3xl text-fuchsia-500 mb-8'>
              {error?.message} {status || 404}
            </p>
            <Link to='/' className='  bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-4 rounded-md font-bold text-white hover:bg-gradient-to-l'>
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;