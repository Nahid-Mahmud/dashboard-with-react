import { RiDiscountPercentFill } from "react-icons/ri";
import { MdOutlinePageview } from "react-icons/md";
import { BsBoxArrowInDown } from "react-icons/bs";
import BarchartDashboard from "./BarchartDashboard";
import LineBarAreaComposedChartDashboard from "./LineBarAreaComposedChartDashboard";

const DashboardCard = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-5 md:grid-cols-2 p-5 gap-4">
        <div className="bg-white shadow-md rounded-md p-4 ">
          <div className="flex items-center justify-center gap-10 h-20">
            <RiDiscountPercentFill className="text-5xl" />
            <div>
              <p className="text-3xl">49.65%</p>
              <p className="text-2xl text-slate-400">Performance</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 ">
          <div className="flex items-center justify-center gap-10 h-20">
            <MdOutlinePageview className="text-5xl" />
            <div>
              <p className="text-3xl">66.36%</p>
              <p className="text-2xl text-slate-400">Page View</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 ">
          <div className="flex items-center justify-center gap-10 h-20">
            <BsBoxArrowInDown className="text-5xl" />
            <div>
              <p className="text-3xl">66.36%</p>
              <p className="text-2xl text-slate-400">Total Downloads</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts foom recharts */}

      <div className="xl:grid xl:grid-cols-2 flex flex-col gap-5">
        <BarchartDashboard />
        <LineBarAreaComposedChartDashboard />
      </div>
    </div>
  );
};

export default DashboardCard;
