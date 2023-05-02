import { Link, useLoaderData } from "react-router-dom";
import './Home.css'
import ChefCard from "./ChefCard/ChefCard";

const Home = () => {
    const chefs = useLoaderData();
    return (

        <div className="">
            <div className="homeBanner min-h-[calc(100vh-40vh)] text-center md:min-h-[calc(100vh-62px)]">
               
               <h1 className="text-3xl font-bold text-pink-200 pt-10">Welcome to the Recipe Monstar.</h1>

               <h1 className="text-5xl lg:text-6xl text-white font-bold md:w-[60%] w-[90%] mx-auto mt-10">World best Chinese Chef is here with their testy recipe.</h1>

               <Link to='/login'><button className="btn btn-outline btn-secondary mt-10 mx-5">Login</button></Link>


               <Link to='/registration'><button className="btn btn-outline btn-secondary">Registration</button></Link>

            </div>





           <div className="mt-10">
            <h3 className="text-4xl text-center my-5 font-bold text-fuchsia-700 w-[95%] mx-auto">List of Famous chinese chef</h3>
            {
                chefs.map(chef =><ChefCard key={chef.id} chef={chef}></ChefCard>)
            }
           </div>
        </div>
    );
};

export default Home;