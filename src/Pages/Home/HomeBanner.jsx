import houses from "./moving-buildings.json";
import houses2 from "./building-with-train.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className=" w-full flex flex-col lg:flex-row gap-20 h-screen lg:gap-4 items-center justify-center lg:pl-16 " style={{
            backgroundImage: "url(https://i.ibb.co/VgdV0yH/header-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
        <div
          className="text-white overflow-hidden px-5"
          data-aos="fade-left"
          data-aos-duration="2500"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold lg:px-5 border-l-8 border-orange-500">
              Let's Explore The Best Properties
            </h2>
            <p className="w-[90%]  py-5 font-medium">
              Our agents set goals to help guide both the long- and short-term
              trajectory of their careers.
            </p>
            <Link to={"/allProperties"}>
              <button className="btn btn-primary">View The Properties</button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 lg:mr-10 px-5 lg:px-0 overflow-hidden" data-aos="fade-right" data-aos-duration="2500">
          <Lottie animationData={houses} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
