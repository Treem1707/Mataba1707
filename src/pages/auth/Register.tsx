import GeneralLayout from "@layouts/GeneralLayout";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { getMessage } from "@helpers/getMessage";
import PrimaryButton from "@components/buttons/PrimaryButton";
import { apiUrl } from "@utils/apiUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [id3, setId3] = useState("");
  const [id4, setId4] = useState("");
  const [nationality, setNationality] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  const history = useNavigate();

  const login_user_handler = async () => {
    setLoading(true);
    try {
      if (!id1 && !id2 && !id3 && !id4) {
        toast({
          title: "Enter full ID",
          status: "error",
          position: "top-right",
          duration: 9000,
          isClosable: true,
        });
        setLoading(false);
        return;
      }
      const { data } = await axios.post(`${apiUrl}/user/register`, {
        name,
        surname,
        gender,
        national_id: `${id1}-${id2}-${id3}-${id4}`,
        nationality,
        password,
        confirm_password,
        email: reason,
      });
      // dispatch({ type: 'USER_LOGIN', payload: data })
      // Cookies.set('userInfo', JSON.stringify(data), { expires: 7 })
      // setTimeout(() => {
      //   //@ts-ignore
      //   history.push(redirect || '/')
      // }, 1000)
      setLoading(false);
      toast({
        title: "Application successful.",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
      history("/success");
    } catch (error: any) {
      setLoading(false);
      //@ts-ignore
      toast({
        title: getMessage(error),
        status: "error",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <GeneralLayout>
      <div className="flex min-h-screen flex-col bg-gray-50 sm:px-6 lg:px-8 items-center content-center justify-center">
        <div className="max-w-7xl w-full mx-auto grid space-y-8 grid-cols-2 gap-8">
          <div className="col-span-1 space-y-8">
            <p className="text-slate-900 font-semibold text-lg">
              Online Tracking System
            </p>
            <div className="border-t border-slate-200"></div>
            <p className="text-slate-400 text-sm font-medium">
              Our online application system is quick, easy and secure to use.
              You can: Save and edit your application easily and as often as you
              like before submitting it and track the progress of your
              application at anytime save.
            </p>
            <p className="text-slate-400 text-sm font-medium">
              You can contact our Registry Department on: +263 786 655 434 or
              +263 779 767 435 if you are failing to complete your registration.
              For more assistance contact academicregistryem.ac.zw
            </p>
          </div>
          <div className="col-span-1 space-y-8">
            <div className="border border-purple-600 rounded-tl-3xl grid grid-cols-2 gap-8 rounded-br-3xl bg-white p-8">
              <div className="col-span-1">
                <p className="text-sm font-medium text-pink-600 pb-2 ">
                  Surname
                </p>
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="bg-purple-200 col-span-1 rounded-full px-2 py-3 w-full"
                  placeholder=""
                />
              </div>
              <div className="col-span-1">
                <p className="text-sm font-medium text-pink-600 pb-2 ">Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-purple-200 col-span-1 rounded-full px-2 py-3 w-full"
                  placeholder=""
                />
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-pink-600 pb-2">
                  National Id
                </p>
                <div className="grid  grid-cols-6 items-center space-x-4">
                  <input
                    type="number"
                    value={id1}
                    onChange={(e) => setId1(e.target.value)}
                    className="bg-purple-200 col-span-1 rounded-full px-2 py-3"
                    placeholder="00"
                  />
                  <input
                    type="text"
                    value={id2}
                    onChange={(e) => setId2(e.target.value)}
                    className="bg-purple-200 col-span-3 rounded-full px-2 py-3"
                    placeholder=""
                  />
                  <input
                    type="text"
                    value={id3}
                    onChange={(e) => setId3(e.target.value)}
                    className="bg-purple-200 col-span-1 rounded-full px-2 py-3"
                    placeholder="A"
                  />
                  <input
                    type="number"
                    value={id4}
                    onChange={(e) => setId4(e.target.value)}
                    className="bg-purple-200 col-span-1 rounded-full px-2 py-3"
                    placeholder="00"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <p className="text-sm font-medium text-pink-600 pb-2 ">
                  Nationality
                </p>
                <input
                  type="text"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="bg-purple-200 col-span-1 rounded-full px-2 py-3 w-full"
                  placeholder=""
                />
              </div>
              <div className="col-span-1">
                <p className="text-sm font-medium text-pink-600 pb-2 ">
                  Gender
                </p>
                <input
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="bg-purple-200 col-span-1 rounded-full px-2 py-3 w-full"
                  placeholder=""
                />
              </div>
              <div className="col-span-1">
                <p className="text-sm font-medium text-pink-600 pb-2 ">
                  Password
                </p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-purple-200 col-span-1  w-full rounded-full px-2 py-3"
                  placeholder=""
                />
              </div>
              <div className="col-span-1">
                <p className="text-sm font-medium text-pink-600 pb-2 ">
                  Confirm Password
                </p>
                <input
                  type="password"
                  value={confirm_password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-purple-200 col-span-1  w-full rounded-full px-2 py-3"
                  placeholder=""
                />
              </div>
              <div className="col-span-1">
                <p className="text-sm font-medium text-pink-600 pb-2 ">Email</p>
                <input
                  type="text"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="bg-purple-200 col-span-1 rounded-full px-2 py-3 w-full"
                  placeholder=""
                />
              </div>
              <div className="col-span-1">
                <p className="text-sm font-medium text-pink-600 pb-2 ">
                  Upload documents
                </p>
                <input
                  type="text"
                  className="bg-purple-200 col-span-1 rounded-full px-2 py-3 w-full"
                  placeholder=""
                />
              </div>

              <div className="flex w-full col-span-2 flex-col items-end">
                <PrimaryButton
                  text={"Register"}
                  loading={loading}
                  onClick={login_user_handler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Register;
