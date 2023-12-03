import Navbar from "@components/navigation/Navbar";
import {
  ChatBubbleOvalLeftIcon,
  ChevronDownIcon,
  PlayIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

function GeneralLayout({ children }: Props) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<any>([])

  
  const sendMessageHandler = () =>{
    setMessages((oldMessages:any) => [...oldMessages, message])
    setMessage('')

  }

  return (
    <div className="relatives min-h-screen flex flex-col">
      <div className="nav">
        <Navbar />
      </div>
      {children}
      <div className="flex absolute bottom-8 right-10 flex-col">
        {isChatOpen && (
          <div className="relative h-96 w-80 shadow-lg bg-white rounded-2xl mb-2 flex flex-col">
            <div onClick={sendMessageHandler} className="flex cursor-pointer bg-pink-600 absolute -right-5 bottom-10 rounded-full p-4 text-white">
              <PlayIcon height={20} width={20} />
            </div>
            <div className="flex flex-row justify-between bg-pink-600 p-4 text-white rounded-t-2xl">
              <div className="flex flex-row items-center space-x-2">
                {/* <img src="logo" alt="logo" /> */}
                <p>EnrollMate</p>
              </div>
              <div
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="flex cursor-pointer"
              >
                <ChevronDownIcon height={20} width={20} />
              </div>
            </div>
            <div className="flex-1 flex flex-col h-full p-4 overflow-scroll">
                {messages?.map((item:any, index:number)=>(
                  <div key={index} className="flex ml-auto self-end">
                    <p className="bg-pink-600 text-white rounded-l-full rounded-r-full px-4 py-2 text-sm font-medium my-2">{item}</p>
                  </div>
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
              <ChatBubbleOvalLeftIcon
                height={32}
                width={32}
                className=" text-white"
              />
            )}
          </div>
        </div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default GeneralLayout;
