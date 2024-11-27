import pic3 from "./../../../assets/cta-image1.svg";
import Button from "../../../components/Button";

const CalltoAction = () => {
  return (
    <section className="relative flex items-center justify-center py-16">
      {/* Background Image */}
      <img 
        src={pic3} 
        alt="Call to Action" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      
      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center md:items-start text-center md:text-left text-white">
        <h1 className="text-[24px] md:text-[40px] font-semibold">
          Jadi Bagian dari Pitutor!
        </h1>
        <p className="mt-4 text-base md:text-[18px]">
          Daftar sekarang dan dapatkan tutor privat
          <br />
          terbaik yang siap mengajar sesuai kebutuhan Anda.
        </p>
        <Button className="bg-white text-[#21A7D5] mt-8">Bergabung Sekarang</Button>
      </div>
    </section>
  );
};

export default CalltoAction;
