import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const AgentProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
      <div className="p-10 ">
        <div className="md:flex gap-5 items-center">
          <img className="w-64" src={user.photoURL} alt="" />
          <div>
            <h2 className="text-xl font-bold">User Name: {user.displayName}</h2>
            <p>User Email: {user.email}</p>
            <p>Role: Agent</p>
          </div>
        </div>
      </div>
    );
};

export default AgentProfile;