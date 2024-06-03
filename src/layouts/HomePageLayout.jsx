import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";

export default function MainLayout() {
  return (
    <Fragment>
      <div className="flex gap-5">
        {/* Side navigation bar  */}
        <div className="w-1/12 min-h-screen flex justify-center py-5 border-r-2">
          <SideBar />
        </div>
        {/* Main content */}
        <div className="flex-1 p-5">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}
