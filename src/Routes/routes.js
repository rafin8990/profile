import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import MyPost from "../Pages/MyPost/MyPost";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Register/Login/Login";
import Register from "../Pages/Register/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/mypost',
                element:<PrivateRoute><MyPost></MyPost></PrivateRoute>
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ])
    }

])