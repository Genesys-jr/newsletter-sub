'use client'

import Image from "next/image";
import mobile from "../../public/mobile.svg";
import desktop from "../../public/desktop.svg";
import page from "./submission/[email]/page";
import Link from "next/link";
import { useState, FormEvent } from "react";
import {useRouter} from 'next/navigation'

export default function Home() {
const[inputVal, setinputVal] = useState("")
const {push} =useRouter()

const handleSubmit = (event: any) => {
  event.preventDefault();
  push(`/submission/${inputVal} `);
};

  return (
    <main className="flex flex-col md:flex-row-reverse items-center justify-between gap-4 ">
      <Image className="w-full object-contain  " src={mobile} alt={""} />
      <div className="my-10 flex flex-col mx-10">
        <h1 className="text-black font-bold text-2xl items-center mb-4">
          Stay updated!
        </h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className="">
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3" action="">
          <label htmlFor="">Email address</label>
          <input
            type="email"
            placeholder="email@company.com"
            className="bg-white border border-gray-400 w-full mb-3"
            onChange={(e)=> setinputVal(e.target.value)}
          />
          
          <button type="submit"  className="bg-slate-800 text-white w-full py-5 rounded-lg text-xl">
            Subscribe to monthly newsletter
          </button>
          
        </form>
      </div>
    </main>
  );
}
