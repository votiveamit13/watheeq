"use client";
import { HiDotsVertical } from "react-icons/hi";
import Pagination from "@/components/pagination/Pagination";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const offers = [
  {
    id: "01",
    client: "أحمد ماضي",
    image: "/watheeq/assets/img/avatar.png",
    service: "صياغة ومراجعة العقود القانونية",
    price: 120,
    status: "قيد الاانتظار ",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "02",
    client: "محمد سعيد",
    image: "/watheeq/assets/img/avatar.png",
    service: "إعداد البحوث لموظفي القطاعات الحكومية",
    price: 120,
    status: "مقبول",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "03",
    client: "محمد سمير",
    image: "/watheeq/assets/img/avatar.png",
    service: "صياغة الأنظمة لحفظ حقوق جميع الأطراف",
    price: 120,
    status: "مرفوض",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "04",
    client: "محمود سعدي",
    image: "/watheeq/assets/img/avatar.png",
    service: "استشارات القانونية ",
    price: 120,
    status: "مقبول",
    date: "29-شواال-1446هـ 10:00 م",
  },
  {
    id: "05",
    client: "محمود سعدي",
    image: "/watheeq/assets/img/avatar.png",
    service: "استشارات القانونية ",
    price: 120,
    status: "مقبول",
    date: "29-شواال-1446هـ 10:00 م",
  },
];

export default function PriceOffers() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [secondOffer, setSecondOffer] = useState(false);

  const paginatedData = offers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const statusClass = (status) => {
    switch (status) {
      case "قيد الاانتظار ":
        return "bg-[#FFB35C26] text-[#FFB35C] rounded-lg";
      case "مقبول":
        return "bg-[#219F941A] text-[#219F94] rounded-lg";
      case "مرفوض":
        return "bg-[#F242421A] text-[#F24242] rounded-lg";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="w-full bg-white mt-5 rounded-lg">
      <h2 className="p-5 text-right text-2xl font-bold text-[#13498B]">
        عروض السعر
      </h2>
      <div className="overflow-x-auto px-5">
        <table className="w-full text-right ">
          <thead>
            <tr className="text-[#96A5B8] font-medium">
              <th className="py-2 px-3">#</th>
              <th className="py-2 px-3">اسم المهني</th>
              <th className="py-2 px-3">اسم الخدمة</th>
              <th className="py-2 px-3">السعر</th>
              <th className="py-2 px-3">الحالة </th>
              <th className="py-2 px-3">تاريخ الارسال</th>
              <th className="py-2 px-3">خيارات</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((offer, index) => (
              <tr
                key={offer.id}
                className="border-b hover:bg-gray-50 transition duration-200 leading-[3.1]"
              >
                <td className="py-2 px-3">{offer.id}</td>
                <td className="py-2 px-3">
                  <div className="flex items-center justify-end">
                    <img
                      src={offer.image}
                      alt="client"
                      className="w-8 h-8 rounded-full ml-2"
                    />
                    <span className="text-nowrap">{offer.client}</span>
                  </div>
                </td>
                <td className="py-2 px-3 leading-[1.5] sm:leading-normal">
                  {offer.service}
                </td>
                <td className="py-2 px-3 flex items-center gap-2">
                  <span>{offer.price}</span>
                  <img
                    src="/watheeq/assets/img/business1.png"
                    alt="price-icon"
                    className="w-4 h-4"
                  />
                </td>
                <td className="py-2 px-3">
                  <span
                    className={`text-xs min-w-[120px] text-center px-3 py-2 font-medium inline-block ${statusClass(
                      offer.status
                    )}`}
                    style={{ borderRadius: "10px" }}
                  >
                    {offer.status}
                  </span>
                </td>

                <td className="py-2 px-3 text-sm">{offer.date}</td>
                <td className="py-2 px-3">
                  <HiDotsVertical
                    className="text-[#01104099] bg-[#464E991A] w-10 h-10 p-2 rounded-lg cursor-pointer"
                    onClick={() => setSelectedOffer(offer)}
                  />
                  {selectedOffer && (
                    <div className="fixed inset-0 bg-[#00000026] flex justify-center items-center z-50">
                      <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <div>
                          <h2 className="text-xl font-bold text-center text-[#13498B] mb-4">
                            عرض سعر
                          </h2>
                        </div>
                        <div className="flex w-full justify-between">
                          <div className="flex items-center">
                            <div>
                              <img
                                src="/watheeq/assets/img/avatar.png"
                                alt="watheeq"
                              />
                            </div>
                            <div className="mr-2">
                              <span>{selectedOffer.client}</span>
                            </div>
                          </div>
                          <div>
                            <button className="flex gap-1 items-center px-8 border bg-[#F8FAFC] rounded-lg cursor-pointer">
                              <FaPlus />
                              محادثة
                            </button>
                          </div>
                        </div>
                        <hr className="mt-3" />
                        <div>
                          <table>
                            <tbody>
                              <tr>
                                <td className="font-bold text-xl py-2">
                                  الخدمة
                                </td>
                                <td className="px-5">
                                  {selectedOffer.service}
                                </td>
                              </tr>
                              <tr>
                                <td className="font-bold text-xl py-2">
                                  مدة تقديم الخدمة
                                </td>
                                <td className="px-5">2 يوم</td>
                              </tr>
                              <tr>
                                <td className="font-bold text-xl py-2">
                                  سعر الخدمة
                                </td>
                                <td className="px-5">{selectedOffer.price}</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="leading-[1.5]">
                            <p className="mt-5 font-bold text-xl">
                              تفاصيل الخدمة
                            </p>
                            <span>
                              نقدّم خدمات صياغة ومراجعة العقود القانونية بدقة
                              واحترافية تضمن وضوح الحقوق والالتزامات وتقلل من
                              النزاعات المستقبلية.
                            </span>
                          </div>
                          <div className="flex justify-center items-center gap-5 mt-8">
                            <button
                              className="cursor-pointer bg-[#13498B] text-white px-10 rounded-lg"
                              onClick={() => setSecondOffer(true)}
                            >
                              قبول
                            </button>
                            <button
                              className="cursor-pointer px-10 rounded-lg border border-[#13498B99]"
                              onClick={() => setSelectedOffer(false)}
                            >
                              رفض
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {secondOffer && (
                    <div className="fixed inset-0 bg-[#00000026] flex justify-center items-center z-50">
                      <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <div>
                          <h2 className="text-xl font-bold text-center text-[#13498B] mb-4">
                            عرض سعر
                          </h2>
                        </div>
                        <div className="flex w-full justify-between">
                          <div className="flex items-center">
                            <div>
                              <img
                                src="/watheeq/assets/img/avatar.png"
                                alt="watheeq"
                              />
                            </div>
                            <div className="mr-2">
                              <span>{selectedOffer.client}</span>
                            </div>
                          </div>
                          <div>
                            <button className="flex gap-1 items-center px-8 border bg-[#F8FAFC] rounded-lg cursor-pointer">
                              <FaPlus />
                              محادثة
                            </button>
                          </div>
                        </div>
                        <hr className="mt-3" />
                        <div className="mb-20">
                          <table>
                            <tbody>
                              <tr>
                                <td className="font-bold text-xl py-2">
                                  الخدمة
                                </td>
                                <td className="px-5">
                                  {selectedOffer.service}
                                </td>
                              </tr>
                              <tr>
                                <td className="font-bold text-xl py-2">
                                  مدة تقديم الخدمة
                                </td>
                                <td className="px-5">2 يوم</td>
                              </tr>
                              <tr>
                                <td className="font-bold text-xl py-2">
                                  المدة المتبقية
                                </td>
                                <td className="px-5">1 يوم</td>
                              </tr>
                              <tr>
                                <td className="font-bold text-xl py-2">
                                  سعر الخدمة
                                </td>
                                <td className="px-5">{selectedOffer.price}</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="leading-[1.5]">
                            <p className="mt-5 font-bold text-xl">
                              تفاصيل الخدمة
                            </p>
                            <span>
                              نقدّم خدمات صياغة ومراجعة العقود القانونية بدقة
                              واحترافية تضمن وضوح الحقوق والالتزامات وتقلل من
                              النزاعات المستقبلية.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(offers.length / pageSize)}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
