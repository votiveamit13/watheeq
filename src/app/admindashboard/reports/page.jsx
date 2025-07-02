import StatusBar from "@/components/admindashboard/reports/StatusBar";
import ProfitReportChart from "@/components/charts/ProfitReportChart";
export default function Reports() {
  return (
    <div className="mb-30">
      <div className="bg-white mt-5 p-5 rounded-lg">
        <StatusBar
          professionalsCount={250}
          earnings={"10.000"}
          clientsCount={120}
        />
      </div>
      <div className="bg-white mt-5 p-5 rounded-lg">
        <ProfitReportChart
          allData1={{
            "ساعة 24": [10, 50, 40, 60, 80, 100],
            "يوم 7": [60, 15, 48, 62, 94, 40],
            "يوم 30": [10, 30, 20, 80, 40, 90],
            "3 شهر": [10, 74, 20, 60, 80, 49],
            "12 شهر": [48, 52, 62, 15, 89, 34],
          }}
          allData2={{
            "ساعة 24": [5, 15, 35, 55, 75, 95],
            "يوم 7": [78, 45, 36, 98, 45, 89],
            "يوم 30": [12, 78, 42, 96, 35, 15],
            "3 شهر": [56, 18, 49, 90, 45, 86],
            "12 شهر": [49, 78, 52, 16, 89, 60],
          }}
        />
      </div>
      <div className="bg-white mt-5 p-5 rounded-lg">
        <div className="block md:flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold lg:pr-8 pr-0">أنماط الاستخدام على المنصة</h3>
          <button className="cursor-pointer bg-[#13498B] text-white text-sm px-5 py-2 ml-10 rounded-lg flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z"
              />
            </svg>
            عرض التقرير
          </button>
        </div>
        <div className="overflow-x-auto px-5 mb-30">
        <div className="w-full overflow-x-auto">
  <table className="w-full text-right min-w-[600px]">
    <thead>
      <tr className="text-[#13498B] font-medium" style={{ fontWeight: '300' }}>
        <th className="py-2 px-3">اليوم</th>
        <th>عدد الدخول</th>
        <th>الطلبات المقدمة</th>
        <th>أكثر فترة نشاط</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b hover:bg-gray-50 transition registrationdate-200 leading-[3.1]">
        <td className="py-2 px-3" style={{ color: '#A5A5A5' }}>120</td>
        <td className="py-2 px-3" style={{ color: '#484847' }}>35</td>
        <td className="py-2 px-3" style={{ color: '#484847' }}>35</td>
        <td className="py-2 px-3" style={{ color: '#0B2B5166' }}>29-شواال-1446هـ 10:00 م</td>
      </tr>
      <tr className="border-b hover:bg-gray-50 transition registrationdate-200 leading-[3.1]">
        <td className="py-2 px-3" style={{ color: '#A5A5A5' }}>120</td>
        <td className="py-2 px-3" style={{ color: '#484847' }}>35</td>
        <td className="py-2 px-3" style={{ color: '#484847' }}>35</td>
        <td className="py-2 px-3" style={{ color: '#0B2B5166' }}>29-شواال-1446هـ 10:00 م</td>
      </tr>
      <tr className="border-b hover:bg-gray-50 transition registrationdate-200 leading-[3.1]">
        <td className="py-2 px-3" style={{ color: '#A5A5A5' }}>120</td>
        <td className="py-2 px-3" style={{ color: '#484847' }}>35</td>
        <td className="py-2 px-3" style={{ color: '#484847' }}>35</td>
        <td className="py-2 px-3" style={{ color: '#0B2B5166' }}>29-شواال-1446هـ 10:00 م</td>
      </tr>
      <tr className="border-b hover:bg-gray-50 transition registrationdate-200 leading-[3.1]">
        <td className="py-2 px-3" style={{ color: '#A5A5A5' }}>120</td>
        <td className="py-2 px-3" style={{ color: '#484847' }}>35</td>
        <td className="py-2 px-3" style={{ color: '#484847' }}>35</td>
        <td className="py-2 px-3" style={{ color: '#0B2B5166' }}>29-شواال-1446هـ 10:00 م</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
      </div>
    </div>
  );
}
