import Transations from "@/components/wallet/Transactions";
import WalletDetails from "@/components/wallet/WalletDetails";

export default function Wallet() {
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
        <WalletDetails wallet={"7,290"} available={200} pending={350} />
      </div>
      <div className="bg-white mt-5 rounded-lg mb-30">
        <Transations transactions={transactions} />
      </div>
    </>
  );
}
