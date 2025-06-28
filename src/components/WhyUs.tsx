import { motion } from "framer-motion";
import Title from "./Title";
import img1 from "/image 1.png";
import img2 from "/image 2.png";
import img3 from "/image 3.png";
import { LuArrowUpLeft } from "react-icons/lu";
export const whyUSContent = [
  {
    name: "الإنشاءات العامة للمباني",

    icon: img1,
  },
  {
    name: "ترميمات المباني السكنية",
    icon: img2,
  },
  {
    name: "تشطيب المباني.",

    icon: img3,
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-[#f1f1f1]" id="services">
      <Title
        title=" الخدمات "
        subtitle="نحن شركاء نجاحكم نقدم حلول هندسية مبتكرة تلبي احتياجاتكم،"
      />

      <div className="container mt-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whyUSContent.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group h-[250px] sm:h-[340px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{
                backgroundImage: `url(${item.icon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* تدرج أسود من الأسفل للأعلى */}
              <div className="absolute inset-0 bg-gradient-to-t from-straighthub/60 via-straighthub/5 to-transparent z-10" />

              {/* العنوان فوق الصورة دائمًا */}
              <div className="absolute w-full bottom-6 flex items-center justify-between  right-0 z-20 pl-3 pr-6 text-center">
                <h3 className="text-2xl  font-extrabold group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 text-white drop-shadow-md">
                  {item.name}
                </h3>
                <div className="text-white bg-straighthub rounded-full p-2 group-hover:-rotate-45 group-hover:-translate-y-1 transition-all duration-300">

                <LuArrowUpLeft  size={32}/>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
