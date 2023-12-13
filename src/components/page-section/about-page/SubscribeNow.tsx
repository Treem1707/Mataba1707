import subscribe_picture from "@assets/about-page/suscribe-picture.svg";
import { useToast } from "@chakra-ui/react";
import { getMessage } from "@helpers/getMessage";
import { apiUrl } from "@utils/apiUrl";
import axios from "axios";
import { useState } from "react";

type Props = {};

const SubscribeNow = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const toast = useToast();

  const sendEmail = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${apiUrl}/mailer/subscribe`, {
        to: email,
      });
      setEmail("");
      setLoading(false);
      toast({
        title: "Subscribed.",
        description: getMessage(data),
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
      console.log(getMessage(data));
    } catch (error: any) {
      setLoading(false);
      toast({
        title: "Not Subscribed.",
        description: getMessage(error),
        status: "error",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
      console.log(getMessage(error));
    }
  };

  return (
    <div className="flex bg-slate-50 w-full py-16">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="border flex md:flex-row flex-col rounded-tl-[40px] rounded-br-[40px] border-[#9747FF] divide-x-[1px] divide-[#9747FF]">
          <div className="p-8 flex-1 items-center justify-center content-center flex">
            <img src={subscribe_picture} className="h-80" alt="" />
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <p className="text-sm font-medium text-pink-600">
              OUR PROFESSIONALS
            </p>
            <p className="max-w-xs text-3xl text-slate-900 font-bold">
              Subscribe for Education Insights!
            </p>
            <div className="flex flex-row items-center pt-16">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="py-3 px-4 flex-1 rounded-l-full text-sm font-medium bg-[#E5D8FD]"
                placeholder="Email"
              />
              <div
                onClick={loading ? () => console.log("loading ...") : sendEmail}
                className="flex uppercase text-sm font-medium bg-pink-600 text-white rounded-r-full py-3 px-4"
              >
                {loading ? "LOADING" : "SUBSCRIBE"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNow;
