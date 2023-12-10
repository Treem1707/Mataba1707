import AboutHeroSection from "@components/page-section/about-page/AboutHeroSection";
import SubscribeNow from "@components/page-section/about-page/SubscribeNow";
import AboutDivider from "@components/about-divider/AboutDivider";
import GeneralLayout from "@layouts/GeneralLayout";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import course_pic from "@assets/about-page/suscribe-picture.svg";
import { Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {      name: "Mechatronics Engineering", },
    {      name: "Information technolopgy", },
    {      name: "Computer Engineering", },
    {      name: "Tourism & hospitaality", },
    {      name: "Visual arts ", },
    {      name: "Agricultural Engineering", },
  ];
  return (
    <GeneralLayout>
      <AboutHeroSection heading="Programs" />
      <div className="flex w-full bg-slate-50 py-16 ">
        <div className="max-w-7xl w-full mx-auto space-y-6 flex flex-col">
          <p className="text-sm  font-medium text-center text-pink-600">
            OUR PROFESSIONALS
          </p>
          <p className="max-w-xs mx-auto w-full pb-16 text-3xl text-center text-slate-900 font-bold">
            Subscribe for Education Insights!
          </p>
          <div className="grid grid-cols-3 gap-8">
           {
            programs.map((item, index)=>(
              <EnrollItem name={item.name} key={index} />
            ))
           }
          </div>
        </div>
      </div>
      <SubscribeNow />
      <AboutDivider />
    </GeneralLayout>
  );
};

interface EnrollItemProps{
  name: string
}

const EnrollItem = (props:EnrollItemProps) => {
  return (
    <div className="flex flex-col border border-[#9747FF] rounded-tl-xl rounded-br-xl p-4">
      <div className="flex flex-row items-center justify-between w-full pb-4">
        <div className="flex flex-row items-center space-x-2">
          <UserGroupIcon height={12} width={12} className="text-pink-600" />
          <p className="text-xs font-medium text-slate-500">500+ Students</p>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <StarIcon height={10} width={10} className="text-pink-600" />
          <StarIcon height={10} width={10} className="text-pink-600" />
          <StarIcon height={10} width={10} className="text-pink-600" />
          <StarIcon height={10} width={10} className="text-pink-600" />
          <StarIcon height={10} width={10} className="text-pink-600" />
        </div>
      </div>
      <div className="border border-[#9747FF] grid justify-center content-center items-center">
        <img src={course_pic} className="h-60" alt="" />
      </div>
      <p className="text-lg font-semibold text-slate-900 py-4">
        {props.name}
      </p>
      <div className="border-t border-slate-200"></div>
      <div className="flex flex-row items-center py-4 space-x-2">
        {/* @ts-ignore */}
        <Avatar h={10} w={10} name="tatendaa" />
        <div className="flex flex-col">
          <p className="text-sm font-medium text-slate-400">
            Prof. Simba Chingwena
          </p>
          <p className="font-semibold text-slate-700">H.O.D</p>
        </div>
      </div>
      <Link
        to={"/enroll"}
        className="bg-pink-600 hover:bg-pink-700 uppercase text-center rounded-full py-3 text-sm text-white"
      >
        Join Now
      </Link>
    </div>
  );
};

export default Programs;
