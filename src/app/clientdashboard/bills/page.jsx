import Transations from "@/components/wallet/Transactions";

export default function Bills() {
    const transactions = [
  {
    id: "01",
    name: "دفع فاتورة الباقة",
    amount: -200,
    status: "تمت",
    date: "29-شواال-1446هـ 10:00 م",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
  {
    id: "02",
    name: "سحب محفظة",
    amount: -200,
    status: "قيد التنفيذ",
    date: "29-شواال-1446هـ 10:00 م",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
  {
    id: "03",
    name: "ايداع محفظة",
    amount: 200,
    status: "ملغية",
    date: "29-شواال-1446هـ 10:00 م",
    notes: "هنا نص توضيحي عن حالة الفاتورة",
  },
];
  return (
    <>
      <div className="bg-white mt-5 rounded-lg">
        <Transations transactions={transactions} />
      </div>
    </>
  );
}
