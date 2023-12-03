import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import AllProperties from "../Pages/AllProperties/AllProperties";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRouter from "../Provider/PrivetRouter";
import Details from "../Pages/Details/Details";
import UserProfile from "../Pages/Dashboard/UserPanel/UserProfile/UserProfile";
import Wishlist from "../Pages/Dashboard/UserPanel/Wishlist/Wishlist";
import PropertyBought from "../Pages/Dashboard/UserPanel/PropertyBought/PropertyBought";
import MyReviews from "../Pages/Dashboard/UserPanel/MyReviews/MyReviews";
import AgentProfile from "../Pages/Dashboard/AgentPanel/AgentProfile";
import ManageUsers from "../Pages/Dashboard/AdminPanel/ManageUsers";
import AddProperty from "../Pages/Dashboard/AgentPanel/AddProperty";
import MyAddededProperties from "../Pages/Dashboard/AgentPanel/MyAddededProperties";


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
                path:'/details/:id',
                element:<PrivateRouter><Details></Details></PrivateRouter>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children:[
            {
                path:'/dashboard/userProfile',
                element:<UserProfile></UserProfile>
            },
            {
                path:'/dashboard/wishlist',
                element:<Wishlist></Wishlist>
            },
            {
                path:'/dashboard/propertyBought',
                element:<PropertyBought></PropertyBought>
            },
            {
                path:'/dashboard/myReviews',
                element:<MyReviews></MyReviews>
            },

            //agent routes
            {
                path:'/dashboard/agentProfile',
                element:<AgentProfile></AgentProfile>
            },
            {
                path:'/dashboard/addProperty',
                element:<AddProperty></AddProperty>
            },
            {
                path:'/dashboard/myAddededProperties',
                element:<MyAddededProperties></MyAddededProperties>,
            },

            //admin routes
            {
                path:'/dashboard/manageUsers',
                element:<ManageUsers></ManageUsers>
            }
        ]
    },
])

export default Router;