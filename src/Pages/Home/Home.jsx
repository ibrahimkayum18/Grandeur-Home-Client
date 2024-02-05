import { Helmet } from "react-helmet";
import Banner from "./HomeBanner";
import Advatizement from "./Advatizement";
import Reviews from "./Reviews";
import Footer from "../../Components/Footer";
import AboutUs from "./AboutUs";
import buildings from './buildings.json'
import Lottie from "lottie-react";

const Home = () => {
  return (
    <div className="bg-slate-200" data-aos="fade-up">
      <Helmet>
        <title>Home | Grandeur Home</title>
      </Helmet>
      <Banner></Banner>
      <Advatizement></Advatizement>
      <AboutUs></AboutUs>
      <Reviews></Reviews>
      <div className="my-20">
          <h2 className="text-2xl text-center px-5 font-bold mb-10">Our Motiv is to provide best services for our customers</h2>
          <div className="lg:flex items-center lg:w-3/4 mx-auto gap-5 px-5">
            <p className="text-xl lg:w-1/2">
            When you decide to work with Motive’s experienced and knowledgeable agents, you have dedicated yourself to finding your dream property. You’ve decided to eliminate the stress and uncertainty of the process. You’ve decided to be informed. You’ve decided to get the best price. You’ve decided to have fun. And, you’ve decided to give a home to a family in need.
            </p>
            <div className="lg:w-1/2">
              <Lottie animationData={buildings} />
            </div>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
