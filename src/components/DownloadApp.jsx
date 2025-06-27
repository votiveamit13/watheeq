"use client";

import AOSInit from "./animation/AOSInit";


function DownloadApp() {


  return (
<section className="mx-[15px] sm:mx-[35px]">
    <AOSInit />
<div className="block md:flex justify-between bg-primary font-omnes text-white rounded-2xl" style={{ backgroundColor: '#13498B' }}>
<div className="w-full sm:w-1/2 flex flex-col justify-center pr-5 pl-5 gap-2">
<h2 className="text-[30px] pt-[25px] sm:text-6xl sm:pt-0 font-bold">
  إدارة صفحتك القانونية بسهولة
</h2>
          <div className="content text-3xl leading-12">
            <p className="text-[20px] sm:text-[30px]">راقب طلبات الاستشارات القانونية، تتبّع مدفوعاتك، تفاعل مع عملائك، وعدّل خدماتك في أي وقت عبر تطبيق وثيق للمحامين</p>
            <p className="pt-10 text-[20px] sm:text-[30px]"> حمل التطبيق الآن</p>
          </div>

          <div className="block md:flex gap-5 mt-6">
            <img src="/watheeq/assets/img/appstore.png" alt="app store" style={{width:'200px'}} className="mb-[8px] sm:mb-0 cursor-pointer" data-aos="zoom-in" data-aos-delay="100"/>
            <img src="/watheeq/assets/img/googleplay.png" alt="google play"  style={{width:'200px'}} data-aos="zoom-in" data-aos-delay="100" className="cursor-pointer"/>
          </div>
        </div>
        <div className="py-10 sm:py-20 w-full sm:w-1/2">
        <img src="/watheeq/assets/img/app.png" alt="watheeq"  data-aos="flip-left" data-aos-delay="100"/>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
