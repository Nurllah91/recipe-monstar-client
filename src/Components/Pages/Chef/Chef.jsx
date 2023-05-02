import { useLoaderData } from "react-router-dom";

const Chef = () => {
    const chef = useLoaderData();
    const {chef_image, name, years_of_experience, recipes,description, likes } = chef;
    return (
        <div>
            <div className="homeBanner min-h-[calc(100vh-40vh)] text-white text-center">
                <div className="text-center pt-10">
                    <div className="md:w-[20%] w-[50%] mx-auto mask mask-hexagon">
                        <img src={chef_image}/>
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl font-bold mt-5">Name: {name}</h3>
                    <p className="w-[60%] mx-auto">{description}</p>
                    <div className="mt-5">
                    <button className="btn btn-outline btn-secondary mx-2">{likes}k Likes</button>
                    <button className="btn btn-outline btn-secondary mx-2">{recipes.length} Recipes</button>
                    <button className="btn btn-outline btn-secondary mx-2">{years_of_experience} Years of Experience</button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Chef;