"use client";

import Packages from "@/components/Packages";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function Package() {
  const [showDialog, setShowDialog] = useState(false);


  return (
    <div>
      <div className="bg-white shadow rounded-lg mt-5 p-5">
        <h2 className="text-2xl mb-2">رسوم المنصة</h2>
        <div className="block lg:flex items-center justify-between lg:w-1/2 w-full rtl">
          <div className="relative">
            <input
              type="text"
              placeholder="21"
              className="lg:w-[350px] w-full pr-3 rounded-lg p-3 bg-white border border-[#13498b40] text-right lg:mb-0 mb-5"
            />
            <img
              src="/watheeq/assets/img/business1.png"
              alt="watheeq"
              className="absolute pr-10 top-1/2 transform -translate-y-1/2 text-[#13498B]"
            />
          </div>
          <div>
            <button
              className="cursor-pointer text-white bg-[#13498B] rounded py-3 px-10 font-semibold"
            style={{borderRadius:'7px'}}>
              تعديل
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto bg-white lg:p-5 p-0 mt-5 shadow rounded-lg mb-30">
        <div className="[&>section]:mx-0 [&>section]:sm:mx-0 mx-auto overflow-x-hidden">
          <Packages
            heading={null}
            subheading={"باقات وثيق"}
            buttonName={"تعديل "}
            onSubscribeClick={() => setShowDialog(true)}
          />
          <style jsx global>{`
            @media (max-width: 767px) {
          
                button {
                  width: 100%;
              }
            .flex.items-center.justify-center {
                margin-top: 25px;
            }

            }
          `}</style>
        </div>

        {showDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#0000007d] z-50">
            <div className="bg-white w-[600px] rounded-xl p-8 relative">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold text-center text-[#13498B] mb-4">
                  تعديل الباقة
                </h2>
                <button className="cursor-pointer" onClick={() => setShowDialog(false)}>
                    <ChevronLeft />
                </button>
              </div>

              <form className="space-y-6 mt-5">
                <div className="flex gap-4 flex-col md:flex-row justify-between">
                  <div className="flex flex-col w-full text-right">
                    <label className="mb-1 text-sm text-gray-700">
                      عنوان الباقة
                    </label>
                    <input
                      type="text"
                      placeholder="باقة وثيق 1"
                      className="rounded-md border border-gray-300 p-2 placeholder:text-gray-400 focus:outline-none text-[#9794AA] focus:ring-2 focus:ring-blue-500 "
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <label className="mb-1 text-sm text-gray-700">
                      قيمة الاشتراك
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="45"
                        className="rounded-md border border-gray-300 p-2 w-full pr-3 placeholder:text-gray-400 focus:outline-none text-[#9794AA] focus:ring-2 focus:ring-blue-500 "
                      />

                        <img src="/watheeq/assets/img/business1.png" alt="watheeq" className="absolute pr-10 top-1/2 transform -translate-y-1/2 text-gray-400"/>

                    </div>
                  </div>
                </div>

                <div className="flex flex-col text-right">
                  <label className="mb-1 text-sm text-gray-700">
                    مميزات الباقة
                  </label>
                  <textarea
                    rows="4"
                    className="rounded-md border border-gray-300 p-2 focus:outline-none text-right focus:outline-none text-[#9794AA] focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="cursor-pointer bg-[#003865] text-white px-12 py-2 rounded hover:bg-[#002C56]"
                    onClick={() => setShowDialog(false)}
                  >
                    تعديل
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
