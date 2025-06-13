export default function ActivateServices({ value }) {
  return (
    <div className="relative flex justify-between">
      <div className="absolute right-[-24px] top-1/2 transform -translate-y-1/2 h-15 w-[2px] bg-[#1ABC9C] rounded" />
      <div className="text-right">
        <h3 className="font-semibold text-[#13498B]">المواعيد اليوم</h3>
        <span className="font-bold text-2xl text-[#13498B]">{value}</span>
      </div>
      <div>
        <img
          src="/watheeq/assets/img/statusbar3.png"
          alt="watheeq"
        />
      </div>
    </div>
  );
}
