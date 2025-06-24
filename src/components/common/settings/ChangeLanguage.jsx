"use client";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";

export default function ChangeLanguage(){
    const [languageDialog, setLanguageDialog] = useState(false);
    return(
        <div>
                    <h2 className="text-2xl font-bold">اللغة</h2>
        <div className="flex justify-between items-center bg-white shadow p-5 mt-5 pl-10 rounded-lg mb-8">
          <div>
            <span>العربية</span>
          </div>
          <div className="border border-[#13498B] rounded-full p-0.5">
            <AiOutlineLeft
              onClick={() => setLanguageDialog(true)}
              className="cursor-pointer"
            />
            {languageDialog && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg w-full max-w-md">
                  <div>
                    <h2 className="text-xl font-bold text-center text-[#13498B] mb-4">
                      تغيير اللغة
                    </h2>
                  </div>
                  <div className="w-full  mx-auto">
                    <label className="block text-sm text-[#0B2B51] mb-1">
                      اللغة
                    </label>

                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm text-gray-400 focus:outline-none"
                        defaultValue="arabic"
                      >
                        <option value="arabic">العربية</option>
                      </select>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <button
                        className="bg-[#003F77] text-white text-sm px-8 py-2 rounded-md cursor-pointer"
                        onClick={() => setLanguageDialog(false)}
                      >
                        حفظ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
    );
}