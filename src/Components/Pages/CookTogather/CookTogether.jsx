import { Link } from "react-router-dom";


const CookTogether = () => {
    return (
        <div className="md:flex flex  flex-col-reverse md:flex-row items-center w-11/12 lg:w-9/12 mx-auto my-10">
           <div>
           <h3 className="text-center text-3xl font-bold my-3 text-fuchsia-800">Cook Together with World Best Chef</h3>
            <p>At Recipe Monstar, we believe that cooking is a shared experience that brings people together. That&apos;s why we&apos;ve created the <strong>Cook Together With World best chinese chef </strong>  section, where you can find a variety of recipes that are perfect for cooking with friends, family, or even coworkers. From easy weeknight meals to more elaborate dishes, our recipes are designed to be fun, engaging, and collaborative. So gather your loved ones, put on some music, and let&apos;s cook together!</p>
            <Link to='/coming' className="btn btn-secondary mt-6 shadow-lg">Get started</Link>
           </div>
           <div>
            <img className="w-full rounded-full" src="https://i.ibb.co/Pr9SWL1/chef.jpg" alt="chef image" />
           </div>
            
        </div>
    );
};

export default CookTogether;