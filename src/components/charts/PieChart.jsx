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
    <div className="max-w-xs mx-auto p-4 text-right">

      <h2 className="text-[#13498B] font-bold mb-4">عنوان</h2>

      <div className="w-full max-w-xs mx-auto text-right">

        <div className="relative w-40 h-40 rounded-full mx-auto shadow-lg bg-[conic-gradient(#4ecdc4_0%_55%,_#3b82f6_35%_100%)]">

          <div className="absolute top-6 left-10 bg-white px-2 py-1 rounded shadow text-sm font-bold text-gray-700">
            65%
            <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 
                    border-l-4 border-r-4 border-t-4 
                    border-l-transparent border-r-transparent border-t-white"
              style={{ marginBottom: '2px' }}></div>
          </div>
          <div className="absolute bottom-6 right-10 bg-white px-2 py-1 rounded shadow text-sm font-bold text-gray-700">
            35%
            <div
              className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 
               border-l-4 border-r-4 border-t-4 
               border-l-transparent border-r-transparent border-t-white"
              style={{ marginBottom: '2px' }}></div>
          </div>

        </div>

      </div>


      <div className="flex justify-center mt-4 space-x-2">
        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
        <span className="w-2 h-2 bg-blue-200 rounded-full"></span>
      </div>
    </div>

  );
};

export default PieChart;
