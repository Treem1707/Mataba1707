import { AcademicCapIcon, ClockIcon, HomeIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import about_intro from "@assets/about-page/about-intro-1.svg";

type Props = {}

const AboutIntroSection = (props: Props) => {
  return (
    <div className="bg-slate-50 w-full py-16">
    <div className="max-w-7xl w-full mx-auto flex flex-row">
      <img src={about_intro} alt="about intro" className="w-1/3" />
      <div className="w-2/3 flex flex-col space-y-2">
        <p className="text-pink-600 font-medium text-sm uppercase">
          INTRODUCTION
        </p>
        <p className="text-2xl max-w-sm text-slate-900 font-bold">
          Welcome to Our Academic Community
        </p>
        <p className="text-sm font-medium text-slate-400 max-w-xl">
          Welcome to our academic community on our website! We're thrilled
          to have you join us in this vibrant space for knowledge and
          growth. Connect with fellow students, researchers, and educators,
          and engage in meaningful discussions.
        </p>
        <p className="text-sm font-medium text-slate-400 max-w-xl">
          {" "}
          Explore diverse disciplines and contribute your unique insights.
          Together, let's embark on an exciting academic journey. Welcome!
        </p>
        <div className="grid grid-cols-2 gap-4 pt-8 max-w-lg">
          <IntroIcon color="bg-purple-600" text="History" Icon={ClockIcon} />
          <IntroIcon color="bg-cyan-600" text="Academic" Icon={AcademicCapIcon} />
          <IntroIcon color="bg-orange-600" text="Innovation" Icon={LightBulbIcon} />
          <IntroIcon color="bg-pink-600" text="Faculty" Icon={HomeIcon} />
        </div>
      </div>
    </div>
  </div>
  )
}


interface IntroIconProps{
    Icon: any,
    color: string,
    text: string
}

const IntroIcon = (props: IntroIconProps) => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <div className={`flex p-1 ${props.color} text-white rounded-full`}>
        <props.Icon height={20} width={20} />
      </div>
      <p className="text-sm font-medium">{props.text}</p>
    </div>
  );
};

export default AboutIntroSection