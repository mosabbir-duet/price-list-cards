import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-sky-200 p-5 rounded-md">
      <h2 className="text-5xl text-center font-semibold text-orange-500 pb-6">
        {price.name}
      </h2>
      <img className="rounded-xl" src={price.image} alt="" />
      <h3 className="font-semibold text-4xl my-3 ">Price: {price.price}</h3>
      <h5 className="text-4xl mb-2">Features:</h5>
      {price.features.map((feature, idx) => (
        <Feature key={idx} feature={feature} />
      ))}
    </div>
  );
};

export default PriceCard;
