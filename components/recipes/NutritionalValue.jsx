import React from "react";
import Image from "next/image";

const NutritionalValue = ({ nutritionalValue }) => {
  return (
    <div className="print:hidden">
      <h2 className="mb-5">Nutrition Facts</h2>

      <div className="w-[350px]">
        {nutritionalValue.map((nv, index) => {
          return (
            <div key={index}>
              {nv.unit === "Servings" && (
                <div>
                  <p className="font-semibold">Servings: {nv.value}</p>
                  <hr className="my-1 border-4" />
                  <p className="font-semibold">Amount per serving</p>
                </div>
              )}

              {nv.unit === "Calories" && (
                <div className="my-2 flex justify-between text-xl font-extrabold">
                  <p>{nv.unit}</p>
                  <p>{nv.value}</p>
                </div>
              )}

              {nv.unit === "Total Fat" && (
                <div className="mt-2 mb-1 flex justify-between">
                  <p className="font-extrabold">{nv.unit}</p>
                  <p>{nv.value}</p>
                </div>
              )}

              {nv.unit === "Saturated Fat" && (
                <div className="mb-2 flex justify-between text-sm">
                  <p className="pl-4 font-semibold">{nv.unit}</p>
                  <p>{nv.value}</p>
                </div>
              )}

              {nv.unit === "Cholesterol" && (
                <div className="mb-2 flex justify-between">
                  <p className="font-extrabold">{nv.unit}</p>
                  <p>{nv.value}</p>
                </div>
              )}

              {nv.unit === "Sodium" && (
                <div className="mb-2 flex justify-between">
                  <p className="font-extrabold">{nv.unit}</p>
                  <p>{nv.value}</p>
                </div>
              )}

              {nv.unit === "Total Carbohydrate" && (
                <div className="mt-2 mb-1 flex justify-between">
                  <p className="font-extrabold">{nv.unit}</p>
                  <p>{nv.value}</p>
                </div>
              )}

              {nv.unit === "Dietary Fiber" && (
                <div className="mb-1 flex justify-between text-sm">
                  <p className="pl-4 font-semibold">{nv.unit}</p>
                  <p>{nv.value}</p>
                </div>
              )}

              {nv.unit === "Total Sugars" && (
                <div className="mb-2 flex justify-between text-sm">
                  <p className="pl-4 font-semibold">{nv.unit}</p>
                  <p>{nv.value}</p>
                </div>
              )}

              {nv.unit === "Protein" && (
                <>
                  <div className="mb-2 flex justify-between">
                    <p className="font-extrabold">{nv.unit}</p>
                    <p>{nv.value}</p>
                  </div>
                  <hr className="mt-1 mb-2 border-4" />
                </>
              )}
              {nv.unit === "Vitamin D" && (
                <div className="mb-2 flex justify-between">
                  <p className="font-semibold">{nv.unit}</p>
                  <p>{nv.value}</p>
                </div>
              )}
              {nv.unit === "Calcium" && (
                <div className="mb-2 flex justify-between">
                  <p className="font-semibold">{nv.unit}</p>
                  <p>{nv.value}</p>
                </div>
              )}
              {nv.unit === "Iron" && (
                <div className="mb-2 flex justify-between">
                  <p className="font-semibold">{nv.unit}</p>
                  <p>{nv.value}</p>
                </div>
              )}
              {nv.unit === "Potassium" && (
                <div className="mb-2 flex justify-between">
                  <p className="font-semibold">{nv.unit}</p>
                  <p>{nv.value}</p>
                </div>
              )}
            </div>
          );
        })}

        <div className="mt-3 flex items-center text-xs">
          <span className="mr-1 text-gray-600">Recipe analyzed by</span>
          <img
            src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/logo-nutrition-label_sHdyvUJb9.png"
            alt="Very well logo"
            className="w-[75px] align-middle"
          />
        </div>
      </div>
    </div>
  );
};

export default NutritionalValue;
