"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Signin from "@/components/Auth/SignIn";
import { Icon } from "@iconify/react/dist/iconify.js";

const Clock = () => {

  const getTargetDate = () => {
    const now = new Date();
    const targetDate = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
    return targetDate;
  };

  const [targetDate, setTargetDate] = useState(getTargetDate());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = calculateTimeLeft(targetDate);
      setTimeLeft(remaining);

      // When countdown reaches zero, restart and flip the layout
      if (remaining.total <= 0) {
        setTargetDate(getTargetDate());
        setIsFlipped((prev) => !prev);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  function calculateTimeLeft(target: Date) {
    const now = new Date().getTime();
    const diff = target.getTime() - now;

    return {
      total: diff,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  /////////////////////////////////////////////////
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const signInRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative z-1">
      <div className="container grid grid-rows-8 h-screen mx-auto lg:max-w-full bg-[#180033]" style={{ fontFamily: 'Opinion Pro Extended' }}>
        <div className="row-span-2 gap-6 items-center justify-center text-white">
          <div className="items-center justify-center p-16 ">
            <div className="font-lg text-white gap-6">
              <h2 className="text-5xl font-semibold text-center leading-tight flex flex-col items-center justify-center">
                <span>Are you ready?</span>
              </h2>
            </div>
            <div className="text-lg font-sm text-white">
              <span className="text-3xl text-center leading-tight flex flex-col items-center justify-center">
                Count down to Beta Launch
              </span>
            </div>
          </div>
        </div>

        <div className="row-span-2 flex flex-col justify-center items-center">
          <div className={`grid grid-cols-4 gap-6 transform ${isFlipped ? "rotate-180" : ""}`}>
            {[
              { label: "days", value: timeLeft.days, img: "clock1.svg" },
              { label: "hours", value: timeLeft.hours, img: "clock2.svg" },
              { label: "minutes", value: timeLeft.minutes, img: "clock3.svg" },
              { label: "seconds", value: timeLeft.seconds, img: "clock4.svg" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col justify-center items-center text-white text-center">
                {/* SVG Container with Relative Positioning */}
                <div className="relative w-36 h-36 flex justify-center items-center">
                  <img src={`/assets/Clock/${item.img}`} alt={item.label} className="w-full h-full" />

                  {/* Absolutely Centered Time Value */}
                  <span className="absolute text-6xl font-bold text-white">{item.value}</span>
                </div>

                {/* Label Below the SVG */}
                <p className="text-2xl mt-2 text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="row-span-2 flex flex-col justify-center items-center p-4">
          <div className="text-lg font-sm text-white mb-12">
            <span className="text-xl text-center leading-tight flex flex-col items-center justify-center">
              Be the First to Experience the Future. 🚀<br />
              Join our exclusive waiting list and get early access to  groundbreaking features.<br />
              Don’t miss out – secure your spot today!
            </span>
          </div>

          <div className="text-white">
            <button onClick={() => { setIsSignInOpen(true);}}
              className="px-8 md:px-6 py-1 md:py-3 bg-transparent text-white font-bold border border-transparent hover:border-white hover:text-white transition-all duration-300"
              style={{ backgroundColor: "#7C23DD", fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
              Join the Journey
            </button>
          </div>
        </div>
        <div className="row-span-2  flex flex-col items-center justify-center" style={{
          background: "linear-gradient(180deg,  #000833 0%, rgba(0, 8, 51, 0) 100%)",
          transform: "matrix(1, 0, 0, -1, 0, 0)"
        }}>
        </div>
      </div>
      {isSignInOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-10 z-50" >

          <div
            ref={signInRef}
            className="mx-auto bg-transparent bg-opacity-50 w-full max-w-md overflow-hidden px-8 pt-14 pb-8 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
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
    </section>
  );
};

export default Clock;
