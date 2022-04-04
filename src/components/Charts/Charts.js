import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useData from "../../hooks/useData";

const Charts = () => {
  const [data] = useData([]);
  return (
    <div className="flex justify-between mt-20">
      <LineChart width={400} height={300} data={data}>
        <Line dataKey="investment" stroke="#8884d8" />
        <Line
          dataKey="sell"
          stroke="#d68b00
"
        />
        <Line
          dataKey="revenue"
          stroke="#0000d6
"
        />
        <XAxis dataKey={"month"} />
        <Tooltip />
        <YAxis />
      </LineChart>

      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#d68b00
"
        />
        <Line type="monotone" dataKey="sell" stroke="#ad00ad" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <Tooltip />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Charts;
