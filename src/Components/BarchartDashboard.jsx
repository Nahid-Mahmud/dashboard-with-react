import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const BarchartDashboard = () => {
  const data = [
    {
      name: "Week 1 - May",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Week 2 - May",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Week 3 - May",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Week 4 - May",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Week 5 - May",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Week 6 - June",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Week 7 - June",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-5  lg:w-auto">
      <BarChart width={830} height={350} data={data} className="w-1/2">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#003285" />
        <Bar dataKey="uv" fill="#2A629A" />
      </BarChart>

      <p className="font-bold text-2xl border-b-4 border-slate-950 pb-2">Week Performance</p>
    </div>
  );
};

export default BarchartDashboard;
