import Footer from "@/components/professionalpersonal/Footer";
import Navbar from "@/components/professionalpersonal/Navbar";

export default function Blog() {
  return (
    <div className="bg-[#F0F9FF] pt-5">
      <div className="mr-40 ml-40">
        <div className="bg-white p-5 rounded-lg mb-5">
          <Navbar />
          <h1 className="text-l mt-5 font-bold">
              العقود الإلكترونية بين تسهيل التجارة و التحديات القانونية
            </h1>
          <div className="relative mt-5 flex flex-col items-center">
            <div className="relative inline-block w-full">
              <img
                src="/watheeq/assets/img/publication4.png"
                alt="watheeq"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="mt-5">
            <p className="mt-5 leading-[2] text-[#000000B2]">
              ثير عقود التجارة الإلكترونية العديد من الإشكالات القانونية، أبرزها قانونية العقد، التوثيق، والاختصاص القضائي. فالتعاملات عبر الإنترنت قد تفتقر إلى المعايير التقليدية للتوثيق، مما يثير التساؤلات حول صحتها، خاصة في ظل تنامي استخدام العقود الذكية التي تعتمد على التكنولوجيا. كما أن النزاعات التي تنشأ بين الأطراف، لا سيما عبر منصات دولية، تجعل تحديد المحكمة المختصة أمرًا معقدًا.
            </p>
                        <p className="mt-5 leading-[2] text-[#000000B2] mb-100">
              لحل هذه النزاعات، تعد آليات التحكيم الإلكتروني والوساطة الإلكترونية من الحلول الفعالة. حيث توفر هذه الآليات وسيلة سريعة لحل الخلافات بعيدًا عن المحاكم التقليدية. ومن الضروري أن تتبنى التشريعات القانونية مرونة لمواكبة هذه التحولات التكنولوجية في عالم التجارة الإلكترونية.
                          </p>
          </div>
        </div>
      </div>
      <div className="mr-40 ml-40 pb-5">
        <Footer />
      </div>
    </div>
  );
}
