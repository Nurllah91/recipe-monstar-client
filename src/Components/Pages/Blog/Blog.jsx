import ReactToPdf from "react-to-pdf";
import React from "react";

const Blog = () => {
    const ref = React.createRef();


    return (
        <div className="w-11/12 lg:w-9/12 mx-auto">

            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {
                    ({ toPdf }) => (
                        <button className="btn btn-outline btn-secondary mt-5" onClick={toPdf}>Generate pdf this page</button>
                    )}
            </ReactToPdf>

            <div ref={ref}>
                <h3 className="text-center text-4xl font-bold py-5 text-purple-600">Blogs</h3>
                <div className="bg-pink-50 my-5 p-5 rounded-lg">
                    <h3 className="text-purple-600 font-bold text-xl">1.Differences between uncontrolled and controlled components.</h3>
                    <p>An uncontrolled component is a form component where its state is managed by the browser, rather than by React. Uncontrolled components are generally easier to set up, but they don&apos;t offer as much control over the form data as controlled components. On the other hand a controlled component, is a form component whose value is controlled by React, using the value prop. With controlled components, you can set the initial value, update the value in response to user input, and validate the input before submitting the form.</p>
                </div>


                <div className="bg-pink-50 my-5 p-5 rounded-lg">
                    <h3 className="text-purple-600 font-bold text-xl">2. How to validate React props using PropTypes.</h3>
                    <p>To validate React props using PropTypes, you can use the prop-types package that comes bundled with React. How to validate React props using PropTypes. You can use various other PropTypes validators to check for other types of props, such as number, bool, array, and object, as well as more advanced validators like oneOfType and shape.</p>
                </div>

                <div className="bg-pink-50 my-5 p-5 rounded-lg">
                    <h3 className="text-purple-600 font-bold text-xl">3. Differences between between nodejs and express js</h3>
                    <p>Node.js is a runtime environment that allows developers to run JavaScript on the server-side. It is built on top of Chrome&apo;s V8 JavaScript engine and allows developers to build fast, scalable, and event-driven applications. Express.js, on the other hand, is a web application framework that is built on top of Node.js. It provides a set of features and tools that make it easier to develop web applications and APIs. </p>
                </div>

                <div className="bg-pink-50 my-5 p-5 rounded-lg">
                    <h3 className="text-purple-600 font-bold text-xl">4. What is a custom hook, and why will you create a custom hook?</h3>
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