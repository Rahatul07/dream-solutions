import React, { PureComponent } from "react";
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
    <div className="mt-16 mx-auto " style={{ width: "80%", height: 300 }}>
      <h1 className="mb-20 text-5xl font-bold text-center text-purple-600">
        Assignment Marks
      </h1>
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
  );
};

export default Statistics;
