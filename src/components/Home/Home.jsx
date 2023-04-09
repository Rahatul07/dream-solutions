import React from "react";
import Header from "../Header/Header";
import image from "../../assets/All Images/home img.png";

const Home = () => {
  return (
    <div>
      <div className=" lg:flex justify-between my-container  items-center">
        <div>
          <h1 className=" pt-7 pb-5 text-4xl lg:text-7xl font-bold">
            YOUR <span className="text-blue-400">DREAM JOB</span> HAS ALREADY
            HAPPENED{" "}
          </h1>
          <p className="pb-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <a className="btn">Get Started</a>
        </div>
        <div>
          <img className="h-full w-screen" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
