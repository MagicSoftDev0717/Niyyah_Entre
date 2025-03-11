"use client"
import { useState, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import Logo from "@/components/Layout/Header/Logo";

const Insights = () => {


  /////////////////////////////////////////////////
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const signInRef = useRef<HTMLDivElement>(null);

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
            <button onClick={() => setIsSignInOpen(true)}
              className="p-3 bg-purple-600 text-white hover:bg-purple-700 transition-all w-72">
              Join Community
            </button>
          </div>

          <div className="col-span-2">
          </div>
        </div>
      </div>
      {isSignInOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50" >

          <div
            ref={signInRef}
            className="mx-auto bg-gray-600 bg-opacity-20 w-full max-w-md overflow-hidden px-8 pt-14 pb-8 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-0 right-0 mr-3 mt-4 dark:invert"
              aria-label="Close Sign In Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>
            <div className="flex flex-col items-center jusity-center">
              <div className="items-center jusity-center mb-12">
                <Logo />
              </div>
              <div className="items-center jusity-center mb-12">
                <span className="text-2xl text-yellow-300 fond-bold">Thank You for Joining Us! 🎉</span>
              </div>
              <div className="items-center jusity-center">
                <span className="text-lg text-white">
                  Your submission has been received! 🚀<br />
                  Our team is excited to have you on<br />
                  board and will reach out soon with the<br />
                  next steps.</span>
              </div>

            </div>
          </div>
        </div>
      )}
    </section >
  );
};

export default Insights;
