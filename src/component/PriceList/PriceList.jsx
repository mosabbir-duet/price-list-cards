import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-orange-700 bg-orange-300 text-5xl text-center py-2 mb-10">
        Affordable Prices....
      </h2>
      <div className="grid md:grid-cols-3 gap-10 mx-10">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
