"use client";
import { useState } from 'react';

const ProfitReportChart = ({ allData1, allData2 }) => {
  const timeFrames = Object.keys(allData1);
  const [selected, setSelected] = useState("12 شهر");

  const data1 = allData1[selected];
  const data2 = allData2[selected];

  // Dynamically create X labels based on data length
  const dynamicLabels = {
    "12 شهر": [
      "جمادي ثاني", "جمادي أول", "ذو الحجة", "ذو القعدة", "شوال", "رمضان",
      "شعبان", "رجب", "ربيع ثاني", "ربيع أول", "محرم", "صفر"
    ],
    "3 شهر": ["جمادي ثاني", "جمادي أول", "ذو الحجة"],
    "30 يوم": ["الأسبوع 1", "الأسبوع 2", "الأسبوع 3", "الأسبوع 4", "الأسبوع 5", "الأسبوع 6"],
    "7 يوم": ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
    "24 ساعة": ["4ص", "8ص", "12م", "4م", "8م", "12ص"]
  };

  const xLabels = dynamicLabels[selected];
  const maxValue = 100;
  const height = 200;
  const width = 700;
  const stepX = width / (data1.length - 1);

  const getPoints = (data) =>
    data.map((val, i) => {
      const x = i * stepX;
      const y = height - (val / maxValue) * height;
      return `${x},${y}`;
    }).join(" ");

  const gridLines = [0, 20, 40, 60, 80, 100];

  const topPadding = 10;
  const leftPadding = -10;

  return (
    <div className="font-[Cairo] bg-white p-5 rounded-xl shadow-md max-w-full" dir="rtl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-9">
        <h2 className="text-xl font-bold text-[#13498B]">تقرير الأرباح</h2>
        <div className="block gap-2 justify-end mt-3 sm:mt-0 text-sm">
          <div className="w-full flex justify-end mb-4">
            <button className="bg-[#13498B] text-white cursor-pointer px-4 py-1 rounded-lg flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
              </svg>
              عرض التقرير
            </button>
          </div>


          {timeFrames.map((item) => (
            <span
              key={item}
              onClick={() => setSelected(item)}
              className={`cursor-pointer px-2 ${selected === item ? "border-b-2 border-[#13498B] lg:pl-1 pl-0 text-[#13498B]" : "text-gray-400 hover:text-[#13498B]"}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${width + 60} ${height + 50}`} className="w-full lg:h-[260px] h-[80px]">
          {/* Grid Lines with LEFT Y-Axis labels */}

          {gridLines.map((g, i) => {
            const y = topPadding + (1 - g / maxValue) * height;

            return (
              <g key={i}>
                {/* Horizontal line starting after left padding */}
                <line
                  x1={leftPadding + 30} // 30 = space for Y label
                  y1={y}
                  x2={width + 30}       // right end
                  y2={y}
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />

                {/* Y-axis label */}
                <text
                  x={leftPadding + 20}  // 10 + 20 = position for text
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

          {/* Orange Line */}
          <polyline
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={data1.map((val, i) => {
              const x = 40 + i * stepX;
              const y = height - (val / maxValue) * height;
              return `${x},${y}`;
            }).join(" ")}
          />

          {/* Blue Line */}
          <polyline
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={data2.map((val, i) => {
              const x = 40 + i * stepX;
              const y = height - (val / maxValue) * height;
              return `${x},${y}`;
            }).join(" ")}
          />

          {/* Dots */}
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

          {/* X-Axis Labels */}
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
