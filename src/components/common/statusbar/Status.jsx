import ActivateServices from "./ActivateServices";
import AppointmentsToday from "./Appointments";
import Invoices from "./Invoices";
import NewMessages from "./NewMessages";

export default function StatusBar({asname, asvalue, asimg, nmname, nmvalue, nmimg, atname, atvalue, atimg, iname, ivalue, iimg}) {
  return (
<div className="block w-[42%] mx-auto ml-0 md:grid md:grid-cols-4 md:justify-between md:gap-10 md:w-full">

<div className="bg-white rounded-lg p-6 mb-[15px] md:mb-0">

        <ActivateServices asname={asname} asvalue={asvalue} asimg={asimg} />
      </div>
      <div className="bg-white rounded-lg p-6">
        <NewMessages nmname={nmname} nmvalue={nmvalue} nmimg={nmimg}/>
      </div>
      <div className="bg-white rounded-lg p-6">
        <AppointmentsToday atname={atname} atvalue={atvalue} atimg={atimg}/>
      </div>
      <div className="bg-white rounded-lg p-6">
        <Invoices iname={iname} ivalue={ivalue} iimg={iimg} />
      </div>
    </div>
  );
}
