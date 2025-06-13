import { useState } from "react";

const LineChart = ({ data, labels, title }) => {
  const width = 520,
    height = 220,
    padding = 10;

  const yMin = 50000;
  const step = 50000;
  const rawMax = Math.max(...data);
  const yMax = Math.ceil(rawMax / step) * step;

  const viewHeight = height - padding * 2;
  const viewWidth = width - padding * 2;

  const points = data.map((val, i) => {
    const x = padding + (i / (data.length - 1)) * viewWidth;
    const y = padding + (1 - (val - yMin) / (yMax - yMin)) * viewHeight;
    return { x, y };
  });

  const [hoverIndex, setHoverIndex] = useState(null);

  const getSmoothPath = () => {
    if (points.length < 2) return "";
    let d = `M ${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1];
      const p1 = points[i];
      const cx = (p0.x + p1.x) / 2;
      d += ` Q ${p0.x},${p0.y} ${cx},${(p0.y + p1.y) / 2}`;
    }
    d += ` T ${points[points.length - 1].x},${points[points.length - 1].y}`;
    return d;
  };

  return (
    <div className="bg-white w-full text-right">
      <h3 className="text-[#0B2B51] font-semibold mb-2">{title}</h3>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-52">
        <defs>
          <linearGradient id="fill-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {Array.from({ length: (yMax - yMin) / step + 1 }, (_, i) => {
          const value = yMax - i * step;
          const t = (value - yMin) / (yMax - yMin);
          const y = padding + (1 - t) * viewHeight;
          return (
            <g key={i}>
              <line
                x1={padding}
                x2={width - padding}
                y1={y}
                y2={y}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <text
                x={width - 5}
                y={y + 4}
                fontSize="10"
                fill="#9ca3af"
                textAnchor="end"
              >
                {value
                  .toLocaleString("en-US", { maximumFractionDigits: 0 })
                  .replace(/000$/, "K")}
              </text>
            </g>
          );
        })}

        {/* Area fill under curve */}
        <path
          d={`${getSmoothPath()} L ${points[points.length - 1].x},${
            height - padding
          } L ${points[0].x},${height - padding} Z`}
          fill="url(#fill-gradient)"
        />

        {/* Line path */}
        <path
          d={getSmoothPath()}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
        />

        {/* Hover feedback */}
        {hoverIndex !== null && (
          <>
            <line
              x1={points[hoverIndex].x}
              x2={points[hoverIndex].x}
              y1={points[hoverIndex].y}
              y2={height - padding}
              stroke="#6b7280"
              strokeDasharray="4 2"
            />
            <circle
              cx={points[hoverIndex].x}
              cy={points[hoverIndex].y}
              r="5"
              fill="#3b82f6"
              stroke="white"
              strokeWidth="2"
            />
            <g>
              <rect
                x={points[hoverIndex].x - 18}
                y={points[hoverIndex].y - 36}
                width="36"
                height="20"
                rx="4"
                fill="#111827"
              />
              <text
                x={points[hoverIndex].x}
                y={points[hoverIndex].y - 22}
                fontSize="10"
                fill="white"
                textAnchor="middle"
              >
                +{data[hoverIndex]}
              </text>
            </g>
          </>
        )}

        {/* Hover circles */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="10"
            fill="transparent"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        ))}
      </svg>

      {/* Bottom axis labels */}
      <div className="flex justify-between text-xs text-gray-500 mt-2 mr-10 px-1">
        {labels.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
    </div>
  );
};

export default LineChart;
