
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import auth from "../../../firebase.config";

const Register = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;


    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success('User Created Successfully');
            logOut();
            navigate('/login')
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div  data-aos="fade-up" className="flex items-center justify-center bg-sky-200 py-10">
      <Helmet>
        <title>Register | Grandeur Home</title>
      </Helmet>
      <div className="w-full  flex justify-center items-center">
        <div className="p-5 md:p-10 rounded-lg w-3/4 mx-auto bg-base-100">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-8">
            Register Now
          </h2>
          <form onSubmit={handleCreateUser}>
            <div className="form-control ">
              <label>
                <span className="text-xl font-medium">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered my-2"
                placeholder="Type Name..."
              />
            </div>
            <div className="form-control ">
              <label>
                <span className="text-xl font-medium">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                className="input input-bordered my-2"
                placeholder="Photo URL..."
              />
            </div>
            <div className="form-control ">
              <label>
                <span className="text-xl font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered my-2"
                placeholder="Type Email..."
              />
            </div>
            <div className="form-control">
              <label>
                <span className="text-xl font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered my-2"
                placeholder="Type Password..."
              />
            </div>
            <div className="my-5">
              <button
                type="submit"
                className="py-3 w-full bg-blue-700 text-white hover:bg-blue-500 rounded-lg"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div>
            <p>
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-blue-600 hover:underline font-bold"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className=" w-3/4 lg:pr-14">
        <img
          className="w-full p-5"
          src="https://i.ibb.co/6HS80CK/istockphoto-1312423123-612x612.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;