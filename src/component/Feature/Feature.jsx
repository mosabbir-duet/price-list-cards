import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center">
      <CheckCircleIcon className="h-5 w-5 text-orange-600"></CheckCircleIcon>
      <h5 className="pl-2">{feature}</h5>
    </div>
  );
};

export default Feature;
