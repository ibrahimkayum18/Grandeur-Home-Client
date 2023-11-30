import { Helmet } from "react-helmet";
import Banner from "./HomeBanner";
import Advatizement from "./Advatizement";
import Reviews from "./Reviews";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Grandeur Home</title>
      </Helmet>
      <Banner></Banner>
      <Advatizement></Advatizement>
      <Reviews></Reviews>


      <Footer />
    </div>
  );
};

export default Home;
