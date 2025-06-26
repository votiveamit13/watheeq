"use client";
import { useState } from "react";

export default function WalletDetails({ wallet, available, pending }) {
  const [walletDailog, setWalletDailog] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIban, setSelectedIban] = useState("0000-0000-0000-0000");
  const [addNewIban, setAddNewIban] = useState(false);
  const ibans = ["0000-0000-0000-0000", "+ أضف جديد"];

  return (
    <div>
      <h2 className="p-5 font-bold">المحفظة</h2>
      <div className="flex px-5 gap-5">
        <div className="w-1/2 shadow py-10 rounded-lg">
          <p className="mr-10">المحفظة</p>
          <div className="flex items-center">
            <span className="ml-2  text-2xl font-bold mr-10">{wallet}</span>
            <img
              src="/watheeq/assets/img/business1.png"
              alt="watheeq"
              className="w-5 h-5"
            />
          </div>
        </div>
        <div className="w-1/2 shadow py-10 rounded-lg">
          <div className="flex justify-between">
            <div>
              <p className="mr-10">المتاح للسحب</p>
              <div className="flex items-center">
                <span className="ml-2 text-2xl font-bold mr-10">
                  {available}
                </span>
                <img
                  src="/watheeq/assets/img/business1.png"
                  alt="watheeq"
                  className="w-5 h-5"
                />
              </div>
            </div>
            <div className="ml-10">
              <button
                className="flex gap-3 bg-[#FFE0EB] rounded-lg py-3 px-5 cursor-pointer shadow"
                onClick={() => setWalletDailog(true)}
              >
                سحب
                <img src="/watheeq/assets/img/wallet1.png" alt="watheeq" />
              </button>
              {walletDailog && (
                <div className="fixed inset-0 bg-[#0000007d] bg-opacity-30 flex justify-center items-center z-50">
                  <div className="bg-white p-6 rounded-lg w-full max-w-md">
                    <h2 className="text-xl font-bold text-center text-[#13498B] mb-4">
                      سحب مبلغ
                    </h2>

                    <form className="w-full space-y-5 text-right" dir="rtl">
                      <div className="relative">
                        <label className="block mb-1 text-sm font-medium text-[#13498B]">
                          الآيبان
                        </label>
                        <div
                          className="w-full border rounded-md px-4 py-2 text-[#9794AA] cursor-pointer"
                          onClick={() => setShowDropdown(!showDropdown)}
                        >
                          {selectedIban}
                        </div>

                        {showDropdown && (
                          <div className="absolute left-0 w-1/2 mt-1 bg-white border rounded-md shadow z-10 text-right">
                            {ibans.map((iban, index) => (
                              <div
                                key={index}
                                onClick={() => {
                                  if (iban === "+ أضف جديد") {
                                    setAddNewIban(true);
                                    setShowDropdown(false);
                                  } else {
                                    setSelectedIban(iban);
                                    setShowDropdown(false);
                                  }
                                }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              >
                                {iban}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-[#0B2B51]">
                          اسم صاحب الحساب
                        </label>
                        <input
                          type="text"
                          placeholder="الاسم "
                          className="w-full border rounded-md px-4 py-2 text-[#9794AA] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-[#0B2B51]">
                          اسم البنك
                        </label>
                        <select className="w-full border rounded-md cursor-pointer px-4 py-2 text-[#9794AA] focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>اختر البنك</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-[#0B2B51]">
                          المبلغ المراد سحبه
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 right-8 flex items-center pr-3 text-gray-500">
                            <img
                              src="/watheeq/assets/img/business1.png"
                              alt="watheeq"
                            />
                          </span>
                          <input
                            type="number"
                            defaultValue={120}
                            className="w-full border rounded-md px-4 py-2 text-[#9794AA] focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="flex justify-center gap-8 pt-4">
                        <button
                          type="submit"
                          className="px-8 py-1 bg-[#13498B] w-[120px] h-[40px] text-white rounded-md cursor-pointer transition"
                        >
                          سحب
                        </button>
                        <button
                          type="button"
                          onClick={() => setWalletDailog(false)}
                          className="px-8 py-1 border w-[120px] h-[40px] border-[#13498B99] bg-[#F8FAFC] text-blue-600 rounded-md cursor-pointer transition"
                        >
                          الغاء
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {addNewIban && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                  <div className="bg-white p-6 rounded-lg w-full max-w-md">
                    <h2 className="text-xl font-bold text-center text-[#13498B] mb-4">
                      إضافة الآيبان
                    </h2>
                    <form className="space-y-5 text-right" dir="rtl">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-[#13498B]">
                          اسم صاحب الحساب
                        </label>
                        <input
                          type="text"
                          placeholder="الاسم "
                          className="w-full border rounded-md px-4 py-2 text-[#9794AA] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-[#0B2B51]">
                          اسم البنك
                        </label>
                        <select className="w-full border rounded-md px-4 py-2 text-[#9794AA] focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>اختر البنك</option>
                        </select>
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-[#13498B]">
                          الآيبان
                        </label>
                        <input
                          type="text"
                          placeholder="0000-0000-0000-0000"
                          className="w-full border rounded-md px-4 py-2 text-[#9794AA] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="flex justify-center gap-8 pt-4">
                        <button
                          type="button"
                          className="px-8 py-1 bg-[#13498B] text-white rounded-md cursor-pointer transition"
                          onClick={() => setAddNewIban(false)}
                        >
                          اضافة
                        </button>
                        <button
                          type="button"
                          onClick={() => setAddNewIban(false)}
                          className="px-8 py-1 border border-blue-600 text-blue-600 rounded-md cursor-pointer transition"
                        >
                          الغاء
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="p-5 font-bold">معلومات إضافية</h2>
        <div className="p-5 ml-5 mr-5 shadow py-10 mb-3 rounded-lg">
          <p className="mr-5">الرصيد المعلق</p>
          <div className="flex items-center">
            <span className="ml-2 text-2xl font-bold mr-5">{pending}</span>
            <img
              src="/watheeq/assets/img/business1.png"
              alt="watheeq"
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
