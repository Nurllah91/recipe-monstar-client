import SectionHeading from "../../../Utils/SectionHeading";
import breakfastImg from '../../../../assets/breakfast.jpg';
import breakfastImg2 from '../../../../assets/breakfast2.jpg';
import breakfastImg3 from '../../../../assets/breakfast3.jpg';
import breakfastImg4 from '../../../../assets/breakfast4.jpg';

const Recommended = () => {
    return (
        <section className="w-11/12 lg:w-9/12 mx-auto overflow-hidden ">
            <SectionHeading title={"Our Chef's Recommended dish"}>
                Try out our chef&apos;s recommended dish at your home. And make your own dish more tasty and sweet and surprise your family member.
            </SectionHeading>
            <div className="lg:flex justify-between mt-12">
                <div className="lg:w-1/3">
                    <h2 className="text-2xl font-semibold text-slate-100 lg:text-right mb-4">Congee with Century Egg and Pork</h2>
                    <p className="text-slate-200 lg:text-right mb-8">A bowl of warm, comforting congee sets the tone for the day. Simmered to perfection, this rice porridge is adorned with slices of century egg and tender pork, creating a harmonious blend of savory and rich flavors.</p>
                </div>

                <div className="lg:w-2/3 relative">
                    <div className="bg-yellow-400 w-2/3 lg:w-1/2 mx-auto h-[600px]">
                    </div>

                    <img className="absolute bottom-10 left-10 z-20" src={breakfastImg} alt="Food Image" />

                    <img className="absolute top-10 right-5" src={breakfastImg2} alt="Food Image" />

                </div>
            </div>


            <div className="lg:flex flex-row-reverse justify-between mt-12">
             
                <div className="lg:w-1/3">
                    <h2 className="text-2xl font-semibold text-slate-100  mb-4">Zhou Cai Bing (Sesame Pancakes with Pickled Vegetables)</h2>
                    <p className="text-slate-200 mb-8">Elevate your morning with Zhou Cai Bing, sesame pancakes filled with a medley of pickled vegetables. The nutty aroma of sesame seeds complements the tangy crunch of the veggies, creating a harmonious dance of flavors in every bite.</p>
                </div>

                <div className="lg:w-2/3 relative">
                    <div className="bg-yellow-400 w-2/3 lg:w-1/2 mx-auto h-[600px]">
                    </div>

                    <img className="absolute bottom-10 right-5" src={breakfastImg3} alt="Food Image" />
                    <img className="absolute top-10 left-10 z-20" src={breakfastImg4} alt="Food Image" />


                </div>

            </div>



        </section>
    );
};

export default Recommended;