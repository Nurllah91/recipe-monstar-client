import './Recipe.css'
const Recipe = ({ recipe }) => {
    const { recipe_name, rating, ingredients, cooking_method } = recipe;
    return (
        <div className="w-[80%] mx-auto mt-5 bg-pink-100 p-10 rounded-lg shadow-lg">
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
                                ingredients.map((item, index) =><li key={index}> {item}</li>)
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
                   
                </tbody>
            </table>

        </div>
    );
};

export default Recipe;