import React from "react";

const AppsNotFound = () => {
  return (
    <div className="flex col-span-full flex-col justify-center items-center text-center py-10">
      <img src={"/public/App-Error.png"} alt="" />
      <h3 className="text-3xl font-semibold text-gray-800 py-5">
        {" "}
        No Apps Found
      </h3>
    </div>
  );
};

export default AppsNotFound;
