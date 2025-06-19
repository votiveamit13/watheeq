import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import StatsTable from "@/components/charts/StatsTable";
import StatusBar from "@/components/clientdashboard/statusbar/Status";

export default function ClientDashboard() {

  const chartData = [
    { label: "الاثنين", value: 446 },
    { label: "الثلاثاء", value: 285 },
    { label: "الاربعاء", value: 382 },
    { label: "الخميس", value: 368 },
    { label: "الجمعة", value: 413 },
    { label: "السبت", value: 307 },
    { label: "الأحد", value: 432 },
  ];
  return (
    <section>
        <div className="mt-5 flex gap-3">
          <StatusBar/>
        </div>
        <div className="mt-5 flex gap-3">
          <div className="w-100 bg-white p-4 rounded-lg">
            <BarChart title="زيارات  موقعك" data={chartData} />
          </div>
          <div className="flex-1 bg-white p-4 rounded-lg">
            <LineChart
              title="الطلبات"
              data={[240000, 200000, 205000, 200000, 187000, 180200, 190500, 196000, 180000, 175800, 210000, 75000, 102000, 18000, 190000, 250000, 75000]}
              labels={[
                "جمادي ثاني",
                "جمادي اول",
                "ربيع ثاني",
                "ربيع اول",
                "شوال",
                "صفر",
              ]}
            />
          </div>
        </div>
        <div className="mt-6 flex gap-3" style={{marginBottom:'50px'}}>
          <div className="flex-1 bg-white p-4 rounded-lg">
            <StatsTable
              title="عنوان"
              rows={[
                { label: "عنوان", percent: 45, color: "#0095FF" },
                { label: "عنوان", percent: 29, color: "#10b981" },
                { label: "عنوان", percent: 18, color: "#a855f7" },
                { label: "عنوان", percent: 25, color: "#f97316" },
              ]}
            />
          </div>
          <div className="w-100 items-center p-4 bg-white rounded-lg">
            <PieChart
              title="عنوان"
              segments={[
                { value: 65, color: "#59A7FF" },
                { value: 35, color: "#2CDDC7" },
              ]}
            />
          </div>
        </div>
    </section>
  );
}
