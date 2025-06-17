export default function Transations({ transactions }) {
  const getStatusClasses = (status) => {
    switch (status) {
      case "تمت":
        return "text-[#0E93E4] border border-[#0E93E4] bg-[#F0F9FF]";
      case "قيد التنفيذ":
        return "text-[#F39C12] bg-[#FEF3E5] border border-[#F39C12]";
      case "ملغية":
        return "text-[#E74C3C] bg-[#FDEAEA] border border-[#E74C3C]";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const getAmountColor = (amount) => {
    return amount >= 0 ? "text-green-500" : "text-red-500";
  };
  return (
    <div>
      <h2 className="p-5 font-bold">الفواتير</h2>
      <div className="px-5">
        <table className="w-full text-right text-sm">
          <thead>
            <tr className="text-[#96A5B8] font-medium border-b">
              <th className="py-3">#</th>
              <th className="py-3">اسم الحركة</th>
              <th className="py-3">المبلغ</th>
              <th className="py-3">تاريخ الحركة</th>
              <th className="py-3">الحالة</th>
              <th className="py-3">ملاحظات</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr
                key={t.id}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="py-5">{t.id}</td>
                <td className="py-5">{t.name}</td>
                <td className={`flex gap-1 py-5 font-semibold ${getAmountColor(t.amount)}`}>
                  {t.amount >= 0 ? `${t.amount}+` : `${Math.abs(t.amount)}-`}

                  <img src="/watheeq/assets/img/business1.png" alt="watheeq"/>
                </td>
                <td className="py-5">{t.date}</td>
                <td className="py-5">
                  <span
                    className={`text-center inline-block min-w-[100px] px-3 py-1 rounded-lg font-semibold text-sm ${getStatusClasses(
                      t.status
                    )}`}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="py-5 text-[#6B7280]">{t.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
