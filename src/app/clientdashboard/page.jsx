import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import StatusBar from "@/components/common/statusbar/Status";
import { BsThreeDotsVertical } from "react-icons/bs";

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

  const requests = [
    {
      id: "01",
      serviceName: "صياغة ومراجعة العقود القانونية",
      professionalName: "أحمد ماضي",
      condition: "قيد التنفيذ"
    },
        {
      id: "02",
      serviceName: "استشارات القانونية ",
      professionalName: "أحمد ماضي",
      condition: "مستلمة"
    },
        {
      id: "03",
      serviceName: "صياغة ومراجعة العقود القانونية",
      professionalName: "أحمد ماضي",
      condition: "ملغية"
    }
  ]

  const getConditionClass = (condition) => {
    switch (condition){
      case "قيد التنفيذ":
        return "bg-[#F0F9FF] text-[#219F94] border border-[#219F9480] py-2 px-4 rounded-lg";
      case "مستلمة":
        return "bg-[#AC39D40D] text-[#AC39D4] border border-[#AC39D4] py-2 px-4 rounded-lg";
      case "ملغية":
        return "bg-[#F2424226] text-[#F24242] border border-[#F2424280] py-2 px-4 rounded-lg";
      default:
        return "bg-gray-200 text-gray-800";
    }
  }
  return (
    <section>
      <div className="mt-5 flex gap-3">
        <StatusBar
          asname={" طلباتي الحالية"}
          asvalue={56}
          asimg={"statusbar1.png"}
          nmname={"الرسائل الجديدة"}
          nmvalue={5}
          nmimg={"statusbar2.png"}
          atname={"المواعيد القادمة"}
          atvalue={3}
          atimg={"statusbar3.png"}
          iname={"الفواتير"}
          ivalue={17}
          iimg={"statusbar4.png"}
        />
      </div>
      <div className="block md:flex mt-5 gap-3">
      <div className="w-full sm:w-1/2 lg:w-[35%] bg-white p-4 rounded-lg">
      <BarChart title="عدد الطلبات خلال الشهور" data={chartData} />
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg mt-[15px] sm:mt-0">
        <LineChart
            title="انجاز الطلبات"
            data={[
              240000, 200000, 205000, 200000, 187000, 180200, 190500, 196000,
              180000, 175800, 210000, 75000, 102000, 18000, 190000, 250000,
              75000,
            ]}
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
      <div className="mt-6 block md:flex gap-3" style={{ marginBottom: "50px" }}>
        <div className="flex-1 bg-white p-4 rounded-lg w-full sm:w-1/2">
          <span className="font-bold">آخر الطلبات</span>
          
          <div className="w-full overflow-x-auto">
           <table className="w-full mt-5 text-right mb-5 min-w-[600px]">
            <thead>
              <tr className="text-[#96A5B8] font-medium">
                <th className="py-2 px-3">#</th>
                <th className="py-2 px-3">اسم الخدمة</th>
                <th className="py-2 px-3">اسم المهني</th>
                <th className="py-2 px-3">الحالة</th>
                <th className="py-2 px-3">خيارات</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={request.id}>
                  <td className="py-2 px-3">{request.id}</td>
                  <td className="py-2 px-3">{request.serviceName}</td>
                  <td className="py-2 px-3">{request.professionalName}</td>
                  <td className="py-2 px-3">
                    <span className={`w-[130px] text-center inline-block ${getConditionClass(request.condition)}`}>
                      {request.condition}
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    <button className="cursor-pointer bg-[#464E991A] border border-[#01104033] py-3 px-4 rounded-lg">
                      <BsThreeDotsVertical fill="#13498B" size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
           </table>
          </div>


        </div>
        <div className="w-100 items-center p-4 bg-white rounded-lg">
          <PieChart
            title="أنواع الخدمات المطلوبة"
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
