import AOSInit from "@/components/animation/AOSInit";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <section>
      <AOSInit/>
        <nav className="container mx-auto px-[15px] sm:px-10">
        <Navbar />
      </nav>
      <div className="container mx-auto">

      <main className="p-[30px] sm:p-[35px] sm:px-[85px]" data-aos="fade-up"
            data-aos-delay="50">
      <div>
          <h2 className="text-4xl font-bold mb-4 mt-10">سياسة الخصوصية</h2>
          <p className="mb-10 text-2xl">
            منصة وثيق ترحب بكم. نشركم على ثقتكم واختياركم لمنصتنا لتكون بوابتكم
            الالكترونية. كما نعتز ونفتخر في فريق وثيق بتقديم أفضل الخدمات
            وأعلاها جودةً للمهنيين الأعزاء. وحرصاً من منصة وثيق للحفاظ على حقوق
            وسرية تجارنا فقد تم كتابة سياسة الخصوصية لتسهيل معرفة كيفية جمع
            معلومات التجار واستخدامها. وقد تتم بعض التحديثات في سياسة الخصوصية
            بناءا على التطور التقنية في المجال.
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4 mt-10">
            ما هي المعلومات التي تحصل عليها منصة وثيق من المهنني والعميل؟
          </h3>
          <ul className="list-decimal list-inside space-y-2 mt-5">
            <li className="mb-10 text-2xl">
              المعلومات الشخصية الخاصة بالمهني، كالاسم والعمر والبريد الالكتروني
            </li>
            <li className="mb-10 text-2xl">
              المعلومات الشخصية الخاصة بالعميل، كالاسم والعمر والبريد
              الالكتروني.
            </li>
            <li className="mb-10 text-2xl">
              المعلومات الخاصة بالمهني مثل التراخيص المهنية (مع إمكانية رفع
              المستندات والوثائق الثبوتية)
            </li>
            <li className="mb-10 text-2xl">
              معلومات الدخول الشخصية الخاصة بلوحة تحكم المهني ، مثل اسم المستخدم
              وكلمة السر والبريد الالكتروني.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4 mt-10">
            مشاركة معلومات المهني
          </h3>
          <ul className="list-decimal list-inside space-y-2 mt-5">
            <li className="mb-10 text-2xl">
              جميع المعلومات التي قد تتم مشاركتها هي لغرض تحسين الخدمة المقدمة
              للمهني.
            </li>
            <li className="mb-10 text-2xl">
               المعلومات الخاصة للمهني لا يتطلع عليها الا العملاء المصرحين ضمن
              منصة وثيق.
            </li>
            <li className="mb-10 text-2xl">
              في حال ملاحظة منصة وثيق أي نشاط مخالف او غير شرعي لأنظمة المملكة
              العربية السعودية فإن المنصة تشارك معلومات التاجر لدى الجهات
              المختصة وذلك حفاظاً على المنصه والمهنيين ومستهلكيها من النشاطات
              المخالفة او الغير شرعية.
            </li>
            <li className="mb-10 text-2xl">
              جميع الحقوق الواردة في العلاقة المنصة والمهني مذكورة هنا ، حيث أن
              هذه القواعد هي سياسة الخصوصية وسرية المعلومات والمذكورة من
              الاتفاقية التي ابرمت بين للمهني والمنصة عند تأسيسه للموقع، وقد
              وضعت هذه السياسة لضمان المصداقية والثقة.
            </li>
          </ul>
        </div>
      </main>
      </div>
      <footer className="text-white" data-aos="fade-up"
            data-aos-delay="100">
        <Footer/>
      </footer>
    </section>
  );
}
