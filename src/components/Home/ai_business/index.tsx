"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import Signin from "@/components/Auth/SignIn";
import { Icon } from "@iconify/react/dist/iconify.js";

const Ai_Business = () => {
  /////////////////////////////////////////////////
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const signInRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative md:pt-0" id="portfolio">
      <div className="container grid grid-rows-8 h-screen mx-auto lg:max-w-full bg-[url('/assets/AI_business/AI.svg')] bg-cover bg-center bg-no-repeat">

        <div className="row-span-2 grid grid-cols-6 gap-3 text-white"
          style={{ background: "linear-gradient(180deg, #000833 0%, rgba(0, 8, 51, 0) 100)" }}>
          <div className="col-span-1">

          </div>
          <div className="col-span-4">
            <div className="items-center justify-center">
              <div className="row-span-1 text-white mb-4">
                <div className="flex items-center gap-x-4 mb-8">
                  <span className="text-5xl font-bold text-left leading-tight">Meet the AI Team</span>
                </div>
                <span className="text-3xl text-center leading-tight flex flex-col justify-center mb-8">
                  AI Experts Driven by Sincerity and Passion
                </span>
                <span className="text-xl text-center leading-tight flex flex-col justify-center">
                  Supercharge your business with Intelligent Al Experts and AI Influencers designed to<br />
                  help you Start or Grow Your Business Mission.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row-span-4 grid grid-cols-5 items-center justify-center text-white  gap-6" style={{ color: '#A18FF7' }}>
          <div></div>


          <div className="flex flex-col items-center gap-4">
            <img src="/assets/AI_business/Niyyah_Ai.svg" alt="Image 1" />
            <span className="text-lg" >Ali AI</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src="/assets/AI_business/Group 32.svg" alt="Image 4" />
            <span className="text-lg">Amina AI</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src="/assets/AI_business/Group 31.svg" alt="Image 7" />
            <span className="text-lg">Bilal AI</span>
          </div>

          <div></div>
        </div>
        <div className="row-span-2 gap-3 flex flex-col items-top justify-center text-white"
          style={{
            background: "linear-gradient(180deg, #000833 0%, rgba(0, 8, 51, 0) 100%)",
            transform: "matrix(1, 0, 0, -1, 0, 0)"
          }}>
          <div className="flex flex-col items-center justify-center transform scale-y-[-1]">
            {/* Responsive Heading */}
            <h6
              className="text-xl text-center leading-tight flex flex-col items-center justify-center  mb-4">
              <span className="mb-4 font-bold">
                Ready to Start or Scale your Business?
              </span>
              <span>
                Unlock the power of AI-driven entrepreneurship. Join now and take your business to the next level!
              </span>
            </h6>

            {/* Responsive Button */}
            <button 
              onClick={() => { setIsSignInOpen(true);}}
              className="px-8 md:px-12 py-2 md:py-2 bg-transparent text-white font-bold border border-transparent hover:border-white hover:text-white transition-all duration-300"
              style={{
                backgroundColor: "#7C23DD",
                fontSize: "clamp(1rem, 2vw, 1.5rem)", // Adjusts button text size dynamically
              }}
            >
              Join Now
              </button> 
          </div>
        </div>
      </div>
      {isSignInOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-10 z-50" >

          <div
            ref={signInRef}
            className="mx-auto bg-black bg-opacity-20 w-full max-w-md overflow-hidden px-8 pt-14 pb-8 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
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
            <Signin />
          </div>
        </div>
      )}
    </section >
  );
};

export default Ai_Business;
