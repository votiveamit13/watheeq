"use client";
import Navbar from "@/components/clientdashboard/Navbar";
import Sidebar from "@/components/clientdashboard/Sidebar";
import LineChart from "@/components/charts/LineChart";

const lineOptions = {
  chart: { type: "line", toolbar: { show: false } },
  stroke: { curve: "smooth" },
  xaxis: {
    categories: [
      "صفر",
      "شوال",
      "ربيع أول",
      "ربيع ثاني",
      "جمادي أول",
      "جمادي ثاني",
    ],
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  colors: ["#0A84FF"],
};

const lineSeries = [
  {
    name: "الطلبات",
    data: [250, 220, 200, 150, 120, 90],
  },
];

export default function ClientDashboard() {
  return (
    <section className="flex h-screen bg-gray-50">
      <div className="w-64">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col p-5">
        <Navbar />
        <div className="p-6">
          <LineChart series={lineSeries} options={lineOptions}/>
        </div>
      </div>
    </section>
  );
}
