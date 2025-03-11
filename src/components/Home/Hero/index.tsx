"use client";
import Link from "next/link";
import Signin from "@/components/Auth/SignIn";
import Image from "next/image";
import { motion } from "framer-motion";
import BuyCrypto from "./buy-form";
import SellCrypto from "./sell-form";
import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {

  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const signInRef = useRef<HTMLDivElement>(null);

  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
  }, [isBuying, isSelling]);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-0 overflow-hidden z-1 bg-[url('/assets/Hero/Photo222.svg')] bg-cover bg-center bg-no-repeat" id="main-banner">
      <div className="container grid grid-rows-10 h-screen mx-auto lg:max-w-full ">
        {/* Top Gradient */}
        <div
          className="row-span-4 bg-gradient-to-b from-black to-transparent"
          style={{
            background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        ></div>

        {/* Content Section */}
        <div
          className="row-span-6 bg-gradient-to-b from-black to-transparent flex flex-col items-center justify-center text-white p-6"
          style={{
            background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
            transform: "matrix(1, 0, 0, -1, 0, 0)",
          }}
        >
          <div className="flex flex-col items-center justify-center transform scale-y-[-1]">
            {/* Responsive Heading */}
            <h2 className="text-center leading-tight flex flex-col items-center justify-center"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: "bold" }}>
              <span>
                Where <span style={{ color: "#1FE4C6" }}>Faith</span> Meets
              </span>
              <span>
                <span style={{ color: "#A18FF7" }}>Innovation</span> in Business
              </span>
            </h2>

            <div className="flex justify-end items-center">
            <Link
              onClick={() => {
                setIsSignInOpen(true);
              }}
              href="#"
              className="px-8 md:px-12 py-3 md:py-2 bg-transparent text-white font-bold border border-transparent hover:border-white hover:text-white transition-all duration-300"
              style={{
                backgroundColor: "#7C23DD",
                fontSize: "clamp(1rem, 2vw, 1.5rem)", // Adjusts button text size dynamically
              }}
            >
              Let's Start
            </Link>
            {isSignInOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-20 z-50" >
                <div
                style={{marginTop: '-26em'}}
                  ref={signInRef}
                  className="mx-auto bg-transparent bg-opacity-50 w-full max-w-md overflow-hidden px-8 pt-14 pb-8 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
                >
                  <button
                    onClick={() => setIsSignInOpen(false)}
                    className="absolute top-0 right-0 mr-4 mt-4 dark:invert"
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
            </div>
          </div>
        </div>
      </div>




      {/* <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div> */}

      {/* Modals for Buy and Sell */}
      {isBuying && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={BuyRef}
            className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsBuyingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Buy Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>
            <BuyCrypto />
          </div>
        </div>
      )}
      {isSelling && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={SellRef}
            className="relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
          >
            <button
              onClick={() => setIsSellingOpen(false)}
              className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close Sell Modal"
            >
              <Icon
                icon="tabler:currency-xrp"
                className="text-white hover:text-primary text-24 inline-block me-2"
              />
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
