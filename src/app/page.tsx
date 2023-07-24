'use client'

import Image from 'next/image';
import mobile from '../../public/mobile.svg';
import desktop from '../../public/desktop.svg';
import icon from '../../public/icon.svg';
// import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';



export interface inputProps {
  inputValue: string;
}

export default function Home({ inputValue }: inputProps) {
  const [inputVal, setinputVal] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    router.push(`/submission/${inputVal}`);
  };

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to check if it's a mobile view based on screen width
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);
    };

    // Add event listener to window resize
    window.addEventListener('resize', handleResize);

    // Initial check for screen size
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="bg-slate-700 p-30 md:items-center">
      <div className="bg-white">
        <div>
          {isMobileView ? (
            <Image src={mobile} alt='' className='object-contain w-full'  />
          ) : (
            <Image src={desktop} alt=''  />
          )}
        </div>
        <div className="my-10 flex flex-col mx-10 md:flex md:flex-col md:justify-center">
          <h1 className="text-black font-bold text-2xl items-center mb-4">
            Stay updated!
          </h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image src={icon} alt="" />
                </div>
                <div>
                  <p>Product discovery and building what matters</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image src={icon} alt="" />
                </div>
                <div>
                  <p>Measuring to ensure updates are a success</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image src={icon} alt="" />
                </div>
                <div>
                  <p>And much more</p>
                </div>
              </div>
            </li>
          </ul>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="font-semibold mt-9">
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
              className="bg-slate-800 text-white w-full py-5 mt-2 rounded-lg text-sm"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
