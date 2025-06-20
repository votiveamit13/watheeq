export default function ActivateServices({ iname, ivalue }) {
  return (
    <div className="relative flex justify-between">
      <div className="absolute right-[-24px] top-1/2 transform -translate-y-1/2 h-15 w-[2px] bg-[#370AFF] rounded" />
      <div className="text-right">
        <h3 className="font-semibold text-[#13498B]">{iname}</h3>
        <span className="font-bold text-2xl text-[#13498B]">{ivalue}</span>
      </div>
      <div>
        <img
          src="/watheeq/assets/img/statusbar4.png"
          alt="watheeq"
        />
      </div>
    </div>
  );
}
