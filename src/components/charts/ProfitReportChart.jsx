"use client";
import { useState } from "react";

const ProfitReportChart = ({ allData1, allData2 }) => {
  const timeFrames = Object.keys(allData1);
  const [selected, setSelected] = useState("12 شهر");

  const data1 = allData1[selected];
  const data2 = allData2[selected];

  const dynamicLabels = {
    "12 شهر": [
      "جمادي ثاني",
      "جمادي أول",
      "ذو الحجة",
      "ذو القعدة",
      "شوال",
      "رمضان",
      "شعبان",
      "رجب",
      "ربيع ثاني",
      "ربيع أول",
      "محرم",
      "صفر",
    ],
    "3 شهر": ["جمادي ثاني", "جمادي أول", "ذو الحجة"],
    "30 يوم": [
      "الأسبوع 1",
      "الأسبوع 2",
      "الأسبوع 3",
      "الأسبوع 4",
      "الأسبوع 5",
      "الأسبوع 6",
    ],
    "7 يوم": ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
    "24 ساعة": ["4ص", "8ص", "12م", "4م", "8م", "12ص"],
  };

  const xLabels = dynamicLabels[selected];
  const maxValue = 100;
  const height = 200;
  const width = 700;
  const stepX = width / (data1.length - 1);

  const getPoints = (data) =>
    data
      .map((val, i) => {
        const x = i * stepX;
        const y = height - (val / maxValue) * height;
        return `${x},${y}`;
      })
      .join(" ");

  const gridLines = [0, 20, 40, 60, 80, 100];

  const topPadding = 10;
  const leftPadding = -10;

  return (
    <div className="bg-white p-5 rounded-xl max-w-full" dir="rtl">
      <div className="flex lg:px-30 md:px-10 items-center justify-between">
        <h2 className="text-xl font-bold text-[#13498B]">تقرير الأرباح</h2>
        <button className="bg-[#13498B] text-white cursor-pointer lg:px-5 md:px-5 px-4 lg:py-3 md:py-3 py-2 rounded-lg flex items-center gap-2">
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
      <div className="flex lg:px-30 md:px-10 mt-5 justify-end items-center mb-9">
        <div className="block gap-2 justify-end mt-3 sm:mt-0 lg:text-sm md:text-sm text-[10px]">
          {timeFrames.map((item) => (
            <span
              key={item}
              onClick={() => setSelected(item)}
              className={`cursor-pointer px-2 ${
                selected === item
                  ? "border-b-2 border-[#13498B] lg:pl-1 pl-0 text-[#13498B]"
                  : "text-gray-400 hover:text-[#13498B]"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${width + 60} ${height + 50}`}
          className="w-full lg:h-[260px] h-[80px]"
        >

          {gridLines.map((g, i) => {
            const y = topPadding + (1 - g / maxValue) * height;

            return (
              <g key={i}>
                <line
                  x1={leftPadding + 30}
                  y1={y}
                  x2={width + 30}
                  y2={y}
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />


                <text
                  x={leftPadding + 20}
                  y={y + 4}
                  fontSize="12"
                  fill="#6B7280"
                  textAnchor="end"
                >
                  {g}
                </text>
              </g>
            );
          })}


          <polyline
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={data1
              .map((val, i) => {
                const x = 40 + i * stepX;
                const y = height - (val / maxValue) * height;
                return `${x},${y}`;
              })
              .join(" ")}
          />


          <polyline
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={data2
              .map((val, i) => {
                const x = 40 + i * stepX;
                const y = height - (val / maxValue) * height;
                return `${x},${y}`;
              })
              .join(" ")}
          />


          {data1.map((val, i) => {
            const x = 40 + i * stepX;
            const y = height - (val / maxValue) * height;
            return <circle key={`o-${i}`} cx={x} cy={y} r="2" fill="#F59E0B" />;
          })}
          {data2.map((val, i) => {
            const x = 40 + i * stepX;
            const y = height - (val / maxValue) * height;
            return <circle key={`b-${i}`} cx={x} cy={y} r="2" fill="#2563EB" />;
          })}


          {xLabels.map((label, i) => {
            const x = 40 + i * stepX;
            return (
              <text
                key={i}
                x={x}
                y={height + 30}
                fontSize="12"
                fill="#4B5563"
                textAnchor="middle"
              >
                {label}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default ProfitReportChart;
