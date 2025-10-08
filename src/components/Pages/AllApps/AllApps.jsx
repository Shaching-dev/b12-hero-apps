import React from "react";
import { Link, useLoaderData } from "react-router";
import ShowAll from "../ShowAll/ShowAll";

const AllApps = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <>
      <Link>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-xl py-10">
            ({data.length}) Apps Found
          </h2>
          <div className="grid grid-cols-4 gap-10 pb-20">
            {data.map((item) => (
              <ShowAll key={item.id} item={item}></ShowAll>
            ))}
          </div>
          <div className="flex justify-center pb-10">
            <Link to={"/"}>
              <button className="btn bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AllApps;
