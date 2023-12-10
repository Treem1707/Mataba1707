import GeneralLayout from "@layouts/GeneralLayout";
import { Divider, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { getMessage } from "@helpers/getMessage";
import PrimaryButton from "@components/buttons/PrimaryButton";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import GoogleAuthButton from "@components/buttons/GoogleAuthButton";
import { Link } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show_password, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  const login_user_handler = async () => {
    setLoading(true);
    try {
      // const { data } = await axios.post(`${apiUrl}/api/auth/login`, {
      //   email,
      //   password,
      // })
      // dispatch({ type: 'USER_LOGIN', payload: data })
      // Cookies.set('userInfo', JSON.stringify(data), { expires: 7 })
      // setTimeout(() => {
      //   //@ts-ignore
      //   history.push(redirect || '/')
      // }, 1000)
      setLoading(false);
      toast({
        title: "Login successful.",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
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

  const login_With_Google = async () => {
    try {
      setLoading(true);
      // const res = await signInWithPopup(auth, googleProvider)
      // const user = res.user
      // const { data } = await axios.post(`${apiUrl}/api/auth/login`, {
      //   email: user.email,
      //   googleAuthId: user.uid,
      // })
      // dispatch({ type: 'USER_LOGIN', payload: data })
      // history.push('/explore')
      setLoading(false);
      toast({
        title: "Login Successful",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    } catch (error: any) {
      setLoading(false);
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
            <div className="border border-purple-600 rounded-tl-3xl rounded-br-3xl bg-white p-8">
              <p className="text-sm font-medium text-pink-600 pb-2">
                National Id
              </p>
              <div className="grid  grid-cols-6 items-center space-x-4">
                <input
                  type="number"
                  className="bg-purple-200 col-span-1 rounded-full px-2 py-3"
                  placeholder="00"
                />
                <input
                  type="text"
                  className="bg-purple-200 col-span-3 rounded-full px-2 py-3"
                  placeholder=""
                />
                <input
                  type="number"
                  className="bg-purple-200 col-span-1 rounded-full px-2 py-3"
                  placeholder="A"
                />
                <input
                  type="number"
                  className="bg-purple-200 col-span-1 rounded-full px-2 py-3"
                  placeholder="00"
                />
              </div>
              <p className="text-sm font-medium text-pink-600 pb-2 pt-8">Password</p>
              <input
                type="number"
                className="bg-purple-200 col-span-1 rounded-full px-2 py-3"
                placeholder=""
              />
              <p className="text-slate-700 font-medium text-sm pt-8 pb-4">If you’re applying for the time, <span className="text-pink-600"> Create Account.</span></p>
              <p className="text-slate-700 font-medium text-sm py-4">to track your application, <span className="text-pink-600"> Click here.</span></p>
              <p className="text-slate-700 font-medium text-sm py-4">to view the FAQs, <span className="text-pink-600"> Click here.</span></p>
              <div className="flex w-full flex-col items-end">
              <PrimaryButton text={'Login'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Login;
