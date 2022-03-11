import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-[300px] animate-pulse  rounded-xl">
      <div className="h-[200px] w-[300px] rounded-xl bg-gray-300"></div>
      <div className="py-2">
        <div className="mt-5 h-5 rounded-full bg-gray-300"></div>
        <div className="mt-5 h-5 rounded-full bg-gray-300"></div>
        <div className="mt-3 h-5 w-44 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
