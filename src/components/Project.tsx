import Title from "./Title";
import { TiLocation } from "react-icons/ti";
import img1 from "/image 5.png";
import img2 from "/image 6.png";
import img3 from "/image 7.png";
import img4 from "/image 8.png";
import img5 from "/image 9.png";
import img6 from "/image 10.png";
import img7 from "/image.png";
import img8 from "/image 12.png";

const projectContent = [
  {
    name: "مسجد جرير بن عبدالله البجلي",
    icon: img1,
    location: "مكة المكرمة | الطائف",
  },
  {
    name: "مسجد سدرة الصادرة",
    icon: img2,
    location: "مكة المكرمة | الطائف",
  },
  {
    name: "مسجد الجبيل",
    icon: img3,
    location: "مكة المكرمة | الطائف",
  },
  {
    name: "مسجد أبو عنبة",
    des: "من ترميم المساجد إلى تبريد ممرات الحجاج، نحن نعمل على ما يلامس حياة الناس في أدق تفاصيلها.",
    icon: img4,
    location: "مكة المكرمة | جدة",
  },
  {
    name: "مسجد الخضر",
    des: "ندمج بين خبرتنا في العمارة ورؤيتنا المجتمعية لنصنع مشاريع تنموية تُغيّر واقع الأفراد والمجتمعات.",
    icon: img5,
    location: "مكة المكرمة | جدة",
  },
  {
    name: "مسجد الفتح",
    des: "نقدم مشاريع تدوم، ليست فقط للترميم اللحظي، بل لبناء بيئة سكنية آمنة ومتكاملة تدعم استقرار الإنسان.",
    icon: img6,
    location: "مكة المكرمة | الجموم",
  },
  {
    name: "مسجد البيعة",
    des: "نلتزم بأعلى المواصفات الهندسية والتقنية، لأننا نؤمن أن من يستحق الدعم… يستحق الأفضل.",
    icon: img7,
    location: "مكة المكرمة | مكة المكرمة",
  },
  {
    name: "مشروع تبريد ممرات المشاة",
    des: "من ترميم المساجد إلى تبريد ممرات الحجاج، نحن نعمل على ما يلامس حياة الناس في أدق تفاصيلها.",
    icon: img8,
    location: "مكة المكرمة | الحرم الشريف",
  },
];
const Project = () => {
  return (
    <section id="projects" className="py-20 ">
      <Title
        title=" المشاريع "
        subtitle="﴿وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ﴾ "
      />
      <div className="container grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {projectContent.map((project, i) => {
          return (
            <div
              key={i}
              className="group relative flex justify-between flex-col rounded-3xl"
            >
              <div className="relative z-10">
                <div
                  className="relative w-full h-[220px] sm:h-[250px] overflow-hidden transition-all duration-500 brightness-[0.85] group-hover:brightness-100 group-hover:scale-105  rounded-3xl bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${project.icon})`,
                  }}
                >
                </div>
                  <div className="absolute w-fit bottom-3 right-2 text-white flex items-center gap-2 border border-white px-2 py-1 rounded-3xl">
                    <TiLocation size={24} />
                    <span className="font-bold text-xs">
                      {project.location}
                    </span>
                  </div>
              </div>

              <div className="px-4 py-5 bg-[#f1f1f1] rounded-b-3xl -mt-5">
                <h3 className="font-bold mt-4 text-straighthub text-xl">
                  {project.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
