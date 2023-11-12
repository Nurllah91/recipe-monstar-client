import { Link, useLoaderData } from "react-router-dom";
import './Home.css'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import CookTogether from "../CookTogather/CookTogether";
import GetInTouch from "../GetInTouch/GetInTouch";

import ChefCard from "./ChefCard/ChefCard";
import SectionHeading from "../../Utils/SectionHeading";

const Home = () => {

    const { user, logOut } = useContext(AuthContext);
    const chefs = useLoaderData();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (

        <div className="">

            <div className="homeBanner min-h-[calc(100vh-40vh)] text-center md:min-h-[calc(100vh-62px)]">

                <h1 className="text-3xl font-bold text-pink-200 pt-20">Welcome to the Recipe Monster.</h1>

        

                <h1 className="text-5xl lg:text-6xl text-white font-bold md:w-[60%] w-[90%] mx-auto mt-10">World best Chinese Chef is here with their testy recipe.</h1>

                {
                    user ? <div>
                        <button className="btn btn-outline btn-secondary mt-10 mx-5">Get started</button>
                        <button onClick={handleLogOut} className="btn btn-outline btn-secondary">Logout</button>
                    </div> :
                        <div>
                            <Link to='/login'><button className="btn btn-outline btn-secondary mt-10 mx-5">Login</button></Link>

                            <Link to='/registration'><button className="btn btn-outline btn-secondary">Registration</button></Link>
                        </div>
                }

            </div>







            <div className="mt-10">

                <SectionHeading title={"Our Famous chinese chef"}>From Classic to Creative, Our Chefs Have Something for Every Palate</SectionHeading>

                    {
                        chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
              
            </div>
            <div>
                <CookTogether></CookTogether>
            </div>
            <div className="">
                <GetInTouch></GetInTouch>
            </div>
        </div>
    );
};

export default Home;