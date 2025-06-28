import Title from "./Title";

const PartnerImgs = [
  "/images.png",
  "/harma.png",
  "/logo.svg",
  "/logo (1).svg",
  "/logo (2).svg",
  "/images.png",
  "/harma.png",
  "/logo.svg",
  "/logo (1).svg",
  "/logo (2).svg",
  "/images.png",
  "/harma.png",
  "/logo.svg",
  "/logo (1).svg",
  "/logo (2).svg",
];

const Partner = () => {
  return (
    <section className="py-16 bg-[#f1f1f1] overflow-hidden">
      <Title
        title="شركاء وثر العمرانية"
        subtitle="﴿وَأَحْسِنُوا إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ﴾"
      />
      <div className="mt-10 whitespace-nowrap">
        <div className="flex items-center mt-20 gap-10 animate-scroll">
          {PartnerImgs.concat(PartnerImgs).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`partner-${i}`}
              className="h-16 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
