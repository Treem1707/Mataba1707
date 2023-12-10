import { ReactNode, useState } from "react";
import Navbar from "@components/navigation/Navbar";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleBottomCenterIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { getMessage } from "@helpers/getMessage";
import axios from "axios";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import icon from '@assets/icon.png'

type Props = {
  children: ReactNode;
};

function GeneralLayout({ children }: Props) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const sendMessageHandler = async () => {
    setMessages((oldMessages: any) => [
      ...oldMessages,
      {
        from: "me",
        message: message,
      },
    ]);
    setLoading(true);
    try {
      setMessage("");
      const { data } = await axios.post(
        "https://enroll-mate-backend.onrender.com/reply",
        {
          query: message,
        }
      );

      console.log(data);
      setMessages((oldMessages: any) => [
        ...oldMessages,
        {
          from: "bot",
          message: data.result.bot,
        },
      ]);

      setLoading(false);
    } catch (error: any) {
      console.log(getMessage(error));
      setLoading(false);
    }
  };

  return (
    <div className="relatives min-h-screen flex flex-col h-full">
      <div className="nav">
        <Navbar />
      </div>
      {children}
      <div className="flex fixed bottom-8 right-10 flex-col ">
        {isChatOpen && (
          <div className="relative h-96 w-80 shadow-lg bg-white rounded-2xl mb-2 flex flex-col">
            <div
              onClick={sendMessageHandler}
              className="flex cursor-pointer bg-pink-600 absolute -right-5 bottom-10 rounded-full p-4 text-white"
            >
              <PaperAirplaneIcon height={20} width={20} />
            </div>
            <div className="flex flex-row justify-between bg-pink-600 p-4 text-white rounded-t-2xl">
              <div className="flex flex-row items-center space-x-2">
                <img src={icon} className="h-10  w-10" alt="logo" />
                <p>EnrollMate</p>
              </div>
              <div
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="flex cursor-pointer"
              >
                <ChevronDownIcon height={20} width={20} />
              </div>
            </div>
            <div className="flex-1 flex flex-col h-full p-4 overflow-y-scroll">
              {messages?.map((item: any, index: number) => (
                <>
                  {item.from === "me" && (
                    <div key={index} className="flex ml-auto self-end">
                      <p className="bg-pink-600 text-white rounded-l-full rounded-r-full px-4 py-2 text-sm font-medium my-1">
                        {item.message}
                      </p>
                    </div>
                  )}
                  {loading ? (
                    <p>...</p>
                  ) : (
                    <>
                      {item.from === "bot" && (
                        <div key={index} className="flex mr-auto self-start">
                          <p className="text-slate-900 border border-pink-600 rounded-l-full rounded-r-full px-4 py-2 text-sm font-medium my-2">
                            {item.message}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </>
              ))}
            </div>
            <div className="input w-full self-center px-4">
              <input
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Enter your message "
                className="py-4 outline-none border-t border-slate-200 w-full"
              />
            </div>
            <div className="flex seld-end px-4 py-4 flex-col">
              <p className="text-xs text-slate-400 text-end self-emd">
                POWERED BY{" "}
                <span className="text-slate-900 font-semibold">Enroll</span>Mate
              </p>
            </div>
          </div>
        )}

        <div className="flex self-end">
          <div
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="self-end flex bg-pink-600 p-2 rounded-full cursor-pointer"
          >
            {isChatOpen ? (
              <XMarkIcon height={32} width={32} className=" text-white" />
            ) : (
              <ChatBubbleBottomCenterIcon
                height={32}
                width={32}
                className=" text-white"
              />
            )}
          </div>
        </div>
      </div>
      <div className="footer w-full bg-slate-50 p-16">
        <div className="max-w-7xl px-4 grid grid-cols-4 gap-8 mx-auto w-full">
          <div className="col-span-1">
            <div className="flex">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-1 items-center py-1 px-2 bg-[#E5D8FD] rounded-full text-[#9747FF] ">
                  <FaFacebook height={32} width={32} className="" />
                  <p className="text">Facebook</p>
                </div>
                <div className="flex flex-row space-x-1 items-center py-1 px-2 bg-[#E5D8FD] rounded-full text-[#9747FF]">
                  <FaLinkedin height={32} width={32} className="" />
                  <p className="text">LinkedIn</p>
                </div>
                <div className="flex flex-row space-x-1 items-center py-1 px-2 bg-[#E5D8FD] rounded-full text-[#9747FF]">
                  <FaInstagram height={32} width={32} className="" />
                  <p className="text">Instagram</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 space-y-4">
            <p className="text-slate-900 font-bold ">
              Enroll<span className="font-medium text-slate-400">Mate</span>
            </p>
            <p className="text-slate-500">7080 Willow Cresent Avenue</p>
            <p className="text-slate-500">Old Prospect</p>
            <p className="text-slate-500">Mainaway</p>
            <p className="text-slate-500">Harare</p>
            <p className="text-slate-500">Zimbabwe</p>
          </div>
          <div className="col-span-1 space-y-4">
            <p className="text-slate-900 font-bold ">
              Enroll<span className="font-medium text-slate-400">Mate</span>
            </p>
            <p className="text-slate-500">Tel: +263 786 655 434</p>
            <p className="text-slate-500">Open Mo-Fr 08:00 - 16:00</p>
            <p className="text-slate-500">(Off semester 09:00 - 15:00)</p>
          </div>
          <div className="col-span-1 space-y-4">
            <p className="text-slate-900 font-bold ">
              Enroll<span className="font-medium text-slate-400">Mate</span> Campus 2
            </p>
            <p className="text-slate-500">7080 Willow Cresent Avenue</p>
            <p className="text-slate-500">Cosmos Avenue</p>
            <p className="text-slate-500">Norton</p>
            <p className="text-slate-500">Zimbabwe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralLayout;
