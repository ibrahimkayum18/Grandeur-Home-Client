import { Helmet } from "react-helmet";
import Banner from "./HomeBanner";
import Advatizement from "./Advatizement";
import Reviews from "./Reviews";
import Footer from "../../Components/Footer";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Grandeur Home</title>
      </Helmet>
      <Banner></Banner>
      <Advatizement></Advatizement>
      <AboutUs></AboutUs>
      <Reviews></Reviews>
      <div className="my-20">
          <h2 className="text-2xl text-center mb-10">Our Motiv is to provide best services for our customers</h2>
          <div className="flex items-center w-3/4 mx-auto gap-5 px-5">
            <p className="text-xl w-1/2">
            When you decide to work with Motive’s experienced and knowledgeable agents, you have dedicated yourself to finding your dream property. You’ve decided to eliminate the stress and uncertainty of the process. You’ve decided to be informed. You’ve decided to get the best price. You’ve decided to have fun. And, you’ve decided to give a home to a family in need.
            </p>
            <img className="w-1/2" src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
