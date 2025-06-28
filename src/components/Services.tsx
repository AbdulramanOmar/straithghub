import { motion } from "framer-motion";
import Title from "./Title";
export const serviceContent = [
  {
    name: "شراكة إنسانية وهندسية",
    des: "ندمج بين خبرتنا في العمارة ورؤيتنا المجتمعية لنصنع مشاريع تنموية تُغيّر واقع الأفراد والمجتمعات.",
    icon: "/ser (4).png",
  },
  {
    name: "حلول مستدامة لا وقتية",
    des: "نقدم مشاريع تدوم، ليست فقط للترميم اللحظي، بل لبناء بيئة سكنية آمنة ومتكاملة تدعم استقرار الإنسان.",
    icon: "/ser (1).png",
  },
  {
    name: " جودة بمعايير وطنية",
    des:"نلتزم بأعلى المواصفات الهندسية والتقنية، لأننا نؤمن أن من يستحق الدعم… يستحق الأفضل.",
    icon: "/ser (3).png",
  },
  {
    name: "مشاريع تمسّ القلب",
    des: "من ترميم المساجد إلى تبريد ممرات الحجاج، نحن نعمل على ما يلامس حياة الناس في أدق تفاصيلها.",
    icon: "/ser (2).png",
  },
];

const Services = () => {
  return (
    <section className="py-20 " id="whyUs">
      <Title
        title=" لماذا نحن"
        subtitle="لأننا لا نُرمم الأماكن فقط… بل نُعيد بناء الأثر في حياة الناس"
      />
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.4, // تأخير بسيط بين كل بطاقة والأخرى
              },
            },
          }}
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16  sm:gap-7 "
        >
          {serviceContent.map((service, i) => {
            return (
              <motion.div
                key={i}
                className=" relative flex justify-between flex-col bg-[#f5f5f5] px-5 py-7 rounded-3xl"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-between">
                  <div className="relative w-[60px] h-[60px] z-10">
                    {/* الخلفية المائلة */}
                    <span className="absolute top-0 right-0 w-full h-full bg-straighthub/50 rotate-[-9deg] origin-bottom-right rounded-[15px] -z-10 "></span>

                    {/* الخلفية الأساسية */}
                    <div className="absolute top-0 right-0 w-full h-full bg-straighthub rounded-[15px] z-0"></div>

                    {/* الأيقونة */}
                    <div className="relative w-full h-full flex items-center justify-center z-10">
                      <img
                        src={service.icon}
                        alt={service.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>

                  <h5
                    className="text-5xl sm:text-6xl font-bold"
                    style={{
                      WebkitTextStroke: "1px #71BEA4",
                      color: "transparent",
                    }}
                  >
                    0{i + 1}
                  </h5>
                </div>
                <h2 className="font-bold mt-4 text-straighthub text-base sm:text-xl">
                  {service.name}
                </h2>
                <p className="text-[#777] text-lg my-4">{service.des}</p>
                <a href="#" className="text-straighthub hover:underline">
                  اعرف المزيد...
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
