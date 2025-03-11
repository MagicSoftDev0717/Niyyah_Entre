"use client";
import Link from "next/link";


const Portfolio = () => {
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
              className="text-lg text-center leading-tight flex flex-col items-center justify-center  mb-4">
              <span className="mb-4">
                Ready to Start or Scale your Business?
              </span>
              <span>
                Unlock the power of AI-driven entrepreneurship. Join now and take your business to the next level!
              </span>
            </h6>

            {/* Responsive Button */}
            <Link
              href="#"
              className="px-8 md:px-8 py-2 md:py-2 bg-transparent text-white font-bold border border-transparent hover:border-white hover:text-white transition-all duration-300"
              style={{
                backgroundColor: "#7C23DD",
                fontSize: "clamp(1rem, 2vw, 1.5rem)", // Adjusts button text size dynamically
              }}
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Portfolio;
