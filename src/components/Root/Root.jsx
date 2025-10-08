import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { ClipLoader } from "react-spinners";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet>
        <div>
          <ClipLoader color="#36d7b7" size={100} />
        </div>
      </Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Root;
