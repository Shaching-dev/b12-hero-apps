import { Download, HandHeart, Star } from "lucide-react";
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

  const {
    image,
    title,
    companyName,
    ratingAvg,
    reviews,
    downloads,
    size,
    description,
    ratings,
  } = singleApp;

  return (
    <>
      <div className="flex flex-col md:flex-row  md:justify-center gap-10 max-w-6xl mx-auto py-20 px-4">
        <div className="bg-slate-200 p-6 rounded-lg flex justify-center items-center">
          <img className="w-48 rounded-md" src={image} alt={title} />
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="pb-5 border-b border-gray-400">
              <span className="font-semibold text-gray-600">Developed By</span>{" "}
              : <span className="text-purple-600">{companyName}</span>
            </p>

            <div className="flex flex-wrap gap-10 py-10">
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
                <span className="text-2xl font-bold py-3 block">
                  {ratingAvg}
                </span>
              </span>
              <span className="text-center">
                <HandHeart className="text-purple-500 mx-auto" />
                <p>Total Reviews</p>
                <span className="text-2xl font-bold py-3 block">{reviews}</span>
              </span>
            </div>

            <button
              onClick={handleBtn}
              className={`btn px-6 py-3 mt-6 rounded-md text-white font-semibold transition ${
                install
                  ? "bg-gray-400"
                  : "bg-[rgba(0,211,144,1)] hover:bg-green-500"
              }`}>
              {install ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>

          <ToastContainer />
        </div>
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
        <a href={"/"}>
          <button className="btn bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white">
            Back to Home
          </button>
        </a>
      </div>
    </>
  );
};

export default HomeAppDetails;
