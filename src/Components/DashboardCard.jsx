import { RiDiscountPercentFill } from "react-icons/ri";
import { MdOutlinePageview } from "react-icons/md";
import { BsBoxArrowInDown } from "react-icons/bs";
import BarchartDashboard from "./BarchartDashboard";
import LineBarAreaComposedChartDashboard from "./LineBarAreaComposedChartDashboard";

const DashboardCard = () => {
  return (
    <div>
      <div className="md:grid xl:grid-cols-5 md:grid-cols-2 flex flex-col p-5 gap-2">
        <div className="bg-white shadow-md rounded-md md:p-4 p-1  md:w-full ">
          <div className="flex items-center justify-center md:gap-10 gap-2 md:h-20">
            <RiDiscountPercentFill className="md:text-5xl text-4xl" />
            <div>
              <p className="md:text-3xl">49.65%</p>
              <p className="md:text-2xl text-slate-400">Performance</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md md:p-4 p-1  md:w-full ">
          <div className="flex items-center justify-center md:gap-10 gap-2 md:h-20">
            <MdOutlinePageview className="md:text-5xl text-4xl" />
            <div>
              <p className="md:text-3xl">66.36%</p>
              <p className="md:text-2xl text-slate-400">Page View</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-md md:p-4 p-1  md:w-full">
          <div className="flex items-center justify-center md:gap-10 gap-2 md:h-20">
            <BsBoxArrowInDown className="md:text-5xl text-4xl" />
            <div>
              <p className="md:text-3xl">558</p>
              <p className="md:text-2xl text-slate-400">Total Downloads</p>
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
