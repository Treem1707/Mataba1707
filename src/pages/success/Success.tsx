import GeneralLayout from "@layouts/GeneralLayout";
import React from "react";

type Props = {};

const Success = (props: Props) => {
  return (
    <GeneralLayout>
      <div className="flex flex-col items-center space-y-2 flex-1 py-16">
        <p className="max-w-lg text-3xl font-bold text-slate-900 text-center">
          Congradulations Your Application Was Successful!
        </p>
        <p className="text-center text-slate-400 text-sm">
          We delighted to have you onboard.{" "}
        </p>
      </div>
    </GeneralLayout>
  );
};

export default Success;
