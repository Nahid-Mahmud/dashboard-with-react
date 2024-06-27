import { useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaQuestionCircle, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { useEffect } from "react";

const SideBar = ({ closeSidebar, setCloseSidebar }) => {
  const currentUrl = useLocation();
  const navigate = useNavigate();

  // useEffect to update local storage whenever closeSidebar changes
  useEffect(() => {
    localStorage.setItem("sidebar", JSON.stringify(closeSidebar));
  }, [closeSidebar]);

  return (
    <div
      className={` fixed md:static min-h-screen h-full bg-white flex justify-start py-5 transition-all duration-300 ease-in-out ${
        !closeSidebar ? " w-64 px-4 " : "  w-16 p-2"
      } z-10 border `}
    >
      <ul className={`space-y-5 w-full`}>
        {routes?.map((item) => {
          // console.log(item?.path);
          return (
            <li
              onClick={() => navigate(item?.path)}
              key={item?.path}
              className={`${currentUrl?.pathname === item?.path ? "bg-blue-900 text-white" : ""} ${
                closeSidebar ? "" : "justify-center"
              } flex items-center  h-12  rounded-md cursor-pointer ${!closeSidebar && "gap-2"} px-3 `}
            >
              <span title={closeSidebar ? item.name : ""} onClick={() => navigate(item?.path)} className="text-2xl ">
                {item?.icons}
              </span>

              <span
                className={`${
                  closeSidebar ? "opacity-0" : "opacity-100"
                } transition-opacity duration-500 ease-in-out block w-full`}
              >
                {" "}
                {item?.name}{" "}
              </span>
            </li>
          );
        })}
        <li
          title={closeSidebar ? "Open Menu" : ""}
          className={` inline-block whitespace-nowrap h-12  rounded-md cursor-pointer md:px-3 `}
        >
          <button
            className="flex items-center justify-center gap-[0.3rem] sm:gap-0"
            onClick={() => setCloseSidebar((prev) => !prev)}
          >
            <FaRegArrowAltCircleRight className={`text-3xl  bg-white ${closeSidebar ? "hidden" : "block"}`} />
            <FaRegArrowAltCircleLeft className={`text-3xl  bg-white ${closeSidebar ? "block" : "hidden"}`} />
            <span
              className={`${
                closeSidebar ? "opacity-0" : "opacity-100"
              } block w-full duration-500 ease-in-out transition-opacity `}
            >
              {" "}
              Close Menu{" "}
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

// routes

const routes = [
  {
    id: 1,
    path: "/home",
    name: "Home",
    icons: <FaHome />,
  },
  {
    id: 2,
    path: "/about",
    name: "About",
    icons: <FaQuestionCircle />,
  },
  {
    id: 3,
    path: "/contact",
    name: "Contact",
    icons: <MdOutlineContactPhone />,
  },
  {
    id: 4,
    path: "/services",
    name: "Services",
    icons: <GrServices />,
  },
  {
    id: 5,
    path: "/dashboard",
    name: "Dashboard",
    icons: <MdOutlineDashboard />,
  },
];

export default SideBar;
