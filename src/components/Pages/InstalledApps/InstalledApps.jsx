import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import { getInstalledApp, removeAppFromStore } from "../../../Utility/adToApp";
import ShowInstalled from "../ShowInstalled/ShowInstalled";

const InstalledApps = () => {
  const [installedApp, setInstalledApp] = useState([]);
  const data = useLoaderData();
  const [sort, setSort] = useState("");

  const handleUninstall = (appIdToRemove) => {
    const newAppsList = installedApp.filter((app) => app.id !== appIdToRemove);
    setInstalledApp(newAppsList);

    removeAppFromStore(appIdToRemove);
  };

  useEffect(() => {
    const storeAppData = getInstalledApp();

    const convertedStoredApp = storeAppData.map((id) => parseInt(id));

    const myInstalledApp = data.filter((app) =>
      convertedStoredApp.includes(app.id)
    );
    setInstalledApp(myInstalledApp);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    let sortedList = [...installedApp];

    if (type === "size") {
      sortedList.sort((a, b) => a.size - b.size);
    }

    if (type == "ratings") {
      sortedList.sort((a, b) => a.ratingAvg - b.ratingAvg);
    }
    setInstalledApp(sortedList);
  };

  return (
    <div>
      <div className="bg-slate-300">
        <div className="flex items-center justify-center gap-50">
          <h2 className="py-10 text-3xl font-bold">
            Installed App ({installedApp.length})
          </h2>
          <details className="dropdown">
            <summary className="btn m-1">Sort by : {sort ? sort : ""} </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <a onClick={() => handleSort("size")}>Sort by Size</a>
              </li>
              <li>
                <a onClick={() => handleSort("ratings")}>Sort by ratings</a>
              </li>
            </ul>
          </details>
        </div>

        <div className="">
          {installedApp.map((app) => (
            <ShowInstalled
              key={app.id}
              app={app}
              handleUninstall={handleUninstall}
            />
          ))}
        </div>

        {installedApp.length === 0 && (
          <p className="text-center py-20 text-gray-600 font-medium">
            No apps currently installed.
          </p>
        )}
      </div>
      <div className="py-10 flex justify-center">
        <a href="/">
          <button className="btn bg-purple-500 font-semibold text-white">
            Back to Home
          </button>
        </a>
      </div>
    </div>
  );
};

export default InstalledApps;
