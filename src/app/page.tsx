import React from "react";
import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/aboutus";
import TimeLine from "@/components/Home/timeline";
import Clock from "@/components/Home/clock";
import Portfolio from "@/components/Home/portfolio";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import Checks from "@/components/Home/checks";
import Faith from "@/components/Home/faith";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Niyyah",
};

//import "./layout.css";
export default function Home() {
  return (
    <main style={{fontFamily: 'Arial, San-Series'}}>
      <Hero />
      <AboutUs />
      <TimeLine />
      <Clock />
      <Portfolio />
      <Upgrade />
      <Perks />
      <Checks />
      <Faith />
    </main>
  );
}
