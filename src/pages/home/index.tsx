import React from "react";
import Hero from "./partials/Hero";
import ImageSection from "./partials/ImageSection";
import WhyChooseUs from "./partials/WhyChooseUs";
import Quotes from "./partials/Quotes";
import About from "./partials/About";
import Service from "./partials/Service";
import Testimoni from "./partials/Testimoni";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ImageSection />
      <WhyChooseUs />
      <Quotes />
      <About />
      <Service />
      <Testimoni/>
    </>
  );
};

export default HomePage;
