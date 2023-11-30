import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
          .then(() => {
            toast.success("Log Out Successfull");
            navigate("/");
          })
          .catch((err) => toast.error(err.message));
      };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allProperties"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active " : ""
          }
        >
          All properties
        </NavLink>
      </li>
      <li>
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active " : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
        {!user && (
        <li>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active " : ""
            }
          >
            Log In
          </NavLink>
        </li>
      )}

    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-sky-200 md:py-2 lg:py-3">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 gap-3">
            <img
              className="h-14"
              src="https://i.ibb.co/LgZG29T/New-Logo.png"
              alt=""
            />
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">{navLinks}</ul>
          </div>
          <li>
            {user && (
              <div className="dropdown dropdown-end mr-5">
                <img
                  className="w-12 h-12 rounded-full"
                  tabIndex={0}
                  src={user.photoURL}
                  alt=""
                />
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[50] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>{user.displayName}</a>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>Log Out</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 items-center">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;