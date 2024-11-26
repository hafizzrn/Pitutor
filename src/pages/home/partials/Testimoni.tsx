import petik from "./../../../assets/petik.png";
import testimonyProfile from "../../../assets/testimony-profile1.png";
const Testimoni = () => {
  return (
    <section className="container flex flex-col xl:flex-row gap-10 xl:gap-20 py-24 text-center xl:text-start w-full">
      <div className="flex flex-col gap-6 items-center xl:items-stretch w-full">
        <h1 className="text-[24px] md:text-[50px] font-semibold">Testimoni</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 w-full">
          <div className="bg-[#F8F8F8] flex flex-col items-center p-6 rounded-lg border border-[#D9D9D9]">
            <img src={petik} className="self-start" alt="" />
            <p className="mt-10 text-[#404040] text-[14px] font-normal ">
              Lorem ipsum dolor sit amet consectetur. Arcu at vel dictum massa.
              Sed ultricies neque pellentesque tempor platea interdum. Senectus
              pulvinar enim eget ante euismod felis.
            </p>
            <hr className="my-4 w-full border-t-1 border-[#D9D9D9] " />
            <div className="flex self-start items-center mt-4">
              <img
                src={testimonyProfile}
                alt="Kezia"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="text-black ">
                <div className="font-medium">Kezia</div>
                <div className="text-[#404040] text-[14px]">
                  Fakultas Ilmu Komputer
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8F8] flex flex-col items-center p-6 rounded-lg border border-[#D9D9D9] ">
            <img src={petik} className="self-start" alt="" />
            <p className="mt-10 text-[#404040] text-[14px] font-normal ">
              Lorem ipsum dolor sit amet consectetur. Arcu at vel dictum massa.
              Sed ultricies neque pellentesque tempor platea interdum. Senectus
              pulvinar enim eget ante euismod felis.
            </p>
            <hr className="my-4 w-full border-t-1 border-[#D9D9D9] " />
            <div className="flex self-start items-center mt-4">
              <img
                src={testimonyProfile}
                alt="Kezia"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="text-black ">
                <div className="font-medium">Kezia</div>
                <div className="text-[#404040] text-[14px]">
                  Fakultas Ilmu Pengetahuan Budaya
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8F8] flex flex-col items-center p-6 rounded-lg border border-[#D9D9D9]">
            <img src={petik} className="self-start" alt="" />
            <p className="mt-10 text-[#404040] text-[14px] font-normal ">
              Lorem ipsum dolor sit amet consectetur. Arcu at vel dictum massa.
              Sed ultricies neque pellentesque tempor platea interdum. Senectus
              pulvinar enim eget ante euismod felis.
            </p>
            <hr className="my-4 w-full border-t-1 border-[#D9D9D9] " />
            <div className="flex self-start items-center mt-4">
              <img
                src={testimonyProfile}
                alt="Kezia"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="text-black ">
                <div className="font-medium">Kezia</div>
                <div className=" text-[#404040] text-[14px]">
                  Fakultas Ilmu Administrasi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
