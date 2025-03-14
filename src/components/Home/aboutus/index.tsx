"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import Signin from "@/components/Auth/SignIn";

import { Modal } from "@/components/ui/modal";

const AboutUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const signInRef = useRef<HTMLDivElement>(null);

  const closeEditModal = () => {
    setIsSignInOpen(false);
  };

  return (
    <section className="md:pt-0 overflow-hidden z-1 bg-[url('/assets/AboutUs/AboutUs1.svg')] bg-cover bg-center bg-no-repeat" id="work"  >
      <div className="container grid grid-rows-16 h-screen mx-auto lg:max-w-full">
        {/* Top Gradient */}
        <div
          className="row-span-5 grid grid-cols-6 bg-gradient-to-b from-black to-transparent"
          style={{ background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)" }}>

          <div className="col-span-1 flex flex-col items-start justify-center text-white">

          </div>
          <div className="col-span-3 flex flex-col items-start justify-center text-white gap-6">
            <div className="row-span-1 mb-4">
              <div className="flex items-center gap-x-4 mb-16">
                <span className="text-5xl font-bold text-left leading-tight">Vision Behind</span>
                <img src="/assets/AboutUs/NE.svg" alt="Vision Icon" className="w-24 h-24" />
              </div>
              <span className="text-2xl text-left leading-tight flex flex-col justify-center mb-8">
                Empowering Ethical Entrepreneurs<br /> Transforming Ideas into Impact.
              </span>
              <span className="text-lg text-left leading-tight flex flex-col justify-center">
                Niyyah Entrepreneur is a mission-driven platform designed to<br />
                educate, inspire, and empower Muslim entrepreneurs. Rooted in<br />
                faith, ethical business practices, and innovation, we guide aspiring<br />
                leaders through education, community engagement, and<br />
                technology. Our goal? To create industry leaders who not only<br />
                succeed in business but also leave a lasting impact on society.
              </span>
            </div>
            <div className="text-lg font-sm text-white">
              <button
                onClick={() => {
                  setIsSignInOpen(true);
                }}

                className="px-8 md:px-6 py-3 md:py-3 bg-transparent text-white font-bold border border-transparent hover:border-white hover:text-white transition-all duration-300"
                style={{ backgroundColor: "#7C23DD", fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
                Join the Vision
              </button>
            </div>
          </div>

          <div className="col-span-2">
          </div>
        </div>

        <div className="row-span-6 grid grid-cols-6">
          <div className="col-span-1 flex flex-col items-start justify-center text-white">
          </div>

          <div className="col-span-3 flex flex-col items-start justify-top text-white gap-6">
            <div className="text-lg font-sm text-white gap-4">
            </div>
          </div>

          <div className="col-span-2">
          </div>
        </div>
        <div
          className="row-span-5 bg-gradient-to-b from-black to-transparent flex flex-col items-center justify-center text-white p-6"
          style={{
            background: "linear-gradient(180deg, #180033 0%, rgba(24, 0, 51, 0) 100%)",
            transform: "matrix(1, 0, 0, -1, 0, 0)",
          }}
        >
        </div>
      </div>
      {/* <Modal isOpen={isSignInOpen} onClose={closeEditModal} className="max-w-[1000px] p-5 lg:p-10"> */}
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
      {/* </Modal> */}
    </section>
  );
};

export default AboutUs;

