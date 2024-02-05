import { Helmet } from "react-helmet";
import { Link, NavLink, Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import useAdmin from "../../Hooks/useAdmin";
import useAgent from "../../Hooks/useAgent";

const Dashboard = () => {
  // const isAdmin = true;
  // const isAgent = true;
  const [isAdmin] = useAdmin();
  const [isAgent] = useAgent();
  return (
    <div className="flex flex-col lg:flex-row min-h-screen ">
      <Helmet>
        <title>Dashboard | Grandeur Home</title>
      </Helmet>
      <div className="drawer lg:drawer-open lg:w-64">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full flex flex-col items-center justify-end">
          {/* Page content here */}
          <div className="flex justify-between items-center bg-slate-200 w-full lg:hidden p-4">
            <img
              className="h-8 md:h-14"
              src="https://i.ibb.co/LgZG29T/New-Logo.png"
              alt=""
            />
            <label
              htmlFor="my-drawer-2"
              className="text-3xl drawer-button lg:hidden"
            >
              <HiMenu />
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="">
              {isAdmin ? (
                <>
                  <li className="list-none">
                    <NavLink to={"/dashboard"}>Admin Profile</NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink to={"/dashboard/manageProperties"}>
                      Manage Properties
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink to={"/dashboard/manageUsers"}>
                      Manage Users
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink to={"/dashboard/manageReviews"}>
                      Manage Reviews
                    </NavLink>
                  </li>
                </>
              ) : isAgent ? (
                <>
                  <li className="list-none">
                    <NavLink to={"/dashboard"}>Agent Profile</NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink to={"/dashboard/addProperty"}>
                      Add Property
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink to={"/dashboard/myAddededProperties"}>
                      My added properties
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink to={"/dashboard/mySoldProperties"}>
                      My sold properties
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink to={"/dashboard/requestedProperties"}>
                      Requested properties
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="list-none">
                    <NavLink to={"/dashboard"}>My Profile</NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink to={"/dashboard/wishlist"}>Wishlist</NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink to={"/dashboard/propertyBought"}>
                      Property Bought
                    </NavLink>
                  </li>
                  <li className="list-none">
                    <NavLink to={"/dashboard/myReviews"}>My Reviews</NavLink>
                  </li>
                </>
              )}

              <div className="my-6">
                <hr />
              </div>
              <div className="flex-col">
                <li className="list-none">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="list-none">
                  <Link to={"/allProperties"}>All Properties</Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="w-full flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
