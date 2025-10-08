import React from "react";
import { Link, useLoaderData } from "react-router";
import Apps from "../Pages/Apps";

const Home = () => {
  const data = useLoaderData();
  //   console.log(data);

  return (
    <>
      <div className="py-10">
        <h1 className="text-4xl font-bold text-center">
          We Build <br /> <span className="text-[#9f62f2]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-center text-gray-500 py-5">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center gap-10 py-5">
          <button className="btn">
            <img className="w-7" src={"/google-play.png"} alt="" />
            Google Play
          </button>

          <button className="btn">
            <img className="w-7" src={"/apps-icon.png"} alt="" />
            App Store
          </button>
        </div>
        <span className="flex justify-center px-20 md:px-0 lg:px-0">
          <img className="w-150" src={"/hero.png"} alt="" />
        </span>
        <div className="bg-[linear-gradient(125.07deg,#632EE3_0%,#9F62F2_100%)] p-5">
          <h1 className="text-5xl font-bold text-white text-center py-10">
            Trusted By Millions, Built For You
          </h1>
          <div className="flex flex-col items-center md:flex-row justify-center gap-20 text-white">
            <div>
              <p className="text-gray-300">Total Downloads</p>
              <h1 className="font-bold text-4xl py-3">29.6M</h1>
              <p className="text-gray-300">21% More Than Last Month</p>
            </div>

            <div>
              <p className="text-gray-300">Total Reviews</p>
              <h1 className="font-bold text-4xl py-3">906K</h1>
              <p className="text-gray-300">46% More Than Last Month</p>
            </div>

            <div>
              <p className="text-gray-300">Active Apps</p>
              <h1 className="font-bold text-4xl py-3">132+</h1>
              <p className="text-gray-300">31 More Will launch</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Trending Apps</h2>
        <p className="text-gray-300 text-center py-5">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-1 px-20 md:px-0 lg:px-0 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {data.map((item) => (
            <Apps key={item.id} item={item}></Apps>
          ))}
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center py-10  ">
            <Link to={"/allApps"}>
              <button className="btn text-white font-semibold px-10 bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)]">
                Show All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
