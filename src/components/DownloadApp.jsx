"use client";


function DownloadApp() {


  return (
<section className="mx-[15px] sm:mx-[35px]">
<div className="block md:flex justify-between bg-primary font-omnes text-white rounded-2xl" style={{ backgroundColor: '#13498B' }}>
<div className="w-full sm:w-1/2 flex flex-col justify-center pr-8 gap-2">
<h2 className="text-[40px] pt-[25px] sm:text-6xl sm:pt-0 font-bold">
  إدارة صفحتك القانونية بسهولة
</h2>
          <div className="content text-3xl leading-12">
            <p>راقب طلبات الاستشارات القانونية، تتبّع مدفوعاتك، تفاعل مع عملائك، وعدّل خدماتك في أي وقت عبر تطبيق وثيق للمحامين</p>
            <p className="pt-10"> حمل التطبيق الآن</p>
          </div>

          <div className="block md:flex gap-5 mt-6">
            <img src="/watheeq/assets/img/appstore.png" alt="app store" style={{width:'200px'}} className="mb-[8px] sm:mb-0"/>
            <img src="/watheeq/assets/img/googleplay.png" alt="google play"  style={{width:'200px'}}/>
          </div>
        </div>
        <div className="py-10 sm:py-20 w-full sm:w-1/2">
        <img src="/watheeq/assets/img/app.png" alt="watheeq" />
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
