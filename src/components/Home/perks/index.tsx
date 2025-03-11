import { perksData } from "@/app/api/data";
import Image from "next/image";

const Perks = () => {
  return (
    <section className="">
      <div className="container grid grid-rows-2 mx-auto lg:max-w-full bg-[#000000]">
        <div className="row-span-1 grid grid-cols-12 flex flex-col items-center justify-center">
          <div className="col-span-2">
          </div>

          <div className="col-span-5 text-white">
            <span className="text-3xl flex flex-col mb-4"></span>
            <span className="text-3xl font-bold text-left leading-tight flex flex-col justify-center mb-4">Stay Ahead with Exclusive Insights. </span>
            <span className="text-lg text-left flex flex-col justify-center mb-4">
              Join our community and be the first to access expert tips. <br />
              Capital Entrepreneurial and Success – Innovation
            </span>
          </div>

          <div className="col-span-4">
          </div>
        </div>

        <div className="row-span-1 grid grid-cols-11 flex flex-col items-center justify-center">
          <div className="col-span-2">
          </div>

          <div className="col-span-1 flex flex-row justify-center items-center gap-6">
            <input
              type="text"
              placeholder="Your name*"
              className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-72"
            />
          </div>
          <div className="col-span-1">
          </div>
          <div className="col-span-1 flex flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Your email*"
              className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-72"
            />
          </div>
          <div className="col-span-1">
          </div>
          <div className="col-span-1 flex flex-row justify-center items-center gap-6">
            <input
              type="text"
              placeholder="Your phone number*"
              className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-72"
            />
          </div>
          <div className="col-span-1">
          </div>
          <div className="col-span-1 flex flex-row justify-center items-center gap-6">
            <button className="p-3 bg-purple-600 text-white hover:bg-purple-700 transition-all w-72">
              Join Community
            </button>
          </div>

          <div className="col-span-2">
          </div>
        </div>
      </div>
    </section >
  );
};

export default Perks;
