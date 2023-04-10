import React, { PureComponent } from "react";
import vector from "../../assets/All Images/Vector.png";
import vector2 from "../../assets/All Images/Vector-1.png";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "As-One",
    obtainMark: 57,
    totalMark: 60,
  },
  {
    name: "As-Two",
    obtainMark: 60,
    totalMark: 60,
  },
  {
    name: "As-Three",
    obtainMark: 50,
    totalMark: 60,
  },
  {
    name: "As-Four",
    obtainMark: 57,
    totalMark: 60,
  },
  {
    name: "As-Five",
    obtainMark: 42,
    totalMark: 60,
  },
  {
    name: "As-Six",
    obtainMark: 55,
    totalMark: 60,
  },
  {
    name: "As-Seven",
    obtainMark: 60,
    totalMark: 60,
  },
  {
    name: "As-Eight",
    obtainMark: 60,
    totalMark: 60,
  },
];
const Statistics = () => {
  return (
    <div>
      {" "}
      <div className="mx-auto w-full h-44 bg-purple-50 relative">
        <h1 className="  pt-14  mb-20 text-5xl font-bold text-center text-purple-600">
          {" "}
          Assignment Marks
        </h1>
        <img className="absolute bottom-0 left-0 w-60" src={vector} alt="" />
        <img className="absolute top-0 right-0 w-60" src={vector2} alt="" />
      </div>
      <div className="mt-16 mx-auto " style={{ width: "80%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="obtainMark"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
