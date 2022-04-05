import React from "react";
import Charts from "../Charts/Charts";

const DashBoard = () => {
  return (
    <div>
      <h1 className="text-center my-2 text-4xl text-orange-700 mt-3">
        Here Shown up Our Employees Salary!!
      </h1>
      <div className="flex justify-center">
        <Charts></Charts>
      </div>
    </div>
  );
};

export default DashBoard;
