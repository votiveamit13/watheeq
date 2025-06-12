"use client";
import Navbar from "@/components/clientdashboard/Navbar";
import Sidebar from "@/components/clientdashboard/Sidebar";
import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import DonutChart from "@/components/charts/DonutChart";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";

export default function ClientDashboard() {
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
 labels: {
    style: {
      fontFamily: 'Cairo, sans-serif',
      fontSize: '14px',
      align: 'right'
    }
  },
  reversed: true, // Flip x-axis direction
},

legend: {
  position: 'top',
  horizontalAlign: 'right', // RTL align legend
  fontFamily: 'Cairo, sans-serif'
    },
    fill: {
      type: "solid",
      //   gradient: {
      //     shadeIntensity: 1,
      //     opacityFrom: 0.4,
      //     opacityTo: 0,
      //     stops: [0, 90, 100],
      //   },
    },
    colors: ["#0A84FF"],

  };

  const lineSeries = [
    {
      name: "الطلبات",
      data: [250, 220, 200, 150, 120, 90],
    },
  ];

  const barOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 4, columnWidth: "40%" } },
    xaxis: {
      categories: [
        "السبت",
        "الأحد",
        "الإثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
      ],
    },
    colors: ["#0A84FF"],
  };
  const barSeries = [
    { name: "الزيارات", data: [285, 432, 307, 413, 368, 382, 446] },
  ];

  const donutOptions = {
    labels: ["نشط", "غير نشط"],
    colors: ["#0A84FF", "#00C49F"],
    legend: { show: false },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(0)}%`,
    },
  };
  const donutSeries = [65, 35];

  const progressOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "30%",
        borderRadius: 4,
      },
    },
    xaxis: {
      categories: ["عنوان 1", "عنوان 2", "عنوان 3", "عنوان 4"],
    },
    colors: ["#0A84FF", "#00C49F", "#C084FC", "#FFA726"],
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
    },
  };
  const progressSeries = [{ name: "النسبة", data: [45, 29, 18, 25] }];

  return (
    <section className="flex h-screen bg-gray-50">
      <div className="w-64">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col p-5">
        <Navbar />
        <div className="p-6 flex gap-3">
          <div className="w-100 bg-white rounded-lg">
            <BarChart series={barSeries} options={barOptions} height={250} />
          </div>
          <div className="flex-1 bg-white p-4 font-arabic" dir="rtl">
            <h2 className="text-lg font-bold mb-2 text-right">الطلبات الشهرية</h2>
            <LineChart series={lineSeries} options={lineOptions} height={250} />
          </div>
        </div>
        <div className="p-6 flex gap-3">
          <div className="flex-1 bg-white">
            <HorizontalBarChart
              options={progressOptions}
              series={progressSeries}
            />
          </div>
          <div className="w-100 bg-white rounded-lg">
            <DonutChart options={donutOptions} series={donutSeries} />
          </div>
        </div>
      </div>
    </section>
  );
}
