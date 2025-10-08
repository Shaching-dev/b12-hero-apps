import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

const ShowAll = ({ item }) => {
  const { image, title, downloads, ratingAvg, id } = item;
  return (
    <Link to={`/allApps/${id}`}>
      <div className="transition-all duration-300 hover:scale-[1.015] hover:-translate-y-0.5 hover:shadow-md">
        <div className="card bg-base-100  shadow-sm border-1 border-gray-300 p-5 cursor-pointer">
          <figure className=" bg-yellow-200 p-5 rounded-lg">
            <img src={image} alt="Shoes" className="rounded-xl w-30" />
          </figure>
          <div className="card-body  text-center">
            <h2>App Name: {title} </h2>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <img src={"/public/total-downloads.png"} alt="" />
                <h3 className="text-green-300">{downloads}</h3>
              </div>
              <div className="flex gap-2 text-yellow-600 items-center">
                <Star></Star>
                <span>{ratingAvg}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShowAll;
