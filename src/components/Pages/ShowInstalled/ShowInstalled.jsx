import { Download, Star } from "lucide-react";
import React from "react";

const ShowInstalled = ({ app, handleUninstall }) => {
  const { id, image, downloads, size, title, ratingAvg } = app;

  return (
    <div className="flex justify-between border border-gray-300 rounded-[10px] items-center max-w-6xl mx-auto p-10 px-20 my-10 bg-white shadow-lg">
      <div className="flex gap-20 items-center">
        <div>
          <img className="w-20 rounded-lg" src={image} alt="" />
        </div>

        <div>
          <h2 className="py-5">{title}</h2>
          <div className="flex gap-5">
            <span className="flex gap-2">
              <Download className="text-green-500"></Download>
              <p>{downloads}</p>
            </span>
            <span className="flex gap-2">
              <Star className="text-yellow-500"></Star>
              <p>{ratingAvg}</p>
            </span>
            <span>
              <p>{size} MB</p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <button
          className="btn bg-[#00d390] text-white font-semibold"
          onClick={() => handleUninstall(id)}>
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default ShowInstalled;
