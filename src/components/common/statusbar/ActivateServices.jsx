export default function ActivateServices({ asname, asvalue, asimg }) {
  return (
    <div className="relative flex justify-between">
      <div className="absolute right-[-24px] top-1/2 transform -translate-y-1/2 h-15 w-[2px] bg-[#FFB35C] rounded" />
      <div className="text-right">
        <h3 className="font-semibold text-[#13498B]">{asname}</h3>
        <span className="font-bold text-2xl text-[#13498B]">{asvalue}</span>
      </div>
      <div>
        <img
          src={`/watheeq/assets/img/${asimg}`}
          alt="watheeq"
        />
      </div>
    </div>
  );
}
