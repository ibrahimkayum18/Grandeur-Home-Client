
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import auth from "../../../firebase.config";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import emoji from './../LogIn/log in without code.json'
import Lottie from "lottie-react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
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

            //create user info object to store user info
            const userInfo = {
              name: name,
              email: email,
              photo: photo,
            }

            //Post user into database
            axiosPublic.post('/users',userInfo)
            .then(res => {
              console.log(res.data);
              if(res.data){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 2000
                });
                navigate('/')
              }
            })
            .catch(err => {
              console.log(err);
            })
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div  data-aos="fade-up" className="lg:flex items-center justify-center bg-sky-200 lg:py-10">
      <Helmet>
        <title>Register | Grandeur Home</title>
      </Helmet>
      <div className="w-full  flex justify-center items-center">
        <div className="p-5 md:p-10 lg:rounded-lg w-full lg:w-3/4 mx-auto bg-base-100">
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
      <div className="w-3/4 mx-auto ">
        <Lottie animationData={emoji} />
      </div>
    </div>
  );
};

export default Register;