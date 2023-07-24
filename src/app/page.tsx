"use client";

import Image from "next/image";
import mobile from "../../public/mobile.svg";
import desktop from "../../public/desktop.svg";
import icon from "../../public/icon.svg";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export interface inputProps {
  inputValue: string;
}

export default function Home({ inputValue }: inputProps) {
  const [inputVal, setinputVal] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    router.push(`/submission/${inputVal}`);
  };

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className=" bg-slate-700  md:items-center min-h-screen flex flex-col justify-center ">
      <div className="bg-white md:flex md:flex-row-reverse md:p-5 items-center rounded-xl">
        <div>
          {isMobileView ? (
            <Image src={mobile} alt="" className="object-contain w-full" />
          ) : (
            <Image src={desktop} alt="" className="object-contain w-full" />
          )}
        </div>
        <div className="my-10 flex flex-col mx-10 md:flex md:flex-col items-start justify-around ">
          <h1 className="text-black font-bold text-4xl md:mb-5 ">
            Stay updated!
          </h1>
          <p className="my-2">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="md:mb-5">
            <li className="my-6 ">
              <div className="flex items-center space-x-4 mb-2 md:mb-3">
                <div className="flex shrink-0">
                  <Image src={icon} alt="" />
                </div>
                <div>
                  <p>Product discovery and building what matters</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-2 md:mb-3">
                <div className="flex-shrink-0">
                  <Image src={icon} alt="" />
                </div>
                <div>
                  <p>Measuring to ensure updates are a success</p>
                </div>
              </div>
              <div className="flex items-center space-x-4  md:mb-3">
                <div className="flex-shrink-0">
                  <Image src={icon} alt="" />
                </div>
                <div>
                  <p>And much more!</p>
                </div>
              </div>
            </li>
          </ul>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 md:w-full"
          >
            <label className="font-semibold">
              Email address
              <input
                type="email"
                name="email"
                placeholder="email@company.com"
                className="bg-white border border-gray-400 w-full mt-2 py-4 px-4 rounded-lg "
                onChange={(e) => setinputVal(e.target.value)}
              />
            </label>

            <button
              type="submit"
              className="bg-slate-800 text-white w-full py-5 mt-2 rounded-lg text-sm md:w-full  bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
