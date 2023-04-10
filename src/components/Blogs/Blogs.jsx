import React from "react";
import vector from "../../assets/All Images/Vector.png";
import vector2 from "../../assets/All Images/Vector-1.png";

const Blogs = () => {
  return (
    <div className="mx-auto w-full h-44 bg-purple-50 relative">
      <h1 className="pt-14  mb-20 text-5xl font-bold text-center text-purple-600">
        Blogs
      </h1>
      <img className="absolute bottom-0 left-0 w-60" src={vector} alt="" />
      <img className="absolute top-0 right-0 w-60" src={vector2} alt="" />
    </div>
  );
};

export default Blogs;
