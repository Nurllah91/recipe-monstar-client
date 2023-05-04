import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaHandPointRight } from "react-icons/fa";


const ChefCard = ({ chef }) => {
    const { id, chef_image, name, years_of_experience, recipes, likes } = chef;
    return (
        <div>
            <div className=" w-11/12 lg:w-9/12 mb-8 mx-auto card lg:card-side bg-pink-100 shadow-xl">


              <div>
              <LazyLoadImage
                    alt={'chef image'}
                    effect="blur"
                    src={chef_image}
                    width={350}
                    className="w-full rounded-l-lg max-h-80"
                    
                    />
              </div>
                {/* <img className="w-[50%] max-h-80" src={chef_image} alt="Album" /> */}
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">Name: {name}</h2>
                    <p className="font-bold">Years of experience: {years_of_experience}</p>
                    <p className="font-bold">Numbers of recipes: {recipes.length}</p>
                    <p className="font-bold flex items-center"><FaHandPointRight className="text-rose-600 mx-2"></FaHandPointRight> Likes: {likes}k</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chefs/${id}`}> <button className="btn bg-pink-500 border-0">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;