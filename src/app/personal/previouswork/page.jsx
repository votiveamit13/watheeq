import Footer from "@/components/professionalpersonal/Footer";
import Navbar from "@/components/professionalpersonal/Navbar";

export default function PreviousWork() {
  return (
    <div className="bg-[#F0F9FF] pt-5">
      <div className="lg:mr-40 mr-2 lg:ml-40 ml-2">
        <div className="bg-white p-5 rounded-lg mb-5">
          <Navbar />
          <div className="relative mt-5">
            <h1 className="text-l font-bold">
              الدمج بين التعليم الإلكتروني والتعليم القانوني{" "}
            </h1>
            <div className="flex flex-col justify-between md:flex-row bg-white mt-5 gap-4 text-right max-w-5xl mx-auto">
              <div className="w-full md:w-[62%]">
                <img
                  src="/watheeq/assets/img/previouswork.png"
                  alt="Project"
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <div className="w-full md:w-[35%] space-y-2 shadow rounded-lg p-2">
                <h2 className="text-lg font-bold text-gray-700">
                  معلومات المشروع
                </h2>
                <div className="text-sm text-gray-700 leading-[4]">
                  <div className="flex justify-between">
                    <span>جهة التنفيذ :</span>
                    <span className="font-medium">الإبداع الحديثة</span>
                  </div>
                  <div className="flex justify-between">
                    <span>المجال :</span>
                    <span className="font-medium">التعليم الالكتروني</span>
                  </div>
                  <div className="flex justify-between">
                    <span>تاريخ البدء :</span>
                    <span className="font-medium">1-شوال-1446هـ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>تاريخ الانتهاء :</span>
                    <span className="font-medium">29-شوال-1446هـ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>حالة المشروع :</span>
                    <span className="font-medium">مكتمل</span>
                  </div>
                </div>

                <div>
                  <h3 className="mt-4 font-semibold text-gray-700">
                    المهارات المستخدمة:
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "مهارة 1",
                      "مهارة 2",
                      "مهارة 3",
                      "مهارة 4",
                      "مهارة 5",
                      "مهارة 6",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 mb-20">
              <h3 className="text-2xl mb-5 font-bold">الوصف:</h3>
              <p className="leading-[2] text-[#000000B2] mb-5">
                مع التطور السريعة لتكنولوجيا المعلومات، التي كانت نتيجة لإندماج
                تكنولوجيا الحاسوب والأجهزة السمعية والبصرية وكذلك الإتصالات، وفي
                ظل المتغيرات السريعة في أنماط التعليم القانوني وطرائقه، شهد ذلك
                إدخال سلسلة جديدة من الوسائل الإلكترونية الحديثة في حقل
                هذا التعليم، فبرز معه مفهوم التعليم الإلكتروني، الذي دفع
                بالتعليم إلى مناطق واسعة في الكرة الأرضية فقد أصبح بالإمكان ربط
                الطلبة ومدرسيهم عن بعد بطريقة إلكترونية دون الحاجة إلى التواجد
                في مكان واحد، وتبرز الحاجة الماسة لهذا الأسلوب من التعليم في ظل
                الأزمات،
              </p>
              <p className="leading-[2] text-[#000000B2] mb-5">
                وهو الحال مع الانتشار الواسع والمتسارع لفيروس كوفيد 19 الذي أثر
                سلبا على التعليم وسير المنظومة التعليمية في العديد من الدول، وهو
                ما يجبرنا على النظر إلى إستراتيجية تكنولوجيا المعلومات بواقعية
                وتعميمها على المؤسسات الجامعية والدفع بها قدما، فهو عملية محاكاة
                لبيئة واقعية يتم تصويرها وبنائها من الإمكانات التكنولوجية
                الحديثة لتعميم التعليم بصفة عامة وفي المجال القانوني بصفة خاصة،
                وضمان إستمراريته في ظل وجود العوائق والحواجز التي تحول دون
                تحققه،
              </p>
              <p className="leading-[2] text-[#000000B2] mb-50">
                والهدف من هذه المداخلة هو كيفية الخروج من أزمة التعليم في كافة
                المؤسسات الجامعية من خلال اللجوء إلى التعليم الإلكتروني وقابلية
                هذا الأسلوب المستحدث لبناء بيئة تعليمية إفتراضية في مواجهة
                الأزمات.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mr-40 mr-2 lg:ml-40 ml-2 pb-5">
        <Footer />
      </div>
    </div>
  );
}
