import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import image from "../../assets/All Images/home img.png";
import img1 from "../../assets/Icons/accounts 1.png";
import img2 from "../../assets/Icons/business 1.png";
import img3 from "../../assets/Icons/social-media 1.png";
import img4 from "../../assets/Icons/chip 1.png";
import { useLoaderData } from "react-router-dom";
import JobDetails from "../JobDetails/JobDetails";
import { JobContext } from "../../App";
import vector from "../../assets/All Images/Vector.png";
import vector2 from "../../assets/All Images/Vector-1.png";
import img5 from "../../assets/Icons/Location Icon.png";
import img6 from "../../assets/Icons/Frame.png";

const Home = () => {
  const jobData = useContext(JobContext);
  const [getJob, setGetJob] = useState([]);
  useEffect(() => {
    for (const job of jobData) {
      setGetJob(job);
    }
  }, []);
  const { title, companyName, img } = getJob;
  console.log(getJob);
  return (
    <div>
      <div className="lg:flex lg:justify-between  my-container  items-center">
        <div className="pl-10">
          <h1 className=" pt-7 pb-10 text-4xl lg:text-7xl font-bold ">
            YOUR <span className="text-purple-600">DREAM JOB</span> HAS ALREADY
            HAPPENED
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
            <div>
              {/* Card */}
              <div className="  bg-purple-50 w-3/5  mx-auto rounded-lg ">
                <div className="border border-purple-500 h-36 w-36 m-5 rounded-lg ">
                  <img src={img} alt="" />
                </div>
                <div className="ml-5 my-3">
                  <h1 className="text-2xl font-bold">{title}</h1>
                  <p className="text-xl text-gray-400">Company</p>
                  <div className="mt-3">
                    <button className="border border-purple-600 px-4 py-1 rounded-md text-purple-700 font-medium">
                      Remote
                    </button>
                    <button className="border border-purple-600 px-4 py-1 rounded-md text-purple-700 font-medium ml-5">
                      Full Time
                    </button>
                  </div>
                  <div className="flex mt-3">
                    <div className="flex">
                      <img className="mr-2" src={img5} alt="" />
                      <p>Location</p>
                    </div>
                    <div className="ml-10 flex">
                      <img className="mr-2" src={img6} alt="" />
                      <p>Salary</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mx-auto pr-5">
                  <a className="btn2">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
