import Footer from "@/components/professionalpersonal/Footer";
import Navbar from "@/components/professionalpersonal/Navbar";

export default function ServiceDetails() {
  return (
    <div className="bg-[#F0F9FF]">
      <div className="mr-40 ml-40">
        <Navbar />
      </div>
      <div className="mr-40 ml-40">
        <div className="bg-white p-5 mt-5 rounded-lg mb-30">
          <div className="relative mt-5 flex flex-col items-center">
            <div className="relative inline-block w-full">
              <img
                src="/watheeq/assets/img/servicerequest.png"
                alt="watheeq"
                className="w-full h-auto"
              />

              <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[] to-[#13498B]"
                style={{ borderRadius: "10px" }}
              ></div>
            </div>
            <p className="absolute text-3xl text-white font-bold font-center mt-50">
              مهارات إعداد وصياغة العقود القانونية
            </p>
            <div className="absolute flex items-center mt-65 bg-white py-2 px-5 rounded-lg gap-3 cursor-pointer">
              <button className="text-2xl text-[#13498B] cursor-pointer">
                45
              </button>
              <img
                src="/watheeq/assets/img/servicerequest1.png"
                alt="watheeq"
                width={20}
              />
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-2xl font-bold">تفاصيل الخدمة :</h3>
            <p className="mt-5 leading-[2] text-[#000000B2]">
              هل تحتاج إلى عقد قانوني محكم يحمي حقوقك ويلبي احتياجاتك
              بدقة؟ نقدّم لك خدمة صياغة ومراجعة العقود من قبل مهنيين قانونيين
              ذوي خبرة، لضمان وضوح الشروط، وتجنب الثغرات، وحماية مصالحك بالكامل.
            </p>
            <span className="leading-[2] text-[#000000B2]">
              سواء كنت فردًا أو شركة، نساعدك على:
            </span>
            <ul className="leading-[2] text-[#000000B2] list-disc mr-5">
              <li>
                إعداد عقد جديد من الصفر، يتوافق مع القوانين المحلية والدولية.
              </li>
              <li>مراجعة عقد قائم واكتشاف أي نقاط ضعف أو بنود مجحفة.</li>
              <li>تقديم اقتراحات تعديل واضحة واحترافية.</li>
              <li>شرح البنود القانونية بلغة مفهومة وغير معقدة.</li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold">ما الذي نقدمه في هذه الخدمة</h3>
            <ul className="mt-5 leading-[2] text-[#000000B2] list-disc mr-5">
              <li>
                صياغة عقود جديدة بجميع أنواعها (عمل، شراكة، إيجار، بيع وشراء...)
              </li>
              <li>مراجعة العقود القائمة وتقديم ملاحظات قانونية مفصلة</li>
              <li>تعديل العقود وفقًا للوائح المعمول بها</li>
              <li>توثيق العقود إذا لزم الأمر</li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold">كيف يتم تقديم الخدمة؟</h3>
            <ul className="mt-5 leading-[2] text-[#000000B2] list-decimal mr-5">
              <li>تواصل معنا لتحديد نوع العقد</li>
              <li>نراجع التفاصيل ونتواصل معك لفهم البنود المطلوبة</li>
              <li>نقوم بصياغة أو مراجعة العقد خلال مدة متفق عليها</li>
              <li>تحصل على نسخة بصيغة رقمية وجاهزة للطباعة</li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl mb-5 font-bold">
              هل يشمل السعر الاستشارات؟
            </h3>
            <span className="leading-[2] text-[#000000B2]">
              نعم، الاستشارة القانونية الأولية مشمولة في الخدمة.
            </span>
          </div>

          <div className="mt-10 mb-20">
            <h3 className="text-2xl mb-5 font-bold">
              هل ترغب بصياغة عقد قانوني الآن؟
            </h3>
            <span className="leading-[2] text-[#000000B2]">
              تواصل مع فريق "الدفاع الذكي" لتحصل على نسخة احترافية من عقدك في
              وقت قياسي.
            </span>
          </div>
        </div>
      </div>
            <div className="mr-40 ml-40">
        <Footer/>
      </div>
    </div>
  );
}
