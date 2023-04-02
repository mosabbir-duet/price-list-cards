import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Link from "../Link/Link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about" },
    { id: 3, name: "Contact Us", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Services", path: "/services" },
  ];

  return (
    <nav className="bg-orange-300 p-5">
      <div onClick={() => setOpen(!open)} className="inline-block md:hidden ">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-orange-600"></XMarkIcon>
          ) : (
            <Bars3Icon className="h-6 w-6 text-orange-600" />
          )}
        </span>
      </div>
      <ul
        className={`md:flex  absolute md:static pl-5 pb-4 duration-500 bg-orange-300  ${
          open ? "top-16" : "-top-36"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
