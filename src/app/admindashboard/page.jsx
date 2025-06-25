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

  const subscriptions = [
    {
      id: "01",
      name: "أحمد يوسف",
      date: `29-شوال 1446
ـ10:00 م`,
      package: "وثيق 1",
      condition: "نشط"
    },
        {
      id: "02",
      name: "محمد أحمد",
      date: `29-شوال 1446
ـ10:00 م`,
      package: "وثيق 2",
      condition: "نشط"
    },
        {
      id: "03",
      name: "سامر حسين",
      date: `29-شوال 1446
ـ10:00 م`,
      package: "وثيق 1",
      condition: "منتهية"
    }
  ]

  const getConditionClass = (condition) => {
    switch (condition){
      case "نشط":
        return "bg-[#F0F9FF] text-[#219F94] border border-[#219F9480] py-2 px-4 rounded-lg";
      case "منتهية":
        return "bg-[#F2424226] text-[#F24242] border border-[#F24242] py-2 px-4 rounded-lg";
      default:
        return "bg-gray-200 text-gray-800";
    }
  }
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
      <div className="mt-5 flex gap-3">
        <div className="w-100 bg-white p-4 rounded-lg">
          <BarChart title="عدد الاشتراكات  خلال الشهور" data={chartData} />
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg">
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
      <div className="mt-6 flex gap-3" style={{ marginBottom: "50px" }}>
        <div className="flex-1 bg-white p-4 rounded-lg">
          <span className="font-bold">أحدث الاشتراكات المهنية</span>
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
                  <td className="py-2 px-3">{subscription.name}</td>
                  <td className="py-2 px-3 w-[130px]">{subscription.date}</td>
                  <td className="py-2 px-3">{subscription.package}</td>
                  <td className="py-2 px-3"><span className={`w-[130px] text-center inline-block ${getConditionClass(subscription.condition)}`}>{subscription.condition}</span></td>
                  <td className="py-2 px-3"><button className="cursor-pointer bg-[#464E991A] border border-[#01104033] py-3 px-4 rounded-lg"><BsThreeDotsVertical fill="#13498B" size={20}/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
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
