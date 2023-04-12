import React from "react";
import vector from "../../assets/All Images/Vector.png";
import vector2 from "../../assets/All Images/Vector-1.png";
import { useLoaderData } from "react-router-dom";
import JobCart from "../JobCart/JobCart";

const AppliedJobs = () => {
  const { initialCart } = useLoaderData();
  console.log(initialCart);
  const handleFilter = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <div>
        <div className="mx-auto w-full h-44 bg-purple-50 relative">
          <h1 className="pt-14  mb-20 text-5xl font-bold text-center text-purple-600">
            {initialCart.length ? "Applied Jobs" : "No Job Applied"}
          </h1>
          <img className="absolute bottom-0 left-0 w-60" src={vector} alt="" />
          <img className="absolute top-0 right-0 w-60" src={vector2} alt="" />
        </div>
        <div>
          <div className="mt-5 text-right mr-20">
            <select
              onChange={handleFilter}
              className="select select-bordered w-36 max-w-xs bg-purple-100 "
            >
              <option disabled>Filter By</option>
              <option>Remote jobs</option>
              <option>Onside jobs</option>
            </select>
          </div>
        </div>
      </div>
      {initialCart.map((apply) => (
        <JobCart key={apply.id} apply={apply} />
      ))}
    </div>
  );
};

export default AppliedJobs;
