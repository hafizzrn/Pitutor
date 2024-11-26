import logo from "./../assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="container z-[9999] flex justify-between gap-10 items-center py-2 my-4">
      <img src={logo} alt="" />
      <div className="hidden lg:flex flex-row gap-10 items-center">
        <a href="#" className="text-[#00000080]">Beranda</a>
        <a href="#" className="text-[#00000080]">About Us</a>
        <a href="#" className="text-[#00000080]">Courses</a>
        <a href="#" className="text-[#00000080]">Tutors</a>
        <Button>Sign Up</Button>
      </div>
      
    </nav>
  );
};

export default Navbar;
