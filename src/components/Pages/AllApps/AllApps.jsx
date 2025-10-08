import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import ShowAll from "../ShowAll/ShowAll";
import AppsNotFound from "../AppsNotFound/AppsNotFound";
import { PulseLoader } from "react-spinners";

const AllApps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    // Clear existing timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // Set loading state immediately when search changes
    if (search.length > 0) {
      setIsLoading(true);
    }

    // Create new timeout for search
    const timeoutId = setTimeout(() => {
      const filtered = data.filter((item) => {
        const appName = item.title ? item.title.toLowerCase() : "";
        const searchTerm = search.toLowerCase().trim();
        return appName.includes(searchTerm);
      });
      setFilteredData(filtered);
      setIsLoading(false);
    }, 500); // 500ms delay

    setSearchTimeout(timeoutId);

    // Cleanup function
    return () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  }, [search, data]);

  // Handle immediate search when component mounts or data changes
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <>
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-between py-10 px-10">
          <h2 className="font-bold text-xl ">
            {isLoading ? (
              <div className="flex items-center gap-2">
                <span>Searching...</span>
                <PulseLoader size={6} color="#632EE3" />
              </div>
            ) : (
              `(${filteredData.length}) Apps Found`
            )}
          </h2>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              value={search}
              className="grow"
              placeholder="Search Apps"
            />
            {isLoading && (
              <div className="ml-2">
                <PulseLoader size={4} color="#632EE3" />
              </div>
            )}
          </label>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <PulseLoader size={15} color="#632EE3" />
              <p className="mt-4 text-gray-600">Searching for apps...</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 px-20 md:px-0 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-20">
              {filteredData.map((item) => (
                <ShowAll key={item.id} item={item}></ShowAll>
              ))}

              {filteredData.length === 0 && search.length > 0 && (
                <AppsNotFound></AppsNotFound>
              )}
            </div>
            <div className="flex justify-center pb-10">
              <Link to={"/"}>
                <button className="btn bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)] text-white transition-transform duration-200 hover:translate-x-1">
                  Back to Home
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllApps;
