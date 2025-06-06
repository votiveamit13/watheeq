"use client";
import { useTranslation } from "react-i18next";


function HowToStart() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col lg:flex-row font-omnes justify-between" style={{margin: '0px 50px'}}>
      <div className="w-full lg:w-5/12 py-10 px-1 lg:py-15 lg:px-10">
        <h2 className="text-4xl lg:text-6xl font-bold">
          كيف تبدأ ؟
        </h2>
        <p className="text-xl lg:text-2xl pt-5">
          كيف تبدأ في وثيق كمحام محترف
        </p>
        <div className="steps flex flex-col gap-8 pt-10">
          <div className="flex gap-3 items-start">
            <div className="border-8 border-primary rounded-full p-5">
              <img
                height={56.79}
                width={52}
                src="watheeq/assets/img/howtostarticon1.png"
                alt="step-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">(1)أنشئ صفحتك القانونية</p>
              <p className="text-xl">
                أبرز تخصصاتك القانونية وخبراتك وأعمالك ضمن واجهة احترافية .
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="border-8 border-primary rounded-full p-5">
              <img
                height={56.79}
                width={52}
                src="watheeq/assets/img/howtostarticon2.png"
                alt="step-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">(2) أعرض خدماتك القانونية</p>
              <p className="text-xl">
                سواء كانت استشارات، إعداد عقود، مرافعات، أو مذكرات قانونية .
                وغيرها من الخدمات.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="border-8 border-primary rounded-full p-5">
              <img
                height={56.79}
                width={52}
                src="watheeq/assets/img/howtostarticon3.png"
                alt="step-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">(3) تفاعل مع عملائك باحتراف</p>
              <p className="text-xl">
                تواصل مع عملائك مباشرة عبر محادثات نصية أو صوتية أو مرئية .
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="border-8 border-primary rounded-full p-5">
              <img
                height={56.79}
                width={52}
                src="watheeq/assets/img/howtostarticon4.png"
                alt="step-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">
                (4) أطلق صفحتك وابدأ استلام الطلبات
              </p>
              <p className="text-xl">
                انشر صفحتك عبر رابط وباركود خاص وابدأ مسيرتك الرقمية بثقة
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 py-10 lg:py-15 flex flex-col">
        <img src="watheeq/assets/img/video.png" alt="watheeq" className="w-full mb-5" />
        <div className="flex flex-col lg:flex-row bg-primary text-white h-auto lg:h-36 md:rounded-r-3xl md:rounded-l-3xl  mt-6 lg:mt-0">
          <div className="text-xl lg:text-3xl w-full lg:w-1/2 text-center flex items-center justify-center mt-5 mb-5" style={{color: 'white', backgroundColor: '#13498B', }}>
            الخطوة الرابعة
          </div>
          <div className="text-primary bg-background h-auto lg:h-36 text-sm lg:text-xl w-full lg:w-1/2 px-5 flex items-center justify-center md:rounded-r-3xl" style={{color: '#0B2B51', backgroundColor: 'white', borderRadius: '22px 22px 22px 22px' }}>
            انشر صفحتك عبر رابط وباركود خاص وابدأ مسيرتك الرقمية بثقة
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToStart;
