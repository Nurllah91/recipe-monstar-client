import { Link } from "react-router-dom";


const ChefCard = ({chef}) => {
    const {id, chef_image, name, years_of_experience, recipes, likes} = chef;
    console.log(chef)
    return (
        <div>
            <div className=" w-11/12 lg:w-9/12 mb-8 mx-auto card lg:card-side bg-pink-100 shadow-xl">
                <img className="w-[50%] max-h-80" src={chef_image} alt="Album" />
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p className="font-bold">Years of experience: {years_of_experience}</p>
                    <p className="font-bold">Numbers of recipes: {recipes.length}</p>
                    <p className="font-bold">Likes: {likes}k</p>
                    <div className="card-actions justify-end">
                       <Link to={`/chefs/${id}`}> <button className="btn bg-pink-500 border-0">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;