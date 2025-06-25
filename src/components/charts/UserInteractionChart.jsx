import React from "react";

const UserInteractionChart = ({
  title = "",
  labels = [],
  datasets = [],
  yRange = [-60, 60],
}) => {
  const width = 600;
  const height = 250;
  const padding = 40;

  const [minY, maxY] = yRange;
  const steps = [minY, -20, 20, maxY];

  const yScale = (val) =>
    height - padding - ((val - minY) / (maxY - minY)) * (height - 2 * padding);
  const xScale = (index) =>
    padding + index * ((width - 2 * padding) / (labels.length - 1));

  const buildPath = (data) =>
    data
      .map((val, i) => `${i === 0 ? "M" : "L"} ${xScale(i)},${yScale(val)}`)
      .join(" ");

  return (
    <div className="bg-white w-full">
      <h2 className="text-right font-semibold text-[#0B2B51] mb-2">{title}</h2>
      <svg viewBox={`0 10 ${width} ${height}`} className="w-full">
        {steps.map((val, i) => (
          <line
            key={`line-${i}`}
            x1={padding}
            x2={width - padding}
            y1={yScale(val)}
            y2={yScale(val)}
            stroke="#e5e7eb"
            strokeDasharray="4"
          />
        ))}

        {datasets.map((set, index) => (
          <path
            key={index}
            d={buildPath(set.data)}
            fill="none"
            stroke={set.color}
            strokeWidth="2.5"
          />
        ))}

        {datasets.map((set) =>
          set.data.map((val, i) => (
            <circle
              key={`${set.name}-${i}`}
              cx={xScale(i)}
              cy={yScale(val)}
              r="4"
              fill={set.color}
            />
          ))
        )}

        {labels.map((label, i) => (
          <text
            key={label}
            x={xScale(i) + 40}
            y={height - 10}
            textAnchor="center"
            className="fill-[#000000] text-sm "
          >
            {label}
          </text>
        ))}

        {steps.map((val, i) => (
          <text
            key={`y-text-${i}`}
            x={padding - 40}
            y={yScale(val) + 4}
            textAnchor="start"
            className="fill-gray-400 text-xs"
          >
            <tspan direction="ltr" unicodeBidi="bidi-override">
              {val}
            </tspan>
          </text>
        ))}
      </svg>

      <div className="flex justify-end gap-6 mt-4 text-sm">
        {datasets.map((set, i) => (
          <div key={i} className="flex items-center gap-2" dir="ltr">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: set.color }}
            ></span>
            <span className="text-gray-700">{set.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInteractionChart;
