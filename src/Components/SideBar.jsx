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
      className={` fixed md:static min-h-screen h-full bg-white flex justify-center py-5 transition-all duration-300 ease-in-out ${
        !closeSidebar ? "border px-4 " : " border p-2"
      } z-10  `}
    >
      <ul className={`"space-y-5"`}>
        {routes?.map((item) => {
          // console.log(item?.path);
          return (
            <li
              onClick={() => navigate(item?.path)}
              key={item?.path}
              className={`${
                currentUrl?.pathname === item?.path ? "bg-blue-900 text-white" : ""
              } flex items-center justify-center h-12  rounded-md cursor-pointer ${!closeSidebar && "gap-2"} px-3 `}
            >
              <span
                title={closeSidebar ? item.name : ""}
                onClick={() => navigate(item?.path)}
                className="text-2xl flex items-center justify-center"
              >
                {item?.icons}
              </span>

              <span className={`${closeSidebar ? "hidden" : ""} block w-full`}> {item?.name} </span>
            </li>
          );
        })}
        <li
          title={closeSidebar ? "Open Menu" : ""}
          className="flex items-center justify-center h-12  rounded-md cursor-pointer md:px-3 "
        >
          <button
            className=" flex items-center justify-center gap-[0.3rem] sm:gap-0"
            onClick={() => setCloseSidebar((prev) => !prev)}
          >
            <FaRegArrowAltCircleRight className={`text-3xl  bg-white ${closeSidebar ? "hidden" : ""}`} />
            <FaRegArrowAltCircleLeft className={`text-2xl  bg-white ${closeSidebar ? "" : "hidden"}`} />
            <span className={`${closeSidebar ? "hidden" : ""} block w-full  `}> Close Menu </span>
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
