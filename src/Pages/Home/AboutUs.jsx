import useProperties from "../../Hooks/useProperties";

const AboutUs = () => {
  const [properties, refetch] = useProperties();
  return (
    <div className="w-3/4 mx-auto flex items-center mb-14">
      <div className="w-3/4">
        <h2 className="text-3xl font-semibold text-center">
          Real State Agents
        </h2>
        <p className="w-[70%] mx-auto text-center">
          Our real estate agents for their unwavering sincerity, as they
          consistently demonstrate genuine dedication, transparent
          communication, and a steadfast commitment to ur best interests
          throughout the entire property transaction process, making them
          invaluable partners in achieving our real estate goals.
        </p>
      </div>
      <div className="">
        <img
          className="w-80 h-60"
          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
