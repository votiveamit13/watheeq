import ActivateServices from "./ActivateServices";
import AppointmentsToday from "./Appointments";
import Invoices from "./Invoices";
import NewMessages from "./NewMessages";

export default function StatusBar() {
  return (
    <div className="grid grid-cols-4 justify-between gap-10 w-full">
      <div className="bg-white rounded-lg p-6">
        <ActivateServices value={56} />
      </div>
      <div className="bg-white rounded-lg p-6">
        <NewMessages value={5} />
      </div>
      <div className="bg-white rounded-lg p-6">
        <AppointmentsToday value={3} />
      </div>
      <div className="bg-white rounded-lg p-6">
        <Invoices value={17} />
      </div>
    </div>
  );
}
