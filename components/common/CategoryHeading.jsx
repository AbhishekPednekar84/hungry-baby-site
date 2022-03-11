import React from "react";

const CategoryHeading = ({ heading }) => {
  const formattedHeading = (mainHeading) => {
    return (
      mainHeading.split("")[0].toUpperCase() +
      mainHeading.split("").join("").slice(1)
    );
  };

  return (
    <div className="heading-container pt-36">
      <div className="max-w-max">
        <h1 className="pb-2 text-center ">{formattedHeading(heading)}</h1>
        <div className="heading-underline"></div>
      </div>
    </div>
  );
};

export default CategoryHeading;
