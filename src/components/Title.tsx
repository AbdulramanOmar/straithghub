type TitleProps = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="text-center mb-10">
      <h3 className=" font-bold mb-5">
        <span className="bg-straighthub px-5   text-white rounded-full ">
          {title}
        </span>
      </h3>
      <h4 className="lg:text-3xl  font-bold text-2xl  relative z-20">
        {subtitle}
      </h4> 
    </div>
  );
};

export default Title;
