"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/Switch";
import { HiDotsVertical } from "react-icons/hi";

const trialsubscriptions = [
  {
    id: "01",
    name: "أحمد ماضي",
    image: "/watheeq/assets/img/avatar.png",
    subscriptiondate: "29-شواال-1446هـ 10:00 م",
    remainingtime: "15يوم",
    status: "نشط",
  },
  {
    id: "02",
    name: "محمود حسن",
    image: "/watheeq/assets/img/avatar.png",
    subscriptiondate: "29-شواال-1446هـ 10:00 م",
    remainingtime: "20 وم",
    status: "نشط",
  },
  {
    id: "03",
    name: "محمود سمير",
    image: "/watheeq/assets/img/avatar.png",
    subscriptiondate: "29-شواال-1446هـ 10:00 م",
    remainingtime: "-يوم",
    status: "منتهية",
  },
];

const packagesubscriptions = [
  {
    id: "01",
    name: "أحمد ماضي",
    image: "/watheeq/assets/img/avatar.png",
    subscriptiondate: "29-شواال-1446هـ 10:00 م",
    package: "وثيق 1",
    remainingtime: "15يوم",
    status: "نشط",
  },
  {
    id: "02",
    name: "أحمد سعيد",
    image: "/watheeq/assets/img/avatar.png",
    subscriptiondate: "29-شواال-1446هـ 10:00 م",
    package: "وثيق 2",
    remainingtime: "-يوم",
    status: "منتهية",
  },
  {
    id: "03",
    name: "محمود سعيد",
    image: "/watheeq/assets/img/avatar.png",
    subscriptiondate: "29-شواال-1446هـ 10:00 م",
    package: "وثيق 1",
    remainingtime: "10يوم",
    status: "نشط",
  },
];

export default function Subscriptions() {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [reminder, setReminder] = useState(null);

  const handleSwitchToggle = (value) => {
    setSelectedOption(value);
  };

  const statusClass = (status) => {
    return status === "نشط"
      ? "bg-[#e8f9f1] text-[#33cc8c] border border-[#219F94]"
      : "bg-[#F242421A] text-[#F24242]";
  };

  return (
    <div className="w-full bg-white mt-5 rounded-lg">
      <div className="block md:flex items-center justify-between p-5">
        <h2 className="text-right text-2xl font-bold text-[#13498B]">
          اشتراكات المهنيين
        </h2>
        <button
  className="cursor-pointer bg-[#13498B] text-white font-bold py-2 px-8 mt-2 mb-2 sm:mt-0 sm:mb-0"
  style={{ borderRadius: '7px' }}
>
          تصدير PDF
        </button>
      </div>
      <div className="mb-6 px-4 [&_div]:rounded-lg [&_div]:w-full sm:[&_div]:w-auto">
        <div className="[&_button]:w-50 [&_button]:rounded-lg lg:[&_button]:p-auto [&_button]:p-3 lg:[&_button]:text-[auto] [&_button]:text-[18px]">
          <Switch
            optionRight={"اشتراك تجريبي"}
            optionLeft={"اشتراك باقة "}
            onToggle={handleSwitchToggle}
          />
        </div>
      </div>
      <div className="px-5">
        {selectedOption === "monthly" ? (
          <div className="overflow-x-auto px-5">
            <table className="w-[95%] text-right ">
              <thead>
                <tr className="text-[#96A5B8] font-medium">
                  <th className="py-2 px-3">#</th>
                  <th className="py-2 px-3">اسم المهني</th>
                  <th className="py-2 px-3">تاريخ الاشتراك</th>
                  <th className="py-2 px-3">المدة المتبقية</th>
                  <th className="py-2 px-3">حالة الاشتراك</th>
                  <th className="py-2 px-3">خيارات</th>
                </tr>
              </thead>
              <tbody>
                {trialsubscriptions.map((trialsubscription, index) => (
                  <tr
                    key={trialsubscription.id}
                    className="border-b hover:bg-gray-50 transition joiningdata-200 leading-[3.1]"
                  >
                    <td className="py-2 px-3">{trialsubscription.id}</td>
                    <td className="py-2 px-3">
                      <div className="flex items-center justify-start">
                        <img
                          src={trialsubscription.image}
                          alt="name"
                          className="w-8 h-8 rounded-full ml-2"
                        />
                        <span className="ml-[25px] sm:ml-0 text-nowrap">
                          {trialsubscription.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-3 leading-[1.6] sm:leading-normal text-[#0B2B5166]">
                    {trialsubscription.subscriptiondate}
                    </td>
                    <td className="py-2 px-3 text-sm">
                      {trialsubscription.remainingtime}
                    </td>
                    <td className="py-2 px-3">
                      <span
                        className={`text-xs min-w-[120px] text-center px-3 py-2 font-medium inline-block ${statusClass(
                          trialsubscription.status
                        )}`}
                        style={{ borderRadius: "10px" }}
                      >
                        {trialsubscription.status}
                      </span>
                    </td>
                    <td className="py-2 px-3">
                      <HiDotsVertical className="text-[#01104099] bg-[#464E991A] w-10 h-10 p-2 rounded-lg cursor-pointer" onClick={() => setReminder(trialsubscription)} />
                      {reminder?.id === trialsubscription.id && (
                        <div className="absolute bg-[#ECEDF5] text-[#13498B] rounded-lg left-4">
                        <p className="py-1 px-3 hover:bg-gray-100 cursor-pointer">تذكير بالاشتراك</p>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto px-5">
            <table className="w-[95%] text-right ">
              <thead>
                <tr className="text-[#96A5B8] font-medium">
                  <th className="py-2 px-3">#</th>
                  <th className="py-2 px-3">اسم المهني</th>
                  <th className="py-2 px-3">تاريخ الاشتراك</th>
                  <th className="py-2 px-3"> الباقة</th>
                  <th className="py-2 px-3">المدة المتبقية</th>
                  <th className="py-2 px-3">حالة الاشتراك</th>
                  <th className="py-2 px-3">خيارات</th>
                </tr>
              </thead>
              <tbody>
                {packagesubscriptions.map((packagesubscription, index) => (
                  <tr
                    key={packagesubscription.id}
                    className="border-b hover:bg-gray-50 transition joiningdata-200 leading-[3.1]"
                  >
                    <td className="py-2 px-3">{packagesubscription.id}</td>
                    <td className="py-2 px-3">
                      <div className="flex items-center justify-start">
                        <img
                          src={packagesubscription.image}
                          alt="name"
                          className="w-8 h-8 rounded-full ml-2"
                        />
                        <span className="ml-[25px] sm:ml-0 text-nowrap">
                          {packagesubscription.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-3 leading-[1.6] sm:leading-normal" style={{color:'#0b2b5166'}}>
                      {packagesubscription.subscriptiondate}
                    </td>
                    <td className="py-2 px-3">{packagesubscription.package}</td>
                    <td className="py-2 px-3 text-sm">
                      {packagesubscription.remainingtime}
                    </td>
                    <td className="py-2 px-3">
                      <span
                        className={`text-xs min-w-[120px] text-center px-3 py-2 font-medium inline-block ${statusClass(
                          packagesubscription.status
                        )}`}
                        style={{ borderRadius: "10px" }}
                      >
                        {packagesubscription.status}
                      </span>
                    </td>
                    <td className="py-2 px-3">
                      <HiDotsVertical className="text-[#01104099] bg-[#464E991A] w-10 h-10 p-2 rounded-lg cursor-pointer" onClick={() => setReminder(packagesubscription)} />
                      {reminder?.id === packagesubscription.id && (
                        <div className="absolute bg-[#ECEDF5] text-[#13498B] rounded-lg left-2">
                        <p className="py-1 px-3 hover:bg-gray-100 cursor-pointer">تذكير بالاشتراك</p>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
