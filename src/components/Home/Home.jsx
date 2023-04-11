import React, { useContext, useState } from "react";
import image from "../../assets/All Images/home img.png";
import img1 from "../../assets/Icons/accounts 1.png";
import img2 from "../../assets/Icons/business 1.png";
import img3 from "../../assets/Icons/social-media 1.png";
import img4 from "../../assets/Icons/chip 1.png";

import Card from "../Card/Card";

import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <div>
        <div className="lg:flex lg:justify-between  my-container  items-center">
          <div className="pl-10">
            <h1 className=" pt-7 pb-10 text-4xl lg:text-7xl font-bold ">
              YOUR <span className="text-purple-600">DREAM JOB</span> HAS
              ALREADY HAPPENED
            </h1>
            <p className="pb-5">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <a className="btn">Get Started</a>
          </div>
          <div>
            <img className="h-full w-screen" src={image} alt="" />
          </div>
        </div>
        <div className="text-center mb-10">
          <h1 className="pb-2 text-center text-4xl font-bold ">
            Job Category List
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="mb-5  md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-10 container mx-auto ">
            <div className="bg-purple-50 w-60 rounded-xl text-left p-7 mx-auto  py-10  mb-10 ">
              <img className="pb-3 text-sky-100" src={img1} alt="" />
              <h1 className="text-lg font-bold ">Account & Finance</h1>
              <p>
                <small>300 Jobs Available</small>
              </p>
            </div>
            <div className="bg-purple-50 w-60 rounded-xl text-left p-7 mx-auto py-10 mb-10">
              <img className="pb-3 text-sky-100" src={img2} alt="" />
              <h1 className="text-lg font-bold">Creative Design</h1>
              <p>
                <small>100+ Jobs Available</small>
              </p>
            </div>
            <div className="bg-purple-50 w-60 rounded-xl text-left p-7 mx-auto py-10 mb-10">
              <img className="pb-3 text-sky-100" src={img3} alt="" />
              <h1 className="text-lg font-bold">Marketing & Sales</h1>
              <p>
                <small>150 Jobs Available</small>
              </p>
            </div>
            <div className="bg-purple-50 w-60 rounded-xl text-left p-7 mx-auto py-10 mb-10">
              <img className="pb-3 text-sky-100" src={img4} alt="" />
              <h1 className="text-lg font-bold">Engineering Job</h1>
              <p>
                <small>224 Jobs Available</small>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-10 ">
          <h1 className="pb-2 text-center text-4xl font-bold">Featured Jobs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2  w-3/5 lg:w-4/5   mx-auto gap-16 my-5 ">
                {data.map((job) => (
                  <Card key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
