import AboutHeroSection from "@components/page-section/about-page/AboutHeroSection";
import AboutDivider from "@components/about-divider/AboutDivider";
import enroll_big from "@assets/about-page/enroll-big-pic.svg";
import { StarIcon } from "@heroicons/react/24/solid";
import GeneralLayout from "@layouts/GeneralLayout";
import {
  ChevronRightIcon,
  ClockIcon,
  PaperAirplaneIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Enroll = () => {
  return (
    <GeneralLayout>
      <AboutHeroSection heading="Enroll" />
      <div className="w-full bg-slate-50 py-16">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-5 gap-8">
          {/* right side */}
          <div className="col-span-3 flex flex-col space-y-8">
            <p className="text-lg font-semibold text-slate-900">
              Mechatronics Engineering: From Basics to Advanced
            </p>
            <div className="border-t border-slate-200"></div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-1">
                <PaperAirplaneIcon
                  height={16}
                  width={16}
                  className="text-pink-600"
                />
                <p className="text-slate-600 text-sm font-medium">
                  Mechatronics
                </p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <ClockIcon height={16} width={16} className="text-pink-600" />
                <p className="text-slate-600 text-sm font-medium">6 Years</p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <UserGroupIcon
                  height={16}
                  width={16}
                  className="text-pink-600"
                />
                <p className="text-slate-600 text-sm font-medium">
                  500+ Students
                </p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <UserIcon height={16} width={16} className="text-pink-600" />
                <p className="text-slate-600 text-sm font-medium">
                  10+ Lectures
                </p>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <StarIcon height={10} width={10} className="text-pink-600" />
                <StarIcon height={10} width={10} className="text-pink-600" />
                <StarIcon height={10} width={10} className="text-pink-600" />
                <StarIcon height={10} width={10} className="text-pink-600" />
                <StarIcon height={10} width={10} className="text-pink-600" />
              </div>
            </div>
            <div className="h-90 border border-[#9747FF]">
              <img src={enroll_big} alt="" />
            </div>
            <p className=" font-semibold text-slate-900">About The Program</p>
            <p className="text-sm font-medium text-slate-400">
              Mechatronics engineering is a multidisciplinary field that
              combines mechanical engineering, electronics, computer science,
              and control engineering. It focuses on integrating mechanical and
              electrical components with computer control to design intelligent
              systems and products. Mechatronics engineers work on developing
              automated systems, robotics, and smart machines. They integrate
              mechanical, electronic, and computer components, apply control
              theory, and have knowledge of programming and software
              development. Mechatronics engineering finds applications in
              industries such as automotive, aerospace, manufacturing, robotics,
              healthcare, and consumer electronics. To pursue a career in
              mechatronics engineering, a bachelor's degree in mechatronics or a
              related field is recommended, along with gaining practical
              experience through internships or projects.
            </p>
            <p className=" font-semibold text-slate-900">What you'll learn</p>
            <div className="flex flex-row items-center space-x-2">
              <ChevronRightIcon
                height={12}
                width={12}
                className="text-pink-600"
              />
              <p className="text-xs text-slate-400">Mechanical Engineering</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <ChevronRightIcon
                height={12}
                width={12}
                className="text-pink-600"
              />
              <p className="text-xs text-slate-400">Electronics</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <ChevronRightIcon
                height={12}
                width={12}
                className="text-pink-600"
              />
              <p className="text-xs text-slate-400">Control Engineering</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <ChevronRightIcon
                height={12}
                width={12}
                className="text-pink-600"
              />
              <p className="text-xs text-slate-400">Robotics and Automation</p>
            </div>
          </div>
          {/* right side */}
          <div className="col-span-2 flex flex-col space-y-16 w-full">
            {/* item 1 */}
            <div className="border border-purple-600 rounded-tl-3xl rounded-br-3xl p-8 space-y-6">
              <p className="max-w-sm text-slate-900 font-semibold">
                February 28 2023{" "}
              </p>
              <div className="flex">
                <Link to='/register' className="flex bg-pink-600 text-white px-4 py-3 rounded-full">
                  Enroll Now
                </Link>
              </div>
              <p className="text-slate-400 text-sm font-medium">
                Click the Enroll button to join our community of passionate
                engineers, unlock limitless possibilities in mechatronics
                engineering, and shape the future of automation and robotics.
              </p>
            </div>
            {/* item 2 */}
            <div className="border border-purple-600 rounded-tl-3xl rounded-br-3xl p-8 space-y-6">
              <p className="max-w-sm text-slate-900 font-semibold text-center">
                Related Programs
              </p>
              <div className="border-t border-slate-200"></div>
              <div className="flex flex-row items-center space-x-2">
                <ChevronRightIcon
                  height={12}
                  width={12}
                  className="text-pink-600"
                />
                <p className="text-xs text-slate-400">
                  Bachelor's Degree in Mechanical Engineering
                </p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <ChevronRightIcon
                  height={12}
                  width={12}
                  className="text-pink-600"
                />
                <p className="text-xs text-slate-400">
                  Bachelor's Degree in Electrical Engineering
                </p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <ChevronRightIcon
                  height={12}
                  width={12}
                  className="text-pink-600"
                />
                <p className="text-xs text-slate-400">
                  Master's Degree in Robotics and Automation
                </p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <ChevronRightIcon
                  height={12}
                  width={12}
                  className="text-pink-600"
                />
                <p className="text-xs text-slate-400">
                  Master's Degree in Control Systems Engineering
                </p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <ChevronRightIcon
                  height={12}
                  width={12}
                  className="text-pink-600"
                />
                <p className="text-xs text-slate-400">
                  Ph.D. in Mechatronics or Robotics
                </p>
              </div>
            </div>
            {/* item 3 */}
            <div className="border border-purple-600 rounded-tl-3xl rounded-br-3xl p-8 space-y-6">
              <p className="max-w-sm text-slate-900 font-semibold">
                Subscribe Our Newsletter
              </p>
              <input
                type="text"
                className="bg-purple-200 rounded-full px-4 py-3"
              />
              <div className="bg-pink-600 text-white px-4 py-3 text-center uppercase">
                Subscribe here
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutDivider />
    </GeneralLayout>
  );
};

export default Enroll;
