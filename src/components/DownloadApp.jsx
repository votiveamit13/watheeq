"use client";
import { useTranslation } from "react-i18next";

function DownloadApp() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex justify-between bg-primary font-omnes text-white rounded-2xl" style={{backgroundColor: '#13498B'}}>
        <div className="w-1/2 flex flex-col justify-center px-14 gap-10">
          <h2 className="text-6xl font-bold">{t("app-download-header")}</h2>
          <div className="content text-3xl w-5/6 leading-12">
            <p>{t("app-download-conent")}</p>
            <p>{t("app-download-download-now")}</p>
          </div>

          <div className="flex gap-5 mt-16">
            <img src="/assets/img/appstore.png" alt="app store" />
            <img src="/assets/img/googleplay.png" alt="google play" />
          </div>
        </div>
        <div className="w-1/2 py-30">
          <img src="/assets/img/app.png" alt="watheeq" />
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
