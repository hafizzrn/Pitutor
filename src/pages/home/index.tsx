import Hero from "./partials/Hero";
import ImageSection from "./partials/ImageSection";
import WhyChooseUs from "./partials/WhyChooseUs";
import Quotes from "./partials/Quotes";
import About from "./partials/About";
import Service from "./partials/Service";
import Testimoni from "./partials/Testimoni";
import CalltoAction from "./partials/CalltoAction";

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
      <CalltoAction/>
    </>
  );
};

export default HomePage;
