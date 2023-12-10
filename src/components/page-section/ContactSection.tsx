import React from "react";

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <div className="py-16 min-h-screen w-full grid items-center content-center px-4">
      <div className="max-w-7xl bg-[#9747FF] p-16 rounded-tl-[80px] rounded-br-[80px] w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-16">
        <div className="col-span-1 space-y-2">
          <p className="text-5xl text-white font-bold">
            Write your contact data and we’ll get in touch with you
          </p>
          <p className="text-white">
            Get informed about current news or we’ll get in touch with you to
            discuss all questions.
          </p>
        </div>
        <div className="col-span-1 space-y-8">
          <input
            type="text"
            placeholder="Your name"
            className="bg-[#E5D8FD] p-4 rounded-full w-full"
          />
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-[#E5D8FD] p-4 rounded-full w-full"
          />
          <textarea
            rows={8}
            placeholder="Your message"
            className="bg-[#E5D8FD] p-4 rounded-3xl w-full"
          />

          <div className="flex">
            <div className="flex bg-slate-900 text-white py-4 px-8 capitalize font-medium rounded-full">
              send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
