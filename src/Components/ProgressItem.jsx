/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ProgressItem = ({ day, percentage }) => {
  return (
    <div>
      <div className="flex justify-between mt-2">
        <h1 className="ml-5 text-lg text-white">{`Productivity On ${day}`}</h1>
        <h1 className="text-lg text-green-500">{`${percentage}%`}</h1>
      </div>
      <progress
        className="ml-2 mt-1 h-4 border-2 xl:w-[480px] xsm:w-[365px] rounded-md"
        value={percentage}
        max="100"
      ></progress>
    </div>
  );
};

export default ProgressItem;
