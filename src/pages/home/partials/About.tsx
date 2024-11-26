import React from "react";
import aboutImage from "../../../assets/about.svg";
import Button from "../../../components/Button";
const About = () => {
  return (
    <section className="container flex flex-col xl:flex-row gap-10 xl:gap-20 py-24 text-center xl:text-start">
      <img src={aboutImage} alt="" />
      <div className="flex flex-col items-center xl:items-start">
        <div className="flex flex-col gap-4">
          <i className="text-primary text-base md:text-xl">
            Les privat online dibimbing Edukator terbaik
          </i>
          <h1 className="text-[24px] md:text-[50px] font-semibold">
            Les Private Online & Interaktif
          </h1>
        </div>
        <div className="mt-8 md:mt-16 flex flex-col items-center xl:items-start gap-12">
          <p className="text-base">
            Kami memahami setiap siswa memiliki gaya belajar yang berbeda dan
            unik. Sebagian lebih cocok belajar dalam kelompok, sebagian lagi
            membutuhkan bimbingan personal oleh tutor, sebagian lebih efektif
            belajar dengan membaca, sebagian lagi dengan menonton video.
          </p>
          <Button>Gabung Sekarang</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
