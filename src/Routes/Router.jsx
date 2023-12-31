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
import Update from "../Pages/Dashboard/AgentPanel/Update/Update";
import ManageReviews from "../Pages/Dashboard/AdminPanel/ManageReviews";
import ManageProperties from "../Pages/Dashboard/AdminPanel/ManageProperties";
import AdminProfile from "../Pages/Dashboard/AdminPanel/AdminProfile";
import MakeOffer from "../Pages/Dashboard/MakeOffer";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PaymentGetway from "../Pages/Payment/PaymentGetway";
import RequestedProperties from "../Pages/Dashboard/AgentPanel/RequestedProperties";
import MySoldProperties from "../Pages/Dashboard/AgentPanel/MySoldProperties";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashboard',
                element:<UserProfile></UserProfile>
            },
            {
                path:'/dashboard/payment',
                element:<PaymentGetway></PaymentGetway>
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
                path:'/dashboard',
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
            {
                path:'/dashboard/requestedProperties',
                element:<RequestedProperties></RequestedProperties>
            },
            {
                path:'/dashboard/mySoldProperties',
                element:<MySoldProperties></MySoldProperties>
            },
            

            //admin routes
            {
                path:'/dashboard/manageUsers',
                element:<ManageUsers></ManageUsers>
            },
            {
                path:'/dashboard/manageReviews',
                element: <ManageReviews></ManageReviews>
            },
            {
                path:'/dashboard/manageProperties',
                element:<ManageProperties></ManageProperties>
            },
            {
                path:'/dashboard',
                element:<AdminProfile></AdminProfile>
            }
        ]
    },
    {
        path:'/update/:id',
        element:<Update></Update>,
        errorElement:<ErrorPage></ErrorPage>
    },
    {
        path:'/makeOffer/:id',
        element:<MakeOffer></MakeOffer>,
        errorElement:<ErrorPage></ErrorPage>
    }
    
])

export default Router;