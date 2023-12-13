import hero_section from "@assets/about-page/about-hero.svg";

type Props = {
  heading: string;
  crum: string
};

const AboutHeroSection = (props: Props) => {
  return (
    <div className="min-h-[80vh] bg-slate-50 flex flex-col">
      <div className="max-w-7xl w-full mx-auto grid flex-1 h-full py-16 rid-cols-3 px-4">
        <div className="flex flex-col col-span-1 md: grid-cols-2">
          <p className="text-4xl font-bold text-slate-900 pb-2">
            {props.heading}
          </p>
          <p className="text-slate-900 font-semibold">
            <span className="text-pink-600">Home</span> / <span>{props.crum}</span>
          </p>
        </div>
        <div className="col-span-2">
          <div className="border border-purple-[#ED4883] rounded-tl-[100px] rounded-br-[100px]">
            <img src={hero_section} alt="hero section" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
