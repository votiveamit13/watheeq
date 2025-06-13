const PieChart = ({ title = "العنوان", segments = [
  { value: 65, color: "#59A7FF" }, // blue
  { value: 35, color: "#2CDDC7" }, // cyan
] }) => {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  let cumulativePercent = 0;

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M", x, y,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };

  const getOffset = (percent) => {
    const midAngle = 360 * (cumulativePercent + percent / 2);
    const offsetX = Math.cos((midAngle - 90) * Math.PI / 180) * 4;
    const offsetY = Math.sin((midAngle - 90) * Math.PI / 180) * 4;
    return { offsetX, offsetY };
  };

  return (
    <div className="bg-white w-full text-right">
      <h3 className="text-[#0B2B51] font-semibold mb-2">{title}</h3>
      <div className="relative w-full h-40">
        <svg viewBox="0 -3 32 35" className="w-full h-full">
          {segments.map((s, i) => {
            const percent = s.value / total;
            const startAngle = 360 * cumulativePercent;
            const endAngle = 360 * (cumulativePercent + percent);
            const path = describeArc(16, 16, 16, startAngle, endAngle);

            const isOffset = i === 1;
            const { offsetX, offsetY } = isOffset ? getOffset(percent) : { offsetX: 0, offsetY: 0 };

            cumulativePercent += percent;

            return (
              <path
                key={i}
                d={path}
                fill={s.color}
                transform={`translate(${offsetX}, ${offsetY})`}
              />
            );
          })}
        </svg>

        {/* Labels */}
        {segments.map((s, i) => {
          const percent = s.value / total;
          const midAngle = 360 * (cumulativePercent - percent / 2);
          const labelRadius = 10;
          const x = 16 + labelRadius * Math.cos((midAngle - 90) * Math.PI / 180);
          const y = 16 + labelRadius * Math.sin((midAngle - 90) * Math.PI / 180);

          return (
            <div
              key={i}
              className="absolute text-xs font-semibold text-gray-800 px-2 py-1 bg-white rounded shadow"
              style={{
                left: `${x * 5}px`,
                top: `${y * 5}px`,
                transform: "translate(-50%, -50%)",
                whiteSpace: "nowrap",
              }}
            >
              {s.value}%
            </div>
          );
        })}
      </div>

      {/* Dots as indicator */}
      <div className="flex justify-center gap-2 mt-2">
        <span className="w-2 h-2 rounded-full bg-sky-400" />
        <span className="w-2 h-2 rounded-full bg-sky-400 opacity-60" />
      </div>
    </div>
  );
};

export default PieChart;
