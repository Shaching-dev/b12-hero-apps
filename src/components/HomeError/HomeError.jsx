import { Link } from "lucide-react";
import React from "react";

const HomeError = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={"/error-404.png"} alt="erroe" />
      </div>
      <div className="flex justify-center py-10 gap-20 ">
        <a href="/">
          <button className="btn bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5">
            Back to Home
          </button>
        </a>
        <a href="/allApps">
          <button className="btn bg-purple-950 text-white transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5">
            Back to Apps
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeError;
