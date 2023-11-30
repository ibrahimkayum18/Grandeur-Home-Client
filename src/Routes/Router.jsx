import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRouter from "../Provider/PrivetRouter";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allProperties',
                element:<PrivateRouter><AllProperties></AllProperties></PrivateRouter>
            },
            {
                path:'/dashboard',
                element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>
            }
        ]
    }
])

export default Router;