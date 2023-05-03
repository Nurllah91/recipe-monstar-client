import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Chef from "../Pages/Chef/Chef";
import LoginLayout from "../Layout/LoginLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";





const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/chefs'></Navigate>

      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/registration',
        element:<Registration></Registration>
      }
    ]

  },

  {
    path: 'chefs',
    element: <Main></Main>,
    children: [
      {
        path: '/chefs',
        element: <Home></Home>,
        loader:() => fetch('https://recipe-monstar-server-nurllah91.vercel.app/chefs')
      },
      {
        path:'/chefs/:id',
        element:<Chef></Chef>,
        loader: ({params}) => fetch(`https://recipe-monstar-server-nurllah91.vercel.app/chefs/${params.id}`)
      },
      {
        path: '*',
        element:<ErrorPage></ErrorPage>
      }
    ]

  },
  {
    path: '*',
    element:<ErrorPage></ErrorPage>
  }
]);

export default router;