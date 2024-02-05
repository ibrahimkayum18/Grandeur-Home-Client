import Lottie from "lottie-react";
import useProperties from "../../Hooks/useProperties";
import house from "./house1.json";

const AboutUs = () => {
  const [properties, refetch] = useProperties();
  return (
    <div
      className="px-10 pt-10 lg:pt-0 mx-auto lg:flex flex-row-reverse items-center mb-14"
      style={{
        backgroundImage: "url(https://i.ibb.co/9prhg9L/images-6.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-semibold text-center">
          Real State Agents
        </h2>
        <div className="divider"></div>
        <p className="mx-auto text-center font-semibold">
          Our real estate agents for their unwavering sincerity, as they
          consistently demonstrate genuine dedication, transparent
          communication, and a steadfast commitment to our best interests
          throughout the entire property transaction process, making them
          invaluable partners in achieving our real estate goals.
        </p>
      </div>
      <div className="lg:w-1/2 overflow-hidden">
        <Lottie animationData={house} />
      </div>
    </div>
  );
};

export default AboutUs;
