import React from "react";
import Hero from "./partials/Hero";
import ImageSection from "./partials/ImageSection";
import WhyChooseUs from "./partials/WhyChooseUs";
import Quotes from "./partials/Quotes";
import About from "./partials/About";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ImageSection />
      <WhyChooseUs />
      <Quotes />
      <About />
    </>
  );
};

export default HomePage;
