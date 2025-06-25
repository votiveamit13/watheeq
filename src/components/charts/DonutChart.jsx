import React from "react";

const DonutChart = ({ title, data }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  const radius = 60;
  const stroke = 35;
  const circumference = 2 * Math.PI * radius;

  const segments = [];
  let cumulative = 0;

  data.forEach((item) => {
    const percentage = (item.value / total) * 100;
    const offset = (circumference * cumulative) / 100;
    const midPercent = cumulative + percentage / 2;

    segments.push({
      ...item,
      percentage,
      offset,
      midAngle: midPercent * 3.6 - 90,
    });

    cumulative += percentage;
  });

  return (
    <div className="bg-white w-full" >
      <h2 className="font-semibold mb-4">{title}</h2>
      <div className="flex flex-col items-center justify-center">
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="transparent"
            stroke="#f1f5f9"
            strokeWidth={stroke}
          />

          {segments.map((seg, index) => (
            <circle
              key={index}
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke={seg.color}
              strokeWidth={stroke}
              strokeDasharray={`${(seg.percentage / 100) * circumference} ${circumference}`}
              strokeDashoffset={-seg.offset}
              transform="rotate(-90 80 80)"
            />
          ))}

          {segments.map((seg, index) => {
            const angle = (seg.midAngle * Math.PI) / 180;
            const x = 80 + Math.cos(angle) * (radius);
            const y = 80 + Math.sin(angle) * (radius);

            return (
              <text
                key={`label-${index}`}
                x={x}
                y={y}
                textAnchor="middle"
                alignmentBaseline="middle"
                className="text-[10px] fill-white font-bold"
              >
                {Math.round(seg.percentage)}%
              </text>
            );
          })}
        </svg>

        <div className="flex justify-center mt-4 gap-6 text-sm" dir="ltr">
          {segments.map((seg, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: seg.color }}
              ></span>
              <span className="text-gray-700">{seg.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
