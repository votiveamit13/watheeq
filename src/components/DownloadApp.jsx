"use client";


function DownloadApp() {


  return (
    <section style={{margin:'0px 35px'}}>
      <div className="flex justify-between bg-primary font-omnes text-white rounded-2xl" style={{backgroundColor: '#13498B'}}>
        <div className="w-1/2 flex flex-col justify-center px-14 gap-10">
          <h2 className="text-6xl font-bold">إدارة صفحتك القانونية بسهولة</h2>
          <div className="content text-3xl w-5/6 leading-12">
            <p>راقب طلبات الاستشارات القانونية، تتبّع مدفوعاتك، تفاعل مع عملائك، وعدّل خدماتك في أي وقت عبر تطبيق وثيق للمحامين</p>
            <p> حمل التطبيق الآن</p>
          </div>

          <div className="flex gap-5 mt-6">
            <img src="/watheeq/assets/img/appstore.png" alt="app store" />
            <img src="/watheeq/assets/img/googleplay.png" alt="google play" />
          </div>
        </div>
        <div className="w-1/2 py-30">
          <img src="/watheeq/assets/img/app.png" alt="watheeq" />
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
