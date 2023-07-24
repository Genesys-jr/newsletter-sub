"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
import success from "../../../../public/success.svg";

interface Params {
  params: { email: string };
}

export default function Page({ params }: Params) {
  const decodedEmail = decodeURIComponent(params.email);
  const router = useRouter();
  const handleDismiss = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-600 md:bg-slate-700">
      <div className="bg-white md:w-full md:max-w-md p-10 rounded-lg">
        <div className="text-center">
          <Image
            src={success}
            alt=""
            className="object-contain my-10 mx-auto"
          />
          <h1 className="text-3xl font-bold mb-10">Thanks for subscribing!</h1>
          <p className="mb-auto">
            A confirmation email has been sent to
            <span className="font-bold"> {decodedEmail}</span>. Please open it
            and click the button inside to confirm your subscription.
          </p>
        </div>

        <div>
          <button
            className="bg-slate-800 text-white w-full py-5 rounded-lg text-xl mt-8 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500"
            onClick={handleDismiss}
          >
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
}
