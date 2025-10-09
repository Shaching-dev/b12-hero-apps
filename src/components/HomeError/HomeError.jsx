import { Link } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const HomeError = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={"/error-404.png"} alt="erroe" />
      </div>
      <div className="flex justify-center py-10 gap-20 ">
        <NavLink to={"/"}>
          <button className="btn bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5">
            Back to Home
          </button>
        </NavLink>

        <NavLink to={"/allApps"}>
          <button className="btn bg-purple-950 text-white transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5">
            Back to Apps
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeError;
