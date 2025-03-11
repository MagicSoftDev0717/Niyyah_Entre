"use client";
import { useState } from "react";
import Logo from "@/components/Layout/Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";


const Faith = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  return (
    <section className="relative md:pt-0" id="portfolio">
      <div className="container grid grid-rows-12 h-full mx-auto lg:max-w-full bg-[#001427]">

        <div className="row-span-2 bg-gradient-to-b from-black to-transparent"
          style={{ background: "linear-gradient(180deg, #001427 0%, rgba(0, 20, 39, 0) 100%)" }}>
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-1">

            </div>
            <div className="col-span-4">
              <div className="items-center justify-center">
                <div className="row-span-1 text-white mb-4">
                  <div className="flex items-center gap-x-4 mb-8">
                    <span className="text-5xl font-bold text-left leading-tight">Faith-Driven Success</span>
                  </div>
                  <span className="text-3xl text-center leading-tight flex flex-col justify-center mb-8">
                    Building Business with Purpose
                  </span>
                  <span className="text-xl text-center leading-tight flex flex-col justify-center">
                    Business with intention and barakah starts with the right mindset. Our faith-based insights help you<br />
                    align your work with ethical values, purpose, and social impact.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-span-3 grid grid-cols-6 items-center justify-center text-white">
          <div></div>

          <div className="flex flex-col items-center gap-4">
            <img src="/assets/Faith/Faith1.svg" alt="Image 1" />
            <div className="flex flex-col items-center text-center">
              <span className="text-lg mb-2" >Honesty & Integrity</span>
              <span className="text-medium" >Business built on<br /> truth flourishes</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src="/assets/Faith/Faith2.svg" alt="Image 4" />
            <div className="flex flex-col items-center text-center">
              <span className="text-lg mb-2" >Sustainable Growth</span>
              <span className="text-medium" >Wealth with<br />responsibility</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src="/assets/Faith/Faith3.svg" alt="Image 7" />
            <div className="flex flex-col items-center text-center">
              <span className="text-lg mb-2" >Community Impact</span>
              <span className="text-medium" >Profits should<br />empower others</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src="/assets/Faith/Faith4.svg" alt="Image 7" />
            <div className="flex flex-col items-center text-center">
              <span className="text-lg mb-2" >Trust & Sincerity</span>
              <span className="text-medium" >Barakah follows pure<br /> intentions</span>
            </div>
          </div>
          <div></div>

        </div>

        <div className="row-span-2 items-center justify-center text-white ">
          <div className="grid grid-cols-9">
            <div className="col-span-2"></div>
            <div className="col-span-5">
              <div className="flex flex-col w-full h-1 bg-white mb-8">
              </div>
            </div>
            <div className="col-span-2"></div>
          </div>
          <span className="text-3xl text-center leading-tight flex flex-col justify-center mb-8">
            Get Clarity, Take Action, and Grow!
          </span>
          <span className="text-lg text-center leading-tight flex flex-col items-center justify-center mb-16">
            Every great entrepreneur faces challenges — but you don’t have to figure it out alone. Answer these<br />
            quick questions, and we’ll help you with a personalized plan to overcome obstacles and unlock new<br />
            opportunities.
          </span>
        </div>
        <div className="row-span-3 items-center justify-center text-white">

          <span className="text-2xl text-center leading-tight flex flex-col justify-center mb-4">
            5 Quick Questions.
          </span>
          <span className="text-lg text-center leading-tight flex flex-col justify-center mb-1">
            Are you trying to understand the true reason why you want to start a business?
          </span>
          <span className="text-lg text-center leading-tight flex flex-col justify-center mb-1">
            Are you struggling to implement your marketing strategy?
          </span>
          <span className="text-lg text-center leading-tight flex flex-col justify-center mb-1">
            Are you finding it difficult to choose a franchise?
          </span>
          <span className="text-lg text-center leading-tight flex flex-col justify-center mb-1">
            Do you get confused how to maximise AI in your business?
          </span>
          <span className="text-lg text-center leading-tight flex flex-col justify-center mb-1">
            Did you know Augmented Reality (AR) is the next big thing?
          </span>

        </div>
        <div className="row-span-1 grid grid-cols-11 flex flex-col items-center justify-center">
          <div className="col-span-2"></div>

          <div className="col-span-1 flex flex-row justify-center items-center">
            <input
              type="text"
              placeholder="Your name*"
              className="p-2 bg-transparent border-b-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
            />
          </div>
          <div className="col-span-1 flex flex-row justify-center items-center"></div>

          <div className="col-span-1 flex flex-row justify-center items-center">
            <input
              type="email"
              placeholder="Your email*"
              className="p-2 bg-transparent bg-transparent border-b-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
            />
          </div>
          <div className="col-span-1 flex flex-row justify-center items-center"></div>
          <div className="col-span-1 flex flex-row justify-center items-center">
            <input
              type="text"
              placeholder="Your phone number*"
              className="p-2 bg-transparent border-b-2 text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 w-80"
            />

          </div>
          <div className="col-span-1 flex flex-row justify-center items-center"></div>
          <div className="col-span-1 flex flex-row justify-center items-center">
            <button onClick={() => setIsSignInOpen(true)} className="p-2 bg-yellow-600 text-black hover:bg-white transition-all w-80">
              Submit
            </button>
          </div>

          <div className="col-span-3"></div>
        </div>

        <div className="grid grid-cols-9">
          <div className="col-span-2"></div>
          <div className="col-span-5">
            <div className="flex flex-col w-full h-1 bg-white mb-8">
            </div>
          </div>
          <div className="col-span-2"></div>

        </div>
      </div>
      {isSignInOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50" >

          <div
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

export default Faith;
