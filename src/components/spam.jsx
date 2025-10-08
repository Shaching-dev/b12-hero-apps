import { Download, HandHeart, Star } from "lucide-react";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeAppDetails = () => {
  const [install, setInstall] = useState(false);
  const { id } = useParams();
  const data = useLoaderData();
  const appId = parseInt(id);

  const singleApp = data.find((app) => app.id === appId);

  const handleBtn = () => {
    if (!install) {
      setInstall(true);
      toast.success("🚀 App installed successfully! You're all set!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    } else {
      toast.info("✅ You already installed this app!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  //   if (!singleApp) {
  //     return <p className="text-center text-red-500 py-10">App not found!</p>;
  //   }

  const { image, title, companyName, ratingAvg, reviews, downloads, size } =
    singleApp;

  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 max-w-6xl mx-auto py-20 px-4">
      <div className="bg-slate-200 p-6 rounded-lg flex justify-center items-center">
        <img className="w-48 rounded-md" src={image} alt={title} />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="pb-5 border-b border-gray-400">
            <span className="font-semibold text-gray-600">Developed By</span> :{" "}
            <span className="text-purple-600">{companyName}</span>
          </p>

          <div className="flex gap-10 py-10">
            <span className="text-center">
              <Download className="text-green-500 mx-auto" />
              <p>Downloads</p>
              <span className="text-2xl font-bold py-3 block">
                {downloads}+
              </span>
            </span>
            <span className="text-center">
              <Star className="text-yellow-400 mx-auto" />
              <p>Average Rating</p>
              <span className="text-2xl font-bold py-3 block">{ratingAvg}</span>
            </span>
            <span className="text-center">
              <HandHeart className="text-purple-500 mx-auto" />
              <p>Total Reviews</p>
              <span className="text-2xl font-bold py-3 block">{reviews}</span>
            </span>
          </div>
        </div>

        <button
          onClick={handleBtn}
          className={`btn px-6 py-3 rounded-md text-white font-semibold transition ${
            install
              ? "bg-gray-400"
              : "bg-[rgba(0,211,144,1)] hover:bg-green-500"
          }`}>
          {install ? "Installed" : `Install Now (${size} MB)`}
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default HomeAppDetails;
