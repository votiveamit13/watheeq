import { Pointer } from 'lucide-react';
import React from 'react';

const BarChart = ({ title, data }) => {
  const width = 520;
  const height = 220;
  const barWidth = 45;
  const gap = 20;
  const chartWidth = data.length * (barWidth + gap);
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white w-full">
        <h3 className="text-right font-semibold text-[#0B2B51] mb-2">{title}</h3>
      <svg
        viewBox={`0 0 ${chartWidth} ${height}`}
        className="w-full mt-12"
      >
        {data.map((item, i) => {
          const x = i * (barWidth + gap);
          const barHeight = (item.value / maxValue) * (height - 40);
          const y = height - barHeight - 20;

          return (
            <g key={i} transform={`translate(${x}, 0)`} className="group">
              {/* Value on top */}
              <text
              x={barWidth / 2}
              y={y + -8}
              textAnchor="middle"
              fontSize="16"
              fill="#555555"
              
               >
                {item.value}
               </text>

              {/* Bar with hover color change */}
              <rect
                x="0"
                y={y}
                width={barWidth}
                height={barHeight}
                rx="4"
                  className="fill-[#59A7FF] group-hover:fill-[#2CDDC7] transition-colors duration-200"
              />

              {/* Label below */}
              <text
                x={barWidth / 2}
                y={height - 0}
                textAnchor="middle"
                fontSize="15"
                fill="#849AA9"
              >
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default BarChart;
