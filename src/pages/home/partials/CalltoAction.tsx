import pic3 from "./../../../assets/cta-image1.svg";
import Button from "../../../components/Button";

const CalltoAction = () => {
  return (
    <section className="relative flex items-center justify-center py-16">
      <img src={pic3} alt="Call to Action" className="absolute inset-0 w-full h-full object-cover" />

      <div className="relative z-10 container flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-[24px] md:text-[32px] font-semibold text-white">Jadi Bagian dari Pitutor!</h1>
        <p className="mt-4 text-base md:text-[16px] text-white">
          Daftar sekarang dan dapatkan tutor privat
          <br />
          terbaik yang siap mengajar sesuai kebutuhan Anda.
        </p>
        <Button variant="white" className="mt-8 text-primary">Bergabung Sekarang</Button>
      </div>
    </section>
  );
};

export default CalltoAction;
