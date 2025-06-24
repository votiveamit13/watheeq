import ChangeLanguage from "@/components/common/settings/ChangeLanguage";
import Security from "@/components/common/settings/Security";

export default function Settings() {
  return (
    <div>
      <div className="bg-white mt-5 p-5 rounded-lg">
        <ChangeLanguage />
      </div>

      <div className="bg-white mt-5 p-5 rounded-lg">
        <Security />
      </div>
    </div>
  );
}
