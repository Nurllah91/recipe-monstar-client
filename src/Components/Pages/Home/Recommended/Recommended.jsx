import SectionHeading from "../../../Utils/SectionHeading";
import breakfastImg from '../../../../assets/breakfast.jpg';
import breakfastImg2 from '../../../../assets/breakfast2.jpg';

const Recommended = () => {
    return (
        <section  className="w-11/12 lg:w-9/12 mx-auto overflow-hidden my-10">
            <SectionHeading title={"Our Chef's Recommended dish"}>
                Try out our chef&apos;s recommended dish at your home. And make your own dish more tasty and sweet and surprise your family member.
            </SectionHeading>
<div className="lg:flex justify-between mt-12">
    <div className="lg:w-1/3">
        <h2 className="text-2xl font-semibold text-slate-100 lg:text-right mb-4">A Chinese Sunrise Breakfast</h2>
        <p className="text-slate-200 lg:text-right mb-8">Wake up to a symphony of flavors with this delightful Chinese breakfast that will kickstart your day with a burst of energy and culinary bliss. Embracing the essence of traditional Chinese morning fare, the &quote;Morning Harmony&quote; breakfast brings together a perfect balance of textures, aromas, and tastes.</p>
    </div>

<div className="lg:w-2/3 relative">
    <div className="bg-yellow-400 w-2/3 mx-auto h-[600px]">
    </div>
        
        <img className="absolute bottom-10 left-10 z-50" src={breakfastImg} alt="Food Image" />

        <img className="absolute top-10 right-5" src={breakfastImg2} alt="Food Image" />

</div>
</div>
        


        </section>
    );
};

export default Recommended;