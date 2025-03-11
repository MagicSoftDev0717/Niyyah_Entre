import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
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
      <Work />
      <TimeLine />
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
      <Checks />
      <Faith />
    </main>
  );
}
