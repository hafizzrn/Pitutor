import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import logoFooter from "../assets/logo-putih.png";

const Footer = () => {
  return (
    <footer className="bg-[#343434] text-white py-10 px-6 md:px-12 lg:px-30">
      <div className="max-w-7xl container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={logoFooter} alt="" />
          <p className="mb-4 text-[14px] font-normal mt-4">Jl. Veteran Ketawanggede, 
            <br/>Kec. Lowokwaru, Kota Malang, Jawa Timur</p>
          <p className="text-[14px] font-normal text-[#767676]">&copy;2024, Pitutor Development Tech Team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div>
            <h4 className="text-[14px] font-normal text-[#767676] mb-4">About Us</h4>
            <ul className="text-[14px] space-y-1">
              <li>
                <a href="#" className=" hover:text-[#27A6D1] transition">
                  What is a Pitutor
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#27A6D1] transition">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#27A6D1] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#27A6D1] transition">
                  Online Course
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#27A6D1] transition">
                  Join Pitutor
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-normal text-[#767676] mb-4">What we teach</h4>
            <ul className="text-[14px] space-y-1">
              <li>
                <a href="#" className=" hover:text-[#27A6D1] transition">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#27A6D1] transition">
                  Financial
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#27A6D1] transition">
                  Human Resources
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#27A6D1] transition">
                  Information System
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-[#27A6D1] transition">
                  Computer Science
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-normal text-[#767676] mb-4 ">Contact</h4>
            <p className="text-[14px] mb-2">+081234567890</p>
            <p className="text-[14px] mb-4">+081234567890</p>
            <div className="flex space-x-3 mt-8">
              <a href="#" className="p-3 outline-none outline-neutral-600 outline-1 hover:bg-[#767676] rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="p-3 outline-none outline-neutral-600 outline-1 hover:bg-[#767676] rounded-full">
                <FaTiktok />
              </a>
              <a href="#" className="p-3 outline-none outline-neutral-600 outline-1 hover:bg-[#767676] rounded-full">
                <FaInstagram />
              </a>
              <a href="#" className="p-3 outline-none outline-neutral-600 outline-1 hover:bg-[#767676] rounded-full">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
