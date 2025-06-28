import { FaRegEye } from "react-icons/fa6";
import { TbMessage } from "react-icons/tb";
import backImg from "/background.png";
const stats = [
  {
    label: "الرؤية",
    icon: <FaRegEye className="text-3xl text-white" />,
    des: "أن نكون نموذجًا وطنيًا رائدًا في التنمية المجتمعية المستدامة",
  },
  {
    label: " الرسالة",
    icon: <TbMessage className="text-3xl text-white" />,
    des: " أن نُحدث فرقًا ملموسًا في حياة الناس عبر مشاريع ترميم مبتكرة",
  },
];

const AboutUs = () => {
  return (
    <div>
      <section
        className="py-20 "
        id="about"
        style={{
          backgroundImage: `url(${backImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container ">
          <div className=" flex flex-col lg:flex-row items-center gap-10">
            {/* النص */}
            <div className="lg:w-1/2 text-center lg:text-right">
              <h3 className=" font-bold ">
                <span className="bg-straighthub px-5   text-white rounded-full ">
                  من نحن
                </span>
              </h3>
              <h2 className="text-3xl md:text-5xl md:leading-[1.4] font-bold mt-2 mb-6 ">
                <span className="text-straighthub font-extrabold">وثر العمارة... </span> حيث
                تُبنى الحياة من جديد
              </h2>
              <p className="md:text-xl text-base text-[#777] leading-relaxed mb-4">
                <span className="font-bold text-straighthub">وثر العمارة</span>{" "}
                هي شركة غير ربحية انطلقت برؤية واضحة لتكون ذراعًا تنفيذيًا
                فاعلًا لجمعية{" "}
                <strong className="text-secondary">ترميم للتنمية</strong>، تُعنى
                بتحقيق التحول العمراني المستدام في المملكة. نؤمن بأن تحسين جودة
                الحياة يبدأ من بيئة سكنية لائقة، وأن لكل منزل قصة تستحق أن تُروى
                من جديد.
              </p>

              <div className="flex flex-row  items-center  gap-5">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center lg:items-start  space-y-2"
                  >
                    <div className=" w-fit border border-straighthub p-2 flex items-center justify-center bg-straighthub rounded-lg ">
                      {item.icon}
                    </div>
                    <h5 className="text-lg font-bold text-gray-800">
                      {item.label}
                    </h5>
                    <p className="text-[#777] "> {item.des} </p>
                  </div>
                ))}
              </div>
            </div>

            {/* الصورة */}
            <div className="lg:w-[500px] mr-auto">
              <img src="/about.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
