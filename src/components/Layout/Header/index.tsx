"use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
// import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
// import HeaderLink from "../Header/Navigation/HeaderLink";
// import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
//import SignUp from "@/components/Auth/SignUp";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  // const pathUrl = usePathname();
  // const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  // const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  // const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen]);

  useEffect(() => {
    if (isSignInOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, navbarOpen]);

  ///////////////////////////////////////////////////////////////////////////////////
  const [imageSrc, setImageSrc] = useState("/assets/Header/Property_Default.svg");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayShort = daysShort[currentDate.getDay()];
  const monthName = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = [
    { code: "AR", name: "Arabic" },
    { code: "EN US", name: "English (US)" },
    { code: "EN UK", name: "English (UK)" },
    { code: "HI", name: "Hindi" },
    { code: "UR", name: "Urdu" },
    { code: "BN", name: "Bengali" },
    { code: "ZH", name: "Mandarin" },
    { code: "ES", name: "Spanish" },
    { code: "FR", name: "French" },
    { code: "RU", name: "Russian" },
    { code: "ID", name: "Indonesian" },
    { code: "TR", name: "Turkish" },
    { code: "SW", name: "Swahili" },
    { code: "MS", name: "Malay" },
    { code: "DE", name: "German" },
    { code: "JA", name: "Japanese" },
  ];

  return (
    <header
      className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 ${sticky ? "shadow-lg bg-darkmode pt-5" : "shadow-none md:pt-14 pt-5"
        }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-full md:max-w-screen-md flex items-center justify-center px-4">
          <div className="grid grid-cols-7 items-center">

            <div className="flex justify-center gap-8">
              <Logo />
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={imageSrc}
                alt="icon"
                width={45}
                height={45}
                onMouseEnter={() => setImageSrc("/assets/Header/Property_Variant2.svg")}
                onMouseLeave={() => setImageSrc("/assets/Header/Property_Default.svg")}
                onClick={() => setIsModalOpen(true)} // Open modal on click

              />
              {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="relative bg-white bg-opacity-10  p-6 shadow-lg w-96">
                    <button
                      className="absolute top-0 right-0 mr-2 mt-2 dark:invert"
                      onClick={() => setIsModalOpen(false)} // Close modal on click
                    >
                      <Icon
                        icon="tabler:currency-xrp"
                        className="text-white hover:text-primary text-24 inline-block me-2"
                      />
                    </button>
                    <h2 className="text-xl text-yellow-400 font-bold mb-4 text-center">Intention Starts with Prayer 😊</h2>
                    <p className="text-lg text-center text-white">Coming Soon. Watch this space.</p>

                  </div>
                </div>
              )}

            </div>

            <div className="flex justify-center">
            </div>

            <div className="flex justify-end gap-8 col-span-3">
              <div className="flex flex-col justify-center items-end ">
                <div className="text-medium font-bold text-white">{dayShort}, Ramadan 1, 1446 AH</div>
                <div className="text-medium font-bold text-white">{`${dayShort}, ${monthName} ${date}, ${year}`}</div>
              </div>
              <div className="relative flex flex-row justify-center items-center gap-2">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>

                  <Image
                    src="/assets/Header/Default_Lang.svg"
                    alt="Language"
                    width={24}
                    height={24}
                  />
                  <span className="text-white hover:text-yellow-500">{selectedLang}</span>
                </div>
                {isOpen && (
                  <div className="absolute top-full mt-2 w-48 bg-black text-white rounded-md shadow-lg">
                    {languages.map((lang, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:text-black hover:bg-white cursor-pointer"
                        onClick={() => {
                          setSelectedLang(lang.code);
                          setIsOpen(false);
                        }}
                      >
                        <span className="font-bold"> {lang.code}</span><span>&nbsp;&nbsp;{lang.name} </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end items-center">
              <Link
                href="#"
                className="hidden lg:block bg-transparent text-white border hover:border-primary hover:text-primary hover:text-darkmode px-12 py-2"
                onClick={() => {
                  setIsSignInOpen(true);
                }}
              >
                JOIN FREE
              </Link>
              {isSignInOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-20 flex items-center justify-center z-50">
                  <div
                    ref={signInRef}
                    className="relative mx-auto bg-transparent bg-opacity-50 w-full max-w-md overflow-hidden px-8 pt-14 pb-8 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
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

            </div>

            {/* {navbarOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
            )}
            <div
              ref={mobileMenuRef}
              className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? "translate-x-0" : "translate-x-full"
                } z-50`}
            >
              <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
                  <Logo />
                </h2> */}

            {/*  */}
            {/* <button
                  onClick={() => setNavbarOpen(false)}
                  className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
                  aria-label="Close menu Modal"
                ></button>
              </div>
              <nav className="flex flex-col items-start p-4">
                <div className="mt-4 flex flex-col space-y-4 w-full">
                  <Link
                    href="#"
                    className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                    onClick={() => {
                      setIsSignInOpen(true);
                      setNavbarOpen(false);
                    }}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="#"
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    onClick={() => {
                      setIsSignUpOpen(true);
                      setNavbarOpen(false);
                    }}
                  >
                    Sign Up
                  </Link>
                </div>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
