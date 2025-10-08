import React from "react";

const ErrorApp = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <img className="w-80" src={"/App-Error.png"} alt="erroe" />
        <h1 className="text-3xl text-gray-400 font-semibold py-5">
          Apps Not Found
        </h1>
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

export default ErrorApp;
