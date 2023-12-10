import mataba from "@assets/about-page/mataba-about.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Props = {};

const faqs = [
  {
    heading: "What programs does EnrollMate Offer?",
    description: `EnrollMate Offers a wide range of programs, including undergraduate and postgraduate degrees as well as certificate and diploma courses in various disciplines.`,
  },
  {
    heading: "How can i track my Application?",
    description: `To track your application on an enrollment website, log in to your account and 
      navigate to the application section. Find your specific application using your 
      name or application number and check its status, which will indicate where 
      it stands in the evaluation process. Look for any updates or notifications 
      provided by the website, such as requests for documents or interview 
      invitations. If needed, contact the website's support team for assistance.`,
  },
  {
    heading: "What is a student to faculty ratio?",
    description: `The student-to-faculty ratio is a measure that indicates the number of students 
      enrolled in a school or university compared to the number of faculty members
       or instructors available to teach them.`,
  },
  {
    heading: "Does EnrollMate offer online courses?",
    description: `Yes, the website does offer online courses. They have a variety of courses 
      available for online learning. I recommend visiting the Courses Page to explore 
      the course catalog and find the specific online courses you are interested in.`,
  },
  {
    heading: "How can i track my Application?",
    description: ``,
  },
];

const FaqsSection = (props: Props) => {
  return (
    <div className="w-full bg-slate-50 py-16">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-3 gap-4">
        {/* first row */}
        <div className="col-span-1 space-y-6">
          <p className="text-sm font-medium text-pink-600">OUR PROFESSIONALS</p>
          <p className="max-w-xs text-3xl text-slate-900 font-bold">
            Our Expert Lecturers
          </p>
          <p className="text-sm text-slate-400 font-medium max-w-sm">
            a dynamic and knowledgeable educator dedicated to inspiring and
            guiding students towards academic excellence.
          </p>
          <div className="flex">
            <div className="flex px-4 py-2 bg-pink-600 font-medium text-sm rounded-full text-white">
              More Members
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex">
            <div className="flex flex-col space-y-4 p-2 rounded-tl-xl rounded-br-xl border border-[#417CD4]">
              <img src={mataba} className="h-60 w-60 rounded-tl-xl" alt="" />
              <p className="capitalize text-center text-sm font-medium">
                tanaka mataba
              </p>
              <p className="text-pink-600 text-xs font-medium text-center">
                rector
              </p>
              <div className="flex flex-row items-center space-x-4 self-center">
                <FaFacebook
                  height={16}
                  width={16}
                  className="text-white rounded-full bg-pink-600"
                />
                <FaLinkedin
                  height={16}
                  width={16}
                  className="text-white rounded-full bg-pink-600"
                />
                <FaInstagram
                  height={16}
                  width={16}
                  className="text-white rounded-full bg-pink-600"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex">
            <div className="flex flex-col space-y-4 p-2 rounded-tl-xl rounded-br-xl border border-[#417CD4]">
              <img src={mataba} className="h-60 w-60 rounded-tl-xl" alt="" />
              <p className="capitalize text-center text-sm font-medium">
                tanaka mataba
              </p>
              <p className="text-pink-600 text-xs font-medium text-center">
                rector
              </p>
              <div className="flex flex-row items-center space-x-4 self-center">
                <FaFacebook
                  height={16}
                  width={16}
                  className="text-white rounded-full bg-pink-600"
                />
                <FaLinkedin
                  height={16}
                  width={16}
                  className="text-white rounded-full bg-pink-600"
                />
                <FaInstagram
                  height={16}
                  width={16}
                  className="text-white rounded-full bg-pink-600"
                />
              </div>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="grid col-span-3 grid-cols-2 gap-8 pt-16">
          {/* message form */}
          <div className="border border-[#9747FF] rounded-tl-[40px] rounded-br-[40px] p-4 space-y-4">
            <p className="text-lg font-bold text-slate-900 text-center max-w-sm mx-auto ">
              Have Questions? Contact Enrollmate Admissions Now!
            </p>
            <div className="flex flex-col space-y-2">
              <p className="text-xs font-medium">Name</p>
              <input
                type="text"
                className="bg-[#E5D8FD] py-3 px-4 outline-none text-sm rounded-full"
                placeholder="Enter name "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-xs font-medium">email</p>
              <input
                type="text"
                className="bg-[#E5D8FD] py-3 px-4 outline-none text-sm rounded-full"
                placeholder="Enter email "
              />
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-xs font-medium">Message</p>
              <textarea
                rows={5}
                className="bg-[#E5D8FD] py-3 px-4 outline-none text-sm rounded-3xl"
                placeholder="Enter message "
              />
            </div>
            <div className="flex">
              <div className="flex px-4 py-2 bg-pink-600 font-medium text-sm rounded-full text-white">
                Send Message
              </div>
            </div>
          </div>
          {/* faqs */}
          <div className="flex flex-col space-y-6">
            <p className="text-sm font-medium text-pink-600 uppercase">
              Quick Questions
            </p>
            <p className="max-w-xs text-xl text-slate-900 font-semibold">
              Frequently asked questions
            </p>
            {faqs.map((item) => (
              <AccordionItem
                heading={item.heading}
                description={item.description}
                key={item.heading}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface AccordionItemProps {
  heading: string;
  description: string;
}

const AccordionItem = (props: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col space-y-2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer border border-[#9747FF] rounded-tl-xl text-center flex flex-row items-center justify-between rounded-br-xl p-2"
      >
        <div className="font-semibold text-sm">{props.heading}</div>
        <div className="flex">
          <ChevronDownIcon height={16} width={16} />
        </div>
      </div>
      {isOpen && (
        <p className="text-sm text-slate-500 p-2">{props.description}</p>
      )}
    </div>
  );
};
export default FaqsSection;