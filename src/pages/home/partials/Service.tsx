import pic1 from "./../../../assets/Image-service1.svg";
import pic2 from "./../../../assets/Image-service2.svg";
import pic3 from "./../../../assets/Image-service3.svg";
import assets1 from "./../../../assets/service-top.png";
import assets2 from "./../../../assets/service-bottom.png";

const Service = () => {
  return (
    <section className="py-24 relative flex flex-col gap-10 md:gap--2">
      <section className=" container relative">
        <img src={assets1} alt="" className="absolute top-0 right-32 hidden md:block " />
      </section>
      <div className="text-center flex flex-col items-center gap-2">
        <h1 className="text-[24px] md:text-[40px] font-semibold">
          Pilihan Privat Online Terbaik
        </h1>
        <p className="text-base text-[18px] text-[#00000066] px-2">
          Program les privat online dari Pitutor dirancang paripurna untuk
          setiap kebutuhan belajar.
        </p>
      </div>
      <div className="grid container grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div>
          <img src={pic1} alt="" className="mb-4 w-full" />
          <div className="rounded-[10px] bg-[#EAF7FB] px-6 md:px-8 py-10 md:py-14 flex flex-col gap-5 md:gap-8 items-center text-center">
            <span className="text-lg md:text-3xl text-black font-semibold">
              1on1 Tutoring
            </span>
            <p className="text-base text-[18px] text-[#404040]">
              Kegiatan belajar dirancang privat dan setiap satu siswa dibimbing
              satu tutor
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-[10px] bg-[#EAF7FB] px-6 md:px-8 py-10 md:py-14 flex flex-col gap-5 md:gap-8 items-center text-center">
            <span className="text-lg md:text-3xl text-black font-semibold">
              Tanya Tutor
            </span>
            <p className="text-base text-[18px] text-[#404040]">
              Tanya jawab soal yang memungkinkan mahasiswa untuk bertanya
            </p>
          </div>
          <img src={pic2} alt="" className="mt-4 w-full" />
        </div>
        <div>
          <img src={pic3} alt="" className="mb-4 w-full" />
          <div className="rounded-[10px] bg-[#EAF7FB] px-6 md:px-8 py-10 md:py-14 flex flex-col gap-5 md:gap-8 items-center text-center">
            <span className="text-lg md:text-3xl text-black font-semibold">
              Pojok Prestasi
            </span>
            <p className="text-base text-[18px] text-[#404040]">
              Melalui fitur Pojok Prestasi,
              <br />
              kamu bisa menemukan berbagai informasi.
            </p>
          </div>
        </div>
      </div>
      <img src={assets2} alt="" className="absolute -bottom-14 hidden md:block" />
    </section>
  );
};

export default Service;
