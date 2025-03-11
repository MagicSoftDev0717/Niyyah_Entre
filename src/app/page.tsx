import React from "react";
import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/aboutus";
import Services from "@/components/Home/services";
import Clock from "@/components/Home/clock";
import Ai_Business from "@/components/Home/ai_business";
import AR_Network from "@/components/Home/ar_net";
import Insights from "@/components/Home/insight";
import Checks from "@/components/Home/checks";
import Faith from "@/components/Home/faith";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Niyyah",
};

//import "./layout.css";
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Clock />
      <Ai_Business />
      <AR_Network />
      <Insights />
      <Checks />
      <Faith />
    </main>
  );
}
