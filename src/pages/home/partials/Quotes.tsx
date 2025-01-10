import quoteImage from "../../../assets/quote.png";

const Quotes = () => {
  return (
    <section className="bg-primary ">
      <div className="container py-10 md:py-20 flex flex-col xl:flex-row gap-8 md:gap-40 justify-center items-center text-white">
        <div className="flex gap-2 md:gap-5 items-start">
          <img src={quoteImage} alt="" />
          <h1 className="text-[24px] md:text-[40px] font-semibold text-white ">
            Pembelajaran
            <br /> Online yang
            <br /> Dipersonalisasi
          </h1>
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-base md:text-l xl:max-w-[680px] text-justify">
            “Setiap siswa membutuhkan dukungan pembelajaran yang sesuai untuk
            situasi atau konteks mereka. Pembelajaran online yang
            dipersonalisasi memungkinkan setiap siswa memperoleh pembelajaran
            yang sesuai konteks."
          </p>
          <i className="text-lg md:text-2xl">- Pitutor Team</i>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
