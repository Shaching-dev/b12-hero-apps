import { Download, HandHeart, Link, Star } from "lucide-react";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const [install, setInstall] = useState(false);

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
  const {
    image,
    title,
    companyName,
    ratings,
    ratingAvg,
    reviews,
    description,
    downloads,
    size,
  } = singleApp;
  return (
    <div className="">
      <div className="flex cursor-pointer justify-center gap-20 max-w-6xl mx-auto py-20 border-b border-gray-500 transition-all duration-300 hover:scale-[1.015] hover:-translate-y-0.5 hover:shadow-md">
        <div className="bg-slate-300 p-10 rounded-md">
          <img className="w-50 rounded-sm" src={image} alt="" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="py-5 border-b border-gray-500">
            <p>
              <span className="font-semibold text-gray-300">Developed By</span>{" "}
              : <span className="text-purple-500">{companyName}</span>
            </p>
          </div>
          <div className="flex gap-10 py-10">
            <span>
              <Download className="text-green-500" />
              <p>Downloads</p>
              <span className="text-3xl font-bold py-3">{downloads} +</span>
            </span>
            <span>
              <Star className="text-yellow-400" />
              <p>Average Ratings</p>
              <span className="text-3xl font-bold py-3">{ratingAvg}</span>
            </span>
            <span>
              <HandHeart className="text-purple-500" />
              <p>Total Reviews</p>
              <span className="text-3xl font-bold py-3">{reviews}</span>
            </span>
          </div>
          <button
            onClick={handleBtn}
            className={`btn px-6 cursor-pointer py-3 rounded-md text-white font-semibold transition ${
              install
                ? "bg-gray-400"
                : "bg-[rgba(0,211,144,1)] hover:bg-green-500"
            }`}>
            {install ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
        <ToastContainer />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="underline text-2xl font-bold">Ratings :</h2>
        {ratings && ratings.length > 0 && (
          <div className="bg-white shadow-md p-4 rounded-2xl mt-6">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={ratings}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" tick={{ fill: "#6B7280" }} />
                <YAxis tick={{ fill: "#6B7280" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#F9FAFB",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                  }}
                />
                <Bar
                  dataKey="count"
                  fill="#6366F1"
                  radius={[6, 6, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <div>
        <h1 className="text-center text-3xl font-bold py-10">Description</h1>
        <p className="text-center px-50 py-10">{description}</p>
      </div>
      <div className="flex justify-center pb-10 ">
        <a href={"/allApps"}>
          <button className="btn bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white transition-all duration-300 hover:scale-[1.015] hover:-translate-y-0.5 hover:shadow-md">
            Back to App
          </button>
        </a>
      </div>
    </div>
  );
};

export default AppDetails;
