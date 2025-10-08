import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router";
import Footer from "../Footer/Footer";
import { ClockLoader, RiseLoader } from "react-spinners";

const useDelayedLoading = (delay = 2000) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname, delay]);

  return isLoading;
};

const Root = () => {
  const isLoading = useDelayedLoading(1000);

  const FullPageLoader = () => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 9999,
        gap: "30px",
      }}>
      <ClockLoader color="#36d7b7" size={60} />
      <div style={{ textAlign: "center" }}>
        <RiseLoader color="#36d7b7" size={8} />
        <p style={{ marginTop: "20px", color: "#333", fontSize: "18px" }}>
          Loading please wait...
        </p>
      </div>
    </div>
  );

  return (
    <div>
      {isLoading && <FullPageLoader />}

      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
