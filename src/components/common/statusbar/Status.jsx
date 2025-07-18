import ActivateServices from "./ActivateServices";
import AppointmentsToday from "./Appointments";
import Invoices from "./Invoices";
import NewMessages from "./NewMessages";

export default function StatusBar({asname, asvalue, asimg, nmname, nmvalue, nmimg, atname, atvalue, atimg, iname, ivalue, iimg}) {
  return (
<div className="block w-full mx-auto ml-0 md:grid md:grid-cols-4 md:justify-between lg:gap-10 md:gap-4 md:w-full">

<div className="bg-white rounded-lg p-6 mb-[15px] md:mb-0">

        <ActivateServices asname={asname} asvalue={asvalue} asimg={asimg} />
      </div>
      <div className="bg-white rounded-lg p-6 mb-[15px] md:mb-0">
        <NewMessages nmname={nmname} nmvalue={nmvalue} nmimg={nmimg}/>
      </div>
      <div className="bg-white rounded-lg p-6 mb-[15px] md:mb-0">
        <AppointmentsToday atname={atname} atvalue={atvalue} atimg={atimg}/>
      </div>
      <div className="bg-white rounded-lg p-6 mb-[15px] md:mb-0">
        <Invoices iname={iname} ivalue={ivalue} iimg={iimg} />
      </div>
    </div>
  );
}
