import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "February",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "March",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "April",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "May",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "June",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

const LineBarAreaComposedChartDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5  lg:w-auto w-96  scroll-mx-10 scroll-auto overflow-x-auto">
      <p className="font-bold text-2xl border-b-4 border-slate-950 pb-2">Month Performance</p>

      <ComposedChart
        width={830}
        height={350}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Scatter dataKey="cnt" fill="red" />
      </ComposedChart>
    </div>
  );
};

export default LineBarAreaComposedChartDashboard;
