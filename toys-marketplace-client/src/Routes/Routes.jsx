import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ToyDetails from "../Shared/ToyDetails/ToyDetails";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/All toys/AllToys";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import Error from "../Pages/Error/Error";
import Blog from "../Pages/Blog/Blog";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Register></Register>
      },
      {
        path: "/toydetails/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://toys-marketplace-server-abdur-rahman.vercel.app/toydetails/${params.id}`)
      },
      {
        path: '/addtoys',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>
      },
      {
        path: '/mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:"/blogs",
        element: <Blog></Blog>
      }
  
    ]
  },
]);


export default router;