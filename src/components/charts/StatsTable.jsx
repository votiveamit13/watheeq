const StatsTable = ({ rows = [], title }) => (
  <div className="bg-white">
    <h3 className="text-right font-semibold text-[#0B2B51] mb-2">{title}</h3>
    <table className="w-full text-sm">
      <thead>
        <tr className="text-[#96A5B8] text-right">
          <th>#</th><th className="pr-2">العنوان</th><th>احصائيات</th><th>النسبة</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="text-right">
            <td className="px-2 text-gray-400">{`0${i + 1}`}</td>
            <td className="px-2">{row.label}</td>
            <td className="px-2 w-1/2">
              <div className="bg-gray-100 h-2 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${row.percent}%`, backgroundColor: row.color }}
                />
              </div>
            </td>
            <td className="px-2 text-gray-700">{row.percent}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default StatsTable;
