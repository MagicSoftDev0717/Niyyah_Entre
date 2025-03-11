"use client";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const defaultImages = [
    "md-1.svg",
    "md-2.svg",
    "md-3.svg",
    "md-4.svg",
  ];

  // Hover images for each medium image
  const hoverImages = [
    "md-1-hover.svg",
    "md-2-hover.svg",
    "md-3-hover.svg",
    "md-4-hover.svg",
  ];
  const [lgImg, setLgImg] = useState("/assets/Services/lg.svg");

  const [mediumImages, setMediumImages] = useState(defaultImages);

  // Handle hover effect
  const handleMouseEnter = (index: number) => {

    setMediumImages((prev) =>
      prev.map((img, i) => (i === index ? hoverImages[i] : img))
    );
  };

  const handleMouseLeave = (index: number) => {
    setMediumImages((prev) =>
      prev.map((img, i) => (i === index ? defaultImages[i] : img))
    );
  };
  return (
    <section className="relative md:pt-0 pt-9 overflow-hidden z-1" id="development">
      <div className="container grid grid-rows-12 h-screen mx-auto lg:max-w-full bg-[url('/assets/Services/Services.svg')] bg-cover bg-center bg-no-repeat">

        <div className="row-span-2 grid grid-cols-6 bg-gradient-to-b from-black to-transparent"
          style={{ background: "linear-gradient(180deg, #180033 0%, rgba(24, 0, 51, 0) 100%)" }}>
          <div className="col-span-1">

          </div>
          <div className="col-span-4">
            <div className="row-span-1 text-white mb-4">
              <div className="flex items-center gap-x-4 mb-8">
                <img src="/assets/AboutUs/NE.svg" alt="Vision Icon" className="w-24 h-24" />
                <span className="text-5xl font-bold text-left leading-tight">Solutions For You</span>
              </div>
              <span className="text-3xl text-center leading-tight flex flex-col justify-center">
                Niyyah for Success. Achieve Business Excellence
              </span>
            </div>
          </div>
        </div>

        <div
          className="row-span-10 bg-gradient-to-b from-black to-transparent flex flex-col items-center justify-center text-white p-6"
          style={{ background: "linear-gradient(180deg,  #180033 0%, rgba(24, 0, 51, 0) 100%)", transform: "matrix(1, 0, 0, -1, 0, 0)" }}>
          {/* Center Large Image */}

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={lgImg} alt="Large Center Image" className="transform scale-y-[-1]"
              onMouseEnter={() => setLgImg("/assets/Services/lg-hover.svg")}
              onMouseLeave={() => setLgImg("/assets/Services/lg.svg")} />
          </div>


          {[
            { top: "26%", left: "32%", src: "md-1.svg" },
            { top: "28%", right: "22%", src: "md-2.svg" },
            { bottom: "20%", left: "30%", src: "md-3.svg" },
            { bottom: "22%", right: "20%", src: "md-4.svg" },
          ].map((img, idx) => (
            <div key={idx} className="absolute" style={{ top: img.top, left: img.left, right: img.right, bottom: img.bottom, transform: "translate(-50%, -50%)" }}>
              <img src={`/assets/Services/${mediumImages[idx]}`} alt={`Medium ${idx + 1}`} className="w-35 h-35 transform scale-y-[-1]"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={() => handleMouseLeave(idx)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
