import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FcLike } from "react-icons/fc";
import { ImSpoonKnife } from "react-icons/im";


const ChefCard = ({ chef }) => {
    const { id, chef_image, name, years_of_experience, recipes, likes } = chef;


    return (
        <div className="shadow-xl">

            <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
                <div className="">

                    <LazyLoadImage
                        alt={'chef image'}
                        effect="blur"
                        src={chef_image}
                        width="100%"
                        height="100%"
                        className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-scale duration-700"

                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-[#002f35b4] group-hover:via-[#002f3578] group-hover:to-[#002f35b5]"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] md:translate-y-[45%] group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white group-hover:py-0">{name}</h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-start mt-5">
                        <p className="text-xl font-semibold text-orange-100">{years_of_experience} Years experience</p>

                        <p className="rounded-full text-xl text-orange-100">{recipes.length} Recipes <ImSpoonKnife className="inline"/></p>
                        <p className="font-bold text-orange-100">{likes}k <FcLike title="Likes" className="text-orange-500 text-2xl mx-2 inline"></FcLike></p>
                        <Link to={`/chefs/${id}`}> <button className="myOutline mt-6">View Recipes</button></Link>

                    </div>

                </div>
            </div>



            {/* <div className=" w-11/12 lg:w-9/12 mb-8 mx-auto card lg:card-side bg-pink-100 shadow-xl">


                <div className="">
                    <LazyLoadImage
                        alt={'chef image'}
                        effect="blur"
                        src={chef_image}
                        width="100%"
                        height="100%"
                        className="lg:rounded-r-none h-[22rem] rounded-lg w-full lg:w-[30rem]"

                    />
                </div>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">Name: {name}</h2>
                    <p className="font-bold">Years of experience: {years_of_experience}</p>
                    <p className="font-bold">Numbers of recipes: {recipes.length}</p>
                    <p className="font-bold flex items-center"><FaHandPointRight className="text-rose-600 mx-2"></FaHandPointRight> Likes: {likes}k</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chefs/${id}`}> <button className="btn bg-pink-500 border-0">View Recipes</button></Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ChefCard;