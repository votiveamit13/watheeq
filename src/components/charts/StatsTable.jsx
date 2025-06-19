const StatsTable = ({ rows = [], title }) => (
  <div className="bg-white">
    <h3 className="text-right font-semibold text-[#0B2B51] mb-2">{title}</h3>
    <table className="w-full text-sm">
      <thead>
        <tr className="text-[#96A5B8] text-left">
          <th className="text-right">#</th><th className="pr-2 text-right">العنوان</th><th>احصائيات</th><th>النسبة</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="text-right" style={{lineHeight:'3.2', borderBottom:'solid 1px #EDF2F6'}}>
            <td className="px-2 text-gray-400" style={{color:'#444A6D'}}>{`0${i + 1}`}</td>
            <td className="px-2">{row.label}</td>
            <td className="px-2 w-1/2">
  <div
    className="h-2 rounded-full w-full relative overflow-hidden"
    style={{
      backgroundColor: `${row.color}20`, // 12.5% opacity (20 in hex)
    }}
  >
    <div
      className="h-2 rounded-full absolute top-0 left-0"
      style={{
        width: `${row.percent}%`,
        backgroundColor: row.color,
      }}
    />
  </div>
</td>

            <td className="text-left">
  <span
    className="px-2 text-gray-700 p-1 text-center rounded-lg pl-4 pr-4"
    style={{
      border: `1px solid ${row.color}`,
      color: row.color,
      backgroundColor: `${row.color}20`, // Light version with ~12% opacity (hex: 20)
    }}
  >
    {row.percent}%
  </span>
</td>


          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default StatsTable;
