import { useState } from 'react';
import swal from 'sweetalert';
import { FaRegHeart } from "react-icons/fa";

// react ratings 
import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


// custom style for ratings star
const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}


const Recipe = ({ recipe }) => {
    const { recipe_name, rating, ingredients, cooking_method } = recipe;
    const [mark, setMark] = useState(false)


    const handleFavorite = () => {
        setMark(true);

        swal({
            title: "Success!",
            text: "Recipe added to the favorite list",
            icon: "success",
            button: "Okay",
        });
    }
    return (
        <div className="w-[80%] mx-auto mt-5 bg-yellow-50/30 p-10 rounded-lg text-white shadow-lg">
            <table className='border-2 border-yellow-500 p-6'>
                <caption className="text-3xl font-bold text-yellow-500 mb-4">{recipe_name}</caption>
                <thead>
                    <tr>
                        <th className='border-2 border-yellow-500 p-6'>Name</th>
                        <th className='border-2 border-yellow-500 p-6'>{recipe_name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border-2 border-yellow-500 p-6'>Ingredients</td>
                        <td className='border-2 border-yellow-500 p-6'>
                            {
                                ingredients.map((item, index) => <li key={index}> {item}</li>)
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='border-2 border-yellow-500 p-6'>Cooking Method</td>
                        <td className='border-2 border-yellow-500 p-6'>{cooking_method}</td>
                    </tr>
                    <tr>
                        <td className='border-2 border-yellow-500 p-6'>Ratings</td>
                        <td className='flex items-center border-yellow-500 p-6'>

                            <Rating style={{ maxWidth: 150 }} value={rating}
                                readOnly
                                itemStyles={myStyles}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className='text-center border-2 border-yellow-500 p-6'><button
                            onClick={handleFavorite}
                            className={`${mark?"px-3 py-2 text-slate-700 rounded-md border-2 border-slate-500 bg-slate-200 ":"myBtn"}`}
                            disabled={mark}
                        >
                            Favorite<FaRegHeart className='ml-2 inline' />
                        </button></td>

                    </tr>

                </tbody>
            </table>

        </div>
    );
};

export default Recipe;