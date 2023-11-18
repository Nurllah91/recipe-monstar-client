import ReactToPdf from "react-to-pdf";
import React from "react";

const Blog = () => {
    const ref = React.createRef();


    return (
        <div className="w-11/12 lg:w-9/12 mx-auto">

            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {
                    ({ toPdf }) => (
                        <button className="myOutline mt-20" onClick={toPdf}>Generate pdf this page</button>
                    )}
            </ReactToPdf>

            <div ref={ref}>
                <h3 className="text-center text-4xl font-bold py-5 text-white">Blogs</h3>
                <div className="bg-yellow-50/30 text-white my-5 p-5 rounded-lg">
                    <h3 className="text-yellow-500 font-bold text-xl">1. A Taste of China: Quick and Easy Scallion Pancakes Recipe.</h3>
                    <p>Embark on a culinary journey with a simple yet flavorful Chinese recipe that will transport your kitchen to the bustling streets of Beijing  Scallion Pancakes. These savory delights, known as &quot;Cong You Bing&quot; in Mandarin, are a popular street food and a beloved appetizer in Chinese cuisine.</p>
                    <h3 className="text-2xl text-yellow-500">Ingredients:</h3>
                    <ul>
                        <li>1. 2 cups all-purpose flour</li>
                        <li>2. 3/4 cup boiling water</li>
                        <li>3. Chopped scallions (green onions)</li>
                        <li>4. Salt</li>
                        <li>5. Sesame oil</li>
                        <li>6. Vegetable oil for frying</li>
                    </ul>

                    <h3 className="text-2xl text-yellow-500 font-bold">Instructions:</h3>

                    <p>  <strong className="text-yellow-300">Mix and Knead:</strong> Combine the flour and boiling water in a bowl. Knead until a smooth dough forms. Let it rest for 30 minutes, covered.
                        <br />

                        <strong className="text-yellow-300">Roll it Out: </strong> Divide the dough into small balls. Roll each ball into a thin pancake on a floured surface.
                        <br />
                        <strong className="text-yellow-300">Add Scallions: </strong> Sprinkle chopped scallions evenly over the pancake. Season with a pinch of salt.
                        <br />
                        <strong className="text-yellow-300">Roll and Coil: </strong> Brush the pancake with a thin layer of sesame oil. Roll it up into a log, then coil the log into a round dough ball.
                        <br />
                        <strong className="text-yellow-300">Flatten and Fry: </strong> Roll the dough ball into a pancake again. Heat vegetable oil in a pan and fry the pancake until both sides are golden brown and crispy.
                        <br />
                        <strong className="text-yellow-300">Serve Hot:</strong> Cut the scallion pancake into wedges and serve immediately. Pair it with soy sauce or your favorite dipping sauce.</p>


                    <h3 className="text-2xl text-yellow-500 font-bold">Why Scallion Pancakes?</h3>
                    <p>Scallion pancakes are a delightful blend of textures  the outer layers are crispy, while the inside remains soft and chewy. The scallions add a burst of freshness and a subtle onion flavor that complements the golden, flaky layers.</p>

                    <h3 className="text-2xl text-yellow-500 font-bold">Perfect for Any Occasion:</h3>
                    <p>Whether you&apos;re looking for a quick appetizer for a gathering or a savory snack for a cozy night in, scallion pancakes fit the bill. They are versatile, easy to make, and sure to impress with their unique taste and presentation.</p>

                    <h3 className="text-2xl text-yellow-500 font-bold mt-6">Conclusion:</h3>
                    <p>Dive into the heart of Chinese cuisine with this Scallion Pancakes recipe. The process may seem simple, but the result is a dish that encapsulates the essence of traditional Chinese street food. So, grab your apron and give your taste buds a ticket to China with these delicious, homemade scallion pancakes. Enjoy the culinary adventure!</p>
                </div>


                <div className="bg-yellow-50/30 text-white my-5 p-5 rounded-lg">
                    <h3 className="text-yellow-500 font-bold text-xl">2. How to validate React props using PropTypes.</h3>
                    <p>To validate React props using PropTypes, you can use the prop-types package that comes bundled with React. How to validate React props using PropTypes. You can use various other PropTypes validators to check for other types of props, such as number, bool, array, and object, as well as more advanced validators like oneOfType and shape.</p>
                </div>

                <div className="bg-yellow-50/30 text-white my-5 p-5 rounded-lg">
                    <h3 className="text-yellow-500 font-bold text-xl">3. Differences between between nodejs and express js</h3>
                    <p>Node.js is a runtime environment that allows developers to run JavaScript on the server-side. It is built on top of Chrome&apo;s V8 JavaScript engine and allows developers to build fast, scalable, and event-driven applications. Express.js, on the other hand, is a web application framework that is built on top of Node.js. It provides a set of features and tools that make it easier to develop web applications and APIs. </p>
                </div>

                <div className="bg-yellow-50/30 text-white my-5 p-5 rounded-lg">
                    <h3 className="text-yellow-500 font-bold text-xl">4. What is a custom hook, and why will you create a custom hook?</h3>
                    <p>In React, a custom hook is a JavaScript function that starts with the use keyword and follows the rules of Hooks. A custom hook allows you to encapsulate reusable logic that can be shared between components. Custom hooks can be used to abstract away complex state logic, handle common tasks like API calls or form validation, and create reusable code that can be used throughout your application. There are many reasons why you might want to create a custom hook. For example, you may want to:
                        <li>Reuse logic across multiple components</li>
                        <li>Abstract away complex state management code</li>
                        <li>Encapsulate common functionality, such as handling API calls or form validation</li>
                        <li>Share code between different projects or teams</li>
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Blog;