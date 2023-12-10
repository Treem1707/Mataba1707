import PrimaryButton from "@components/buttons/PrimaryButton";
import { getMessage } from "@helpers/getMessage";
import {apiUrl } from "@utils/apiUrl";
import axios from "axios";
import React, { useState } from "react";

type Props = {};

const ContactSection = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [mesasage, setMessage] = useState("");
  const [name, setName] = useState("");

  const sendEmail = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${apiUrl}/mailer/send-mail`, {
        to: "tanalkarnld@gmail.com",
        from: email,
        text: mesasage,
        name: name
      });
      setMessage("");
      setName("");
      setEmail("");
      setLoading(false);
      console.log(getMessage(data));
    } catch (error: any) {
      setLoading(false);
      console.log(getMessage(error));
    }
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#E5D8FD] p-4 rounded-full w-full"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-[#E5D8FD] p-4 rounded-full w-full"
          />
          <textarea
            rows={8}
            placeholder="Your message"
            value={mesasage}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-[#E5D8FD] p-4 rounded-3xl w-full"
          />

          <div className="flex">
            <PrimaryButton
              onClick={sendEmail}
              text={"Send"}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
