import whyOne from "./../../../assets/why1.png";
import whyTwo from "./../../../assets/why2.png";
import whyThree from "./../../../assets/why3.png";

const WhyChooseUs = () => {
  return (
    <section className="py-24 container flex flex-col gap-10 md:gap--20">
      <div className="text-center flex flex-col items-center gap-4">
        <h1 className="text-[24px] md:text-[40px] font-semibold">
          Kenapa memilih kami?
        </h1>
        <p className="text-base text-[18px] text-[#00000066]">
          Program les privat online dari Pitutor dirancang paripurna untuk
          setiap kebutuhan belajar.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="rounded-[10px] bg-[#EAF7FB] px-6 md:px-8 py-10 md:py-14 flex flex-col gap-5 md:gap-8 items-center text-center">
          <img src={whyOne} alt="" />
          <span className="text-lg md:text-2xl text-primary ">
            Satu Guru Satu Murid
          </span>
          <p className="text-base text-[16px] font-normal">
            Program les privat online dari Pitutor privat dirancang satu tutor
            satu siswa. Bukan pembelajaran kelompok dengan beberapa siswa dalam
            satu proses belajar.
          </p>
        </div>
        <div className="rounded-[10px] bg-[#EAF7FB] px-6 md:px-8 py-10 md:py-14 flex flex-col gap-5 md:gap-8 items-center text-center">
          <img src={whyTwo} alt="" />
          <span className="text-lg md:text-2xl text-primary ">
            Online & Interaktif
          </span>
          <p className="text-base text-[16px] font-normal">
            Kegiatan belajar online dirancang interaktif. Sehingga walaupun KBM
            dilaksanakan secara daring, siswa bisa berinteraksi langsung dengan
            guru.
          </p>
        </div>
        <div className="rounded-[10px] bg-[#EAF7FB] px-6 md:px-8 py-10 md:py-14 flex flex-col gap-5 md:gap-8 items-center text-center">
          <img src={whyThree} alt="" />
          <span className="text-lg md:text-2xl text-primary ">
            Personalized Learning{" "}
          </span>
          <p className="text-base text-[16px] font-normal">
            Pitutor membantu siswa mencapai potensi terbaik dengan pendekatan
            yang disesuaikan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
