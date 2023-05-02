import { useLoaderData } from "react-router-dom";

const Home = () => {
    const chefs = useLoaderData();
    return (

        <div>
           <h2 className="text-5xl">Available chefs: {chefs.length}</h2>
        </div>
    );
};

export default Home;