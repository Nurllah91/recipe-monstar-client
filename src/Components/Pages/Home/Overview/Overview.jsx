import { motion } from 'framer-motion'
import { useState } from 'react';
import CountUp from 'react-countup';

const Overview = () => {
    const [isInvView, setIsInView] = useState(false);

    return (
        <div className="w-11/12 lg:w-9/12 mx-auto">


            <motion.div
                whileInView={() => {
                    // when element in viewport , set IsInView true!
                    setIsInView(true);
                    return {};
                }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: '-50vw' }}
                    animate={isInvView && { opacity: 1, scale: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 200, duration: 1.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-white border-2 border-orange-500 rounded p-5 text-center bg-[#002f35eb] hover:bg-[#142b2ef5]">

                    <h1 className="text-5xl font-semibold"><CountUp start={0} end={100} enableScrollSpy scrollSpyDelay={10} />+</h1>
                    <p className="text-2xl ">Recipes</p>

                </motion.div>

                
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: '-50vw' }}
                    animate={isInvView && { opacity: 1, scale: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 200, duration: 1.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-white border-2 border-orange-500 rounded p-5 text-center bg-[#002f35eb] hover:bg-[#142b2ef5]">

                    <h1 className="text-5xl font-semibold"><CountUp start={0} end={200} enableScrollSpy scrollSpyDelay={10} />+</h1>
                    <p className="text-2xl ">Ingredients</p>

                </motion.div>

                
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: '-50vw' }}
                    animate={isInvView && { opacity: 1, scale: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 200, duration: 1.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-white border-2 border-orange-500 rounded p-5 text-center bg-[#002f35eb] hover:bg-[#142b2ef5]">

                    <h1 className="text-5xl font-semibold"><CountUp start={0} end={750} enableScrollSpy scrollSpyDelay={10} />K+</h1>
                    <p className="text-2xl ">Satisfied customer</p>

                </motion.div>

                
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: '-50vw' }}
                    animate={isInvView && { opacity: 1, scale: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 200, duration: 1.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-white border-2 border-orange-500 rounded p-5 text-center bg-[#002f35eb] hover:bg-[#142b2ef5]">

                    <h1 className="text-5xl font-semibold"><CountUp start={0} end={5} enableScrollSpy scrollSpyDelay={10} />M+</h1>
                    <p className="text-2xl ">Subscriber</p>

                </motion.div>

                
            </motion.div>

        </div>
    );
};

export default Overview;