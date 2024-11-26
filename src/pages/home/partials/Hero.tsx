import React from "react";
import heroBgLeft from "./../../../assets/hero-bg-left.png";
import heroBgRight from "./../../../assets/hero-bg-right.png";
import Button from "../../../components/Button";

const Hero = () => {
  return (
    <section className="relative py-8 md:py-16">
      <img
        src={heroBgLeft}
        alt=""
        className="absolute -z-20 top-10 md:top-20 left-0"
      />
      <img
        src={heroBgRight}
        alt=""
        className="absolute -z-20 right-0 top-20 md:top-40"
      />
      <div className="flex justify-center items-center h-full">
        <div className="mt-16 md:max-w-[660px] text-center flex flex-col items-center gap-6">
          <h1 className="text-[24px] md:text-[40px] text-center font-semibold">
            Pecahkan Masalahmu,
            <br /> Tingkatkan Prestasimu
          </h1>
          <p className="text-[#00000066] text-base text-[18px]">
            Bersama Pitutor, kami siap memberikan solusi terbaik dalam menunjang
            prestasi akademik untuk masa depan yang lebih baik.{" "}
          </p>
          <Button className="mt8 md:mt-16">Selengkapnya</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
