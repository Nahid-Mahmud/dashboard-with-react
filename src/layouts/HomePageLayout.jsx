import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";

export default function MainLayout() {
  return (
    <Fragment>
      <div className="flex md:gap-10 ">
        {/* Side navigation bar  */}
        <div className="min-h-screen">
          <SideBar />
        </div>
        {/* Main content */}
        <div className="flex-1 pt-6 pl-5 ml-12 md:p-0">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}
