import React from "react";

import img1 from "../../assets/Icons/Location Icon.png";
import img2 from "../../assets/Icons/Frame.png";
import { Link } from "react-router-dom";

const JobCart = ({ apply }) => {
  console.log(apply);

  const { title, companyName, location, salary, id, img } = apply;

  return (
    <div>
      <div className="grid grid-cols-[1fr_3fr_1fr]  bg-purple-50 w-3/5  mx-auto rounded-lg mb-10 border border-purple-500 pt-3">
        <div className=" h-36 w-36 m-5 rounded-lg flex items-center ">
          <img src={img} alt="" />
        </div>
        <div className="ml-5 my-3">
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
          <div className="flex mt-3">
            <div className="flex">
              <img className="mr-2" src={img1} alt="" />
              <p>{location}</p>
            </div>
            <div className="ml-10 flex">
              <img className="mr-2" src={img2} alt="" />
              <p>{salary}</p>
            </div>
          </div>
        </div>
        <Link to={"/"} className="flex  items-center mx-auto mr-5">
          <button className="btn2 bottom-7 ">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default JobCart;
