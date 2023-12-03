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
    <div>
      <Helmet>
        <title>Dashboard | Grandeur Home</title>
      </Helmet>
      <div className="flex gap-5  px-5">
        <div className="drawer lg:drawer-open w-64">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn drawer-button lg:hidden"
            >
              <HiMenu />
            </label>
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
                      <NavLink to={"/dashboard/manageProperties"}>Manage Properties</NavLink>
                    </li>
                    <li className="list-none">
                      <NavLink to={"/dashboard/manageUsers"}>Manage Users</NavLink>
                    </li>
                    <li className="list-none">
                      <NavLink to={"/dashboard/manageReviews"}>Manage Reviews</NavLink>
                    </li>
                  </>
                ) : isAgent ?(
                  <>
                    <li className="list-none">
                      <NavLink to={"/dashboard/agentProfile"}>Agent Profile</NavLink>
                    </li>
                    <li className="list-none">
                      <NavLink to={"/dashboard/addProperty"}>Add Property</NavLink>
                    </li>
                    <li className="list-none">
                      <NavLink to={"/dashboard/myAddededProperties"}>
                      My added properties
                      </NavLink>
                    </li>
                    <li className="list-none">
                      <NavLink to={"/dashboard/mySoldProperties"}>My sold properties</NavLink>
                    </li>
                    <li className="list-none">
                      <NavLink to={"/dashboard/requestedProperties"}>Requested properties</NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="list-none">
                      <NavLink to={"/dashboard/userProfile"}>My Profile</NavLink>
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

        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
