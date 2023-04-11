import React from "react";
import img5 from "../../assets/Icons/Location Icon.png";
import img6 from "../../assets/Icons/Frame.png";

const Card = ({ job }) => {
  const { title, companyName, img, location, salary } = job;
  console.log(job);
  return (
    <div>
      <div className="  bg-purple-50  rounded-xl  text-left h-full pl-5 my-5 relative border border-purple-400">
        <div className=" h-20 w-36 ml-5 rounded-lg mt-5">
          <img src={img} alt="" />
        </div>
        <div className="ml-5 ">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-xl text-gray-400">{companyName}</p>
          <div className="mt-3">
            <button className="border border-purple-600 px-4 py-1 rounded-md text-purple-700 font-medium">
              Remote
            </button>
            <button className="border border-purple-600 px-4 py-1 rounded-md text-purple-700 font-medium ml-5">
              Full Time
            </button>
          </div>
          <div className="flex mt-3 pr-5">
            <div className="flex">
              <img className="mr-2" src={img5} alt="" />
              <p>{location}</p>
            </div>
            <div className="ml-10 flex">
              <img className="mr-2" src={img6} alt="" />
              <p>{salary}</p>
            </div>
          </div>
        </div>
        <div className="items-center ml-5 mt-14">
          <a className="btn2 absolute bottom-7 ">View Details</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
