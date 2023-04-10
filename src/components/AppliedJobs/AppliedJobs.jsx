import React from "react";
import vector from "../../assets/All Images/Vector.png";
import vector2 from "../../assets/All Images/Vector-1.png";
import img1 from "../../assets/Icons/Location Icon.png";
import img2 from "../../assets/Icons/Frame.png";

const AppliedJobs = () => {
  return (
    <div>
      <div className="mx-auto w-full h-44 bg-purple-50 relative">
        <h1 className="pt-14  mb-20 text-5xl font-bold text-center text-purple-600">
          Applied Jobs
        </h1>
        <img className="absolute bottom-0 left-0 w-60" src={vector} alt="" />
        <img className="absolute top-0 right-0 w-60" src={vector2} alt="" />
      </div>
      <div>
        <div className="mt-5 text-right mr-20">
          <select className="select select-bordered w-36 max-w-xs bg-purple-100 ">
            <option disabled selected>
              Filter By
            </option>
            <option>Show remote jobs</option>
            <option>Show onside jobs</option>
          </select>
        </div>
        {/* Card */}
        <div className="grid grid-cols-[1fr_3fr_1fr]  bg-purple-50 w-3/5  mx-auto rounded-lg ">
          <div className="border border-purple-500 h-36 w-36 m-5 rounded-lg ">
            <h1 className="">Image</h1>
          </div>
          <div className="ml-5 my-3">
            <h1 className="text-2xl font-bold">Title</h1>
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
                <img className="mr-2" src={img1} alt="" />
                <p>Location</p>
              </div>
              <div className="ml-10 flex">
                <img className="mr-2" src={img2} alt="" />
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
  );
};

export default AppliedJobs;
