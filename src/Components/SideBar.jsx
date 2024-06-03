import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaQuestionCircle, FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";

const SideBar = () => {
  const currentUrl = useLocation();

  return (
    <div className="relative">
      <ul className="space-y-5">
        {routes?.map((item) => {
          console.log(item?.path);
          return (
            <li
              key={item?.path}
              className={`${
                currentUrl?.pathname === item?.path ? "bg-blue-900 text-white" : ""
              } flex items-center justify-center h-12 rounded-md cursor-pointer gap-2 px-3`}
            >
              <span className="text-2xl">{item?.icons}</span>
              <Link className="w-full block" to={item?.path}>
                {item?.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <FaRegArrowAltCircleRight className="text-3xl absolute -right-7 top-0" />
    </div>
  );
};

// routes

const routes = [
  {
    id: crypto.randomUUID(),
    path: "/home",
    name: "Home",
    icons: <FaHome />,
  },
  {
    id: crypto.randomUUID(),
    path: "/about",
    name: "About",
    icons: <FaQuestionCircle />,
  },
  {
    id: crypto.randomUUID(),
    path: "/contact",
    name: "Contact",
    icons: <MdOutlineContactPhone />,
  },
  {
    id: crypto.randomUUID(),
    path: "/services",
    name: "Services",
    icons: <GrServices />,
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard",
    name: "Dashboard",
    icons: <MdOutlineDashboard />,
  },
];

export default SideBar;
