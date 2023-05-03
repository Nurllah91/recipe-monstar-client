import { useState } from 'react';
import './Recipe.css'
import swal from 'sweetalert';
import { FaRegHeart } from "react-icons/fa";
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
        <div className="w-[80%] mx-auto mt-5 bg-pink-50 p-10 rounded-lg shadow-lg">
            <table>
                <caption className="text-2xl font-bold text-purple-500 mb-4">{recipe_name}</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>{recipe_name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ingredients</td>
                        <td>
                            {
                                ingredients.map((item, index) => <li key={index}> {item}</li>)
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Cooking Method</td>
                        <td>{cooking_method}</td>
                    </tr>
                    <tr>
                        <td>Ratings</td>
                        <td>{rating} star</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className='text-center'><button
                            onClick={handleFavorite}
                            className='btn btn-secondary'
                            disabled = {mark}
                            >
                            Favorite<FaRegHeart className='ml-2' />
                        </button></td>

                    </tr>

                </tbody>
            </table>

        </div>
    );
};

export default Recipe;