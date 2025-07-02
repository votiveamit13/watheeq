import BarChart from "@/components/charts/BarChart";
import StatusBar from "@/components/common/statusbar/Status";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserInteractionChart from "@/components/charts/UserInteractionChart";
import DonutChart from "@/components/charts/DonutChart";

export default function ClientDashboard() {
  const months = [
    "صفر",
    "شوال",
    "ربيع اول",
    "ربيع ثاني",
    "جمادي اول",
    "جمادي ثاني",
  ];

  const userInterationData = [
    {
      name: "العملاء",
      color: "#ff99cc",
      data: [18, 28, 45, 45, 38, 60],
    },
    {
      name: "الموردين",
      color: "#e599f7",
      data: [0, 10, 14, 16, 18, 24],
    },
  ];

  const chartData = [
    { label: "الاثنين", value: 446 },
    { label: "الثلاثاء", value: 285 },
    { label: "الاربعاء", value: 382 },
    { label: "الخميس", value: 368 },
    { label: "الجمعة", value: 413 },
    { label: "السبت", value: 307 },
    { label: "الأحد", value: 432 },
  ];

  const subscriptions = [
    {
      id: "01",
      name: "أحمد يوسف",
      date: `29-شوال 1446
ـ10:00 م`,
      package: "وثيق 1",
      condition: "نشط",
    },
    {
      id: "02",
      name: "محمد أحمد",
      date: `29-شوال 1446
ـ10:00 م`,
      package: "وثيق 2",
      condition: "نشط",
    },
    {
      id: "03",
      name: "سامر حسين",
      date: `29-شوال 1446
ـ10:00 م`,
      package: "وثيق 1",
      condition: "منتهية",
    },
  ];

  const getConditionClass = (condition) => {
    switch (condition) {
      case "نشط":
        return "bg-[#F0F9FF] text-[#219F94] border border-[#219F9480] py-2 px-4 rounded-lg";
      case "منتهية":
        return "bg-[#F2424226] text-[#F24242] border border-[#F24242] py-2 px-4 rounded-lg";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };
  return (
    <section>
      <div className="mt-5 flex gap-3">
        <StatusBar
          asname={"عدد المهنيين"}
          asvalue={56}
          asimg={"statusbar5.png"}
          nmname={"عدد العملاء"}
          nmvalue={354}
          nmimg={"statusbar6.png"}
          atname={"الاشتراكات النشطة"}
          atvalue={200}
          atimg={"statusbar7.png"}
          iname={"الطلبات اليومية"}
          ivalue={17}
          iimg={"statusbar8.png"}
        />
      </div>
      <div className="block md:flex mt-5 gap-3">
        <div className="w-full sm:w-1/2 lg:w-[35%] bg-white p-4 rounded-lg">
          <BarChart title="عدد الاشتراكات  خلال الشهور" data={chartData} />
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg mt-[15px] sm:mt-0">
          <UserInteractionChart
            title="تفاعل المستخدمين خلال الشهور"
            labels={months}
            datasets={userInterationData}
            yRange={[-60, 60]}
          />
        </div>
      </div>
      <div className="mt-6 block md:flex gap-3" style={{ marginBottom: "50px" }}>
        <div className="flex-1 bg-white p-4 rounded-lg w-full sm:w-1/2">
          <span className="font-bold">أحدث الاشتراكات المهنية</span>
          <div className="w-full overflow-x-auto">
          <table className="w-full mt-5 text-right mb-5">
            <thead>
              <tr className="text-[#96A5B8] font-medium">
                <th className="py-2 px-3">#</th>
                <th className="py-2 px-3">اسم المهني</th>
                <th className="py-2 px-3">تاريخ الاشتراك</th>
                <th className="py-2 px-3"> الباقة</th>
                <th className="py-2 px-3">الحالة</th>
                <th className="py-2 px-3">خيارات</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((subscription, index) => (
                <tr key={subscription.id}>
                  <td className="py-2 px-3">{subscription.id}</td>
                  <td className="py-2 px-3" style={{color:'#0B2B51'}}>{subscription.name}</td>
                  <td className="py-2 px-3 w-[130px]" style={{color:'#0B2B5166'}}>{subscription.date}</td>
                  <td className="py-2 px-3">{subscription.package}</td>
                  <td className="py-2 px-3">
                    <span
                      className={`w-[130px] text-center inline-block ${getConditionClass(
                        subscription.condition
                      )}`}
                    style={{fontWeight:'600'}}>
                      {subscription.condition}
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    <button className="cursor-pointer bg-[#464E991A] border border-[#01104033] py-3 px-3" style={{borderRadius:'8px'}}>
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
          <DonutChart
            title="أنواع الخدمات الأكثر طلباً"
            data={[
              { label: "البرمجة", value: 50, color: "#818CF8" },
              { label: "التعليم", value: 15, color: "#FB7185" },
              { label: "المحاماة", value: 35, color: "#A855F7" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
