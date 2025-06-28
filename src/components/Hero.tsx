import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "/image 1.png";
import img2 from "/image 2.png";
import img3 from "/image 3.png";


const slides = [
  {
    title: "من نداء استغاثة إلى مسكن آمن",
    description:
      "بفضل شراكة وثر العمارة مع جمعية ترميم، تحوّل منزل مهدد بالانهيار إلى بيت يفيض بالأمان والاستقرار. لم يكن مجرد ترميم، بل حياة جديدة لأسرة بأكملها",
    image: img1,
    link:"#about",
    button: " تعرفنا علينا",
  },
  {
    title: " ترميم المساجد... منارة روحانية متجددة",
    description:
      "لأن المساجد منارات المجتمع، شاركنا في مبادرة سمو ولي العهد لترميم المساجد التاريخية في مكة والطائف. ما فعلناه لم يكن فقط ترميمًا عمرانيًا، بل ترميمًا للروح والقيم،",
    image: img2,
    link:"#projects",
    button: "استعرض أعمال الترميم",
  },
  {
    title: " تبريد الممرات بالمشاعر المقدسة",
    description:
      "في حج 2024، تجاوزت درجة حرارة الطرق 45° مئوية، وسُجلت أكثر من 1000 حالة وفاة بسبب الإجهاد الحراري. نحن في وثر العمارة، أطلقنا مشروعًا غير مسبوق لتبريد ممرات المشاة بالمشاعر،",
    image: img3,
    link:"#services",
    button: "تعرف على حلولنا الذكية",
  },
];

// حركات دخول العناصر بشكل متتالي
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwiperInit = (swiperInstance: any) => {
    setActiveIndex(swiperInstance.realIndex);
    swiperInstance.on("slideChange", () => {
      setActiveIndex(swiperInstance.realIndex);
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={handleSwiperInit}
        autoplay={{ delay: 5000 }}
        loop
        navigation
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* الخلفية */}
              <motion.div
                className="absolute inset-0 bg-cover  bg-center scale-110"
                style={{ backgroundImage: `url(${slide.image})` }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              />
              <div className="absolute inset-0 w-full  bg-[rgba(0,0,0,0.5)] z-10" />

              <div className="relative z-20 container text-center md:text-right  h-full flex items-center">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={index}
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="text-white"
                    >
                      <motion.h1
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-extrabold my-6"
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.p
                        variants={itemVariants}
                        className="text-[#ddd]  text-base md:text-xl md:leading-10 mb-10 max-w-2xl"
                      >
                        {slide.description}
                      </motion.p>
                      <motion.div
                        variants={itemVariants}
                        className="flex  md:justify-start justify-center flex-wrap gap-4"
                      >
                        <a
                          href={slide.link}
                          className="bg-straighthub text-xl text-white px-6 py-2 rounded-xl font-bold hover:scale-105 transition transform duration-300"
                        >
                          {slide.button || "سجل الآن"}
                        </a>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
