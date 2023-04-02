import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-8">
        <a className="text-blue-800 text-xl" href={route.path}>
          {route.name}
        </a>
      </li>
    </div>
  );
};

export default Link;
