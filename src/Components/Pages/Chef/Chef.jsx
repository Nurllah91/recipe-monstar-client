import { useLoaderData } from "react-router-dom";

const Chef = () => {
    const chef = useLoaderData();
    return (
        <div>
           {chef.name}
        </div>
    );
};

export default Chef;