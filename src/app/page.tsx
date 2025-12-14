import About from "@/components/About";
import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MaxWrapper from "@/components/MaxWrapper";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <MaxWrapper>
      <Hero />
      <About />
      <Services />
      <Featured />
      <Contact />
      <Footer />
    </MaxWrapper>
  );
}

// https://www.capdal.com/
