import AOSInit from "@/components/animation/AOSInit";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-[#f8fafc]">
      <AOSInit />

      <div className="container mx-auto">

      <nav className="container mx-auto lg:px-10 px-5">
        <Navbar/>
      </nav>
      <main className="p-[30px] sm:p-[35px] sm:px-[85px]" data-aos="fade-up"
            data-aos-delay="50">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 mt-10">الشروط والاحكام</h2>
      <ul className="list-disc list-inside space-y-2 mt-5">
          <li className="mb-10 text-2xl">التسجيل بمنصة وثيق يُعتبر الفرد المستفيد من الخدمة هو الطرف المتعاقد (مالك الحساب)، الذي يخضع لشروط الاستخدام</li>
          <li className="mb-10 text-2xl">تلتزم بتقديم معلومات صحيحة ومحدثة وكاملة وقانونية عن نفسك، وذلك وفقًا للمتطلبات المطلوبة أثناء عملية التسجيل.</li>
          <li className="mb-10 text-2xl">يوافق على الشروط والأحكام وسياسة الخصوصية الخاصة بمنصة “وثيق</li>
          <li className="mb-10 text-2xl">يختار خطة الاشتراك الشهري المناسبة له (بعد انتهاء فترة الاشتراك المجاني للتجربة ٢١ يوم) </li>
          <li className="mb-10 text-2xl">الرخصة المهنية والشهادة الأكاديمية لا تظهر للعملاء إنما هي فقط للتؤكد من إدارة المنصة. الرخصة المهنية يظهر رقم الرخصة فقط للەملاء في بنر مخصص لكل مهنة</li>
          <li className="mb-10 text-2xl">في حال كان المهني يمثل شركة او مؤسسة او وكالة تجارية او كيان تجاري يجب ان يكون على علم تام بالقوانين والأنظمة الخاصة للتجارة الالكترونية او التقنية بالمملكة العربية السعودية وان يكون ممثلها يمتلك المستندات الكافية لتمثيلها يحق لمنصة تجار ان تطلب اكثر من مستند نظامي لاثبات أهلية التاجر.</li>
          <li className="mb-10 text-2xl">المستخدم هو المسؤول الوحيد عن إدارة خدمات التحويل البنكي باعتباره مالكا للحساب، ويتوجب عليه الالتزام بالحفاظ على معلومات حسابه البنكي بشكل صحيح لمتجره.</li>
          <li className="mb-10 text-2xl">يقوم المهني بتحديد سعر الخدمة  في متجره ،و لا تتدخل منصة وثيق بأي شكل من الأشكال في تقدير تكلفة  الخدمات المعروضة  على المنصة، حيث أن تقدير التكلفة بالطريقة التجارية المعتمدة يعد التزاما يتحمله المهني.</li>
          <li className="mb-10 text-2xl">لا يجوز استخدام خدمات وثيق في أي أنشطة غير مصرح بها او أنشطة غير نظامية، وفي حالة قيام المهني بغير نشاطه أو إضافة نشاط جديـد لا تتحمل وثيق اي اضرار تجاه ذلك دون ادنى مسؤولية.</li>
        </ul>
      </main>
      </div>
      <footer className="text-white" data-aos="fade-up"
            data-aos-delay="100">
        <Footer/>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
