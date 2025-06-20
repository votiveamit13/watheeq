export default function ActivateServices({ nmname, nmvalue }) {
  return (
    <div className="relative flex justify-between">
      <div className="absolute right-[-24px] top-1/2 transform -translate-y-1/2 h-15 w-[2px] bg-[#9F55FF] rounded" />
      <div className="text-right">
        <h3 className="font-semibold text-[#13498B]">{nmname}</h3>
        <span className="font-bold text-2xl text-[#13498B]">{nmvalue}</span>
      </div>
      <div>
        <img
          src="/watheeq/assets/img/statusbar2.png"
          alt="watheeq"
        />
      </div>
    </div>
  );
}
