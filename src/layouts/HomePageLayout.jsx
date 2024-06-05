import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";
import useGetSidebarStateFromLocalStorage from "../Hooks/useGetSidebarStateFromLocalStorage";

export default function MainLayout() {
  const sidebarDataFromLocalStorage = useGetSidebarStateFromLocalStorage();
  const [closeSidebar, setCloseSidebar] = useState(sidebarDataFromLocalStorage);
  // onMouseEnter
  const openSidebarOnMouseEnter = () => {
    setCloseSidebar(false);
  };

  // onMouse leave

  const closeSidebarOnClick = (e) => {
    e.stopPropagation();
    setCloseSidebar(true);
  };
  return (
    <Fragment>
      <div className="flex md:gap-10 ">
        {/* Side navigation bar  */}
        <div onMouseEnter={openSidebarOnMouseEnter} className="min-h-screen">
          <SideBar closeSidebar={closeSidebar} setCloseSidebar={setCloseSidebar} />
        </div>
        {/* Main content */}
        <div onClick={(e) => closeSidebarOnClick(e)} className="flex-1 pt-6 pl-5 ml-12 md:p-0">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}
