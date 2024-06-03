import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaQuestionCircle, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { useState } from "react";

const SideBar = () => {
  const [closeSidebar, setCloseSidebar] = useState(false);
  const currentUrl = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={`relative   min-h-screen flex justify-center py-5 transition-all duration-300 ease-in-out ${
        !closeSidebar ? "border-r-2 px-3" : "px-2"
      }`}
    >
      <ul className={`"space-y-5"`}>
        {routes?.map((item) => {
          // console.log(item?.path);
          return (
            <li
              key={item?.path}
              className={`${
                currentUrl?.pathname === item?.path ? "bg-blue-900 text-white" : ""
              } flex items-center justify-center h-12  rounded-md cursor-pointer ${!closeSidebar && "gap-2"} px-3 `}
            >
              <span
                title={closeSidebar && item.name}
                onClick={() => navigate(item?.path)}
                className="text-2xl flex items-center justify-center"
              >
                {item?.icons}
              </span>
              <Link className="w-full block" to={item?.path}>
                <span className={`${closeSidebar ? "hidden" : ""} `}> {item?.name}  </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="z-10" onClick={() => setCloseSidebar((prev) => !prev)}>
        <FaRegArrowAltCircleRight
          className={`text-3xl absolute -right-5 top-7 bg-white ${closeSidebar ? "hidden" : ""}`}
        />
        <FaRegArrowAltCircleLeft
          className={`text-3xl absolute -right-6 top-7 bg-white ${closeSidebar ? "" : "hidden"}`}
        />
      </button>
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
