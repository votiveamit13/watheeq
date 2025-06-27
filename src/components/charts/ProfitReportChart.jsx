"use client";
import React, { useState } from "react";

const months = [
  "صفر",
  "محرم",
  "ربيع أول",
  "ربيع ثاني",
  "جمادى أول",
  "جمادى ثاني",
  "رجب",
  "شعبان",
  "رمضان",
  "شوال",
  "ذو القعدة",
  "ذو الحجة",
];

const periods = ["ساعة 24", "يوم 7", "يوم 30", "3 شهر", "12 شهر"];

const Chart = ({ data1, data2 }) => {
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, value: 0 });

  const allValues = [...data1, ...data2];
const maxY = Math.max(...allValues) || 1;

  const height = 200;
  const width = 800;

  const getPoints = (data) =>
    data.map((val, idx) => {
      const x = (idx / (data.length - 1)) * width;
      const y = height - (val / maxY) * height;
      return [x, y];
    });

  const drawLine = (points) =>
    points
      .map((p, i) => (i === 0 ? `M ${p[0]},${p[1]}` : `L ${p[0]},${p[1]}`))
      .join(" ");

  const points1 = getPoints(data1);
  const points2 = getPoints(data2);

  const handleHover = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const idx = Math.round((offsetX / width) * (data1.length - 1));
    const x = (idx / (data1.length - 1)) * width;
    const y = height - (data1[idx] / maxY) * height;
    setTooltip({
      show: true,
      x,
      y,
      value: data1[idx],
    });
  };

  const hideTooltip = () => setTooltip({ ...tooltip, show: false });

  return (
    <div className="w-full relative">
      <svg
        viewBox={`40 0 ${width} ${height+20}`}
        className="w-full h-56"
        onMouseMove={handleHover}
        onMouseLeave={hideTooltip}
      >
        {[0, 20, 40, 60, 80, 100].map((val) => (
          <line
            key={val}
            x1="0"
            y1={height - (val / maxY) * height}
            x2={width}
            y2={height - (val / maxY) * height}
            stroke="#E5E7EB"
            strokeWidth="1"
          />
        ))}

        {[0, 20, 40, 60, 80, 100].map((val) => (
          <text
            key={val}
            x="0"
            y={height - (val / maxY) * height + 4}
            className="text-[10px] fill-gray-400"
            textAnchor="start"
            dominantBaseline="middle"
          >
            {val}
          </text>
        ))}

        <path
          d={drawLine(points1)}
          stroke="#1D4ED8"
          fill="none"
          strokeWidth="2"
        />
        <path
          d={drawLine(points2)}
          stroke="#F59E0B"
          fill="none"
          strokeWidth="2"
        />

        {tooltip.show && (
          <circle
            cx={tooltip.x}
            cy={tooltip.y}
            r="4"
            fill="#1D4ED8"
            stroke="white"
            strokeWidth="2"
          />
        )}
      </svg>

      {tooltip.show && (
        <div
          className="absolute text-sm bg-white shadow-md border rounded px-2 py-1 text-gray-700"
          style={{
            right: `${width - tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: "translate(50%, -100%)",
            whiteSpace: "nowrap",
          }}
        >
          <div className="font-semibold text-xs text-gray-500">الربح</div>
          Rp {tooltip.value != null ? tooltip.value.toLocaleString() : "0"}
        </div>
      )}
    </div>
  );
};

const ProfitReportChart = ({ allData1, allData2 }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("12 شهر");
    const data1 = allData1[selectedPeriod] || [];
  const data2 = allData2[selectedPeriod] || [];
  return (
    <div className="bg-white rounded-lg w-full max-w-full rtl px-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">تقرير الأرباح</h2>
        <button className="cursor-pointer bg-[#13498B] text-white text-sm px-5 py-2 rounded-lg flex items-center gap-1">
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

      <div className="flex gap-8 text-sm mb-2 text-gray-600 mb-3" dir="ltr">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`cursor-pointer pb-1 ${
              selectedPeriod === period
                ? "text-blue-800 font-medium border-b-2 border-blue-800"
                : "hover:text-blue-700"
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      <Chart data1={data1} data2={data2} />

      <div className="flex justify-center gap-7 mt-4 text-gray-500">
        {months.map((month, idx) => (
          <span key={idx} className="w-10 text-center shrink-0">
            {month}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfitReportChart;
