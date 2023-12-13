import about_why from "@assets/about-page/about-why.svg";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

type Props = {};

const AboutWhy = (props: Props) => {
  const why_info = [
    { name: "Academic Excellence" },
    { name: "Innovative Learning Experience" },
    { name: "Alumnin Sucess Stories" },
    { name: "Affordability and Scholarships" },
  ];
  return (
    <div className=" bg-slate-50 w-full ">
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto py-16 px-4">
        <div className="col-span-1 flex flex-col space-y-6 border-pink-900">
          <p className="text-sm font-medium text-pink-600">
            WHY CHOOSE ENROLLMATE
          </p>
          <p className="max-w-sm text-2xl text-slate-900 font-bold">
            Providing a Transformative Education Experience
          </p>
          <p className="text-sm text-slate-400 font-medium max-w-sm">
            Experience transformative education with us. Empowering students to
            thrive in a changing world through innovative teaching, experiential
            learning, and a supportive community. Unleash your potential today.
          </p>
          <div className="max-w-sm space-y-6">
            {why_info.map((item, index) => (
              <WhyItem name={item.name} key={index} />
            ))}
          </div>
        </div>
        <div className="col-span-1 relative md:flex hidden">
          <div className="bg-pink-600 rounded-full h-4 w-4 absolute top-40 right-10 z-0"></div>
          <div className="bg-pink-600 rounded-full h-10 w-10 absolute bottom-5 right-20 z-0"></div>
          <div className="bg-pink-600 rounded-full h-60 w-60 absolute bottom-10 right-40 z-0"></div>

          <img
            src={about_why}
            alt="about why"
            className="z-10 absolute bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

interface WhyItemProps {
  name: string;
}

const WhyItem = (props: WhyItemProps) => {
  return (
    <div className="flex flex-row items-center px-4 py-2 text-sm font-medium rounded-tl-3xl rounded-br-3xl space-x-4 border border-pink-600">
      <CheckCircleIcon height={16} width={16} className="text-pink-600" />
      <p>{props.name}</p>
    </div>
  );
};

export default AboutWhy;
