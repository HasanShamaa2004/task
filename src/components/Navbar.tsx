import logo from "../assets/logo.jpeg";
import moon from "../assets/Half Moon.svg";
import sun from "../assets/Sun-Brightness.svg";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="grid grid-cols-3 px-[64px] py-[31px]">
      <div className="w-[45px] h-[45px]">
        <img src={logo} alt="logo" className="rounded-[50%]" />
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className="NavbarText">Home</p>
        <Link to={"/about"} className="NavbarText">
          About Us
        </Link>
        <Link to="/services" className="NavbarText">
          services
        </Link>
        <p className="NavbarText">Contact Us</p>
        <p className="NavbarText">Our Family</p>
      </div>
      <div className="flex items-center justify-end gap-4">
        <div className="relative w-[63px] h-[29px] flex items-center bg-[#F3E8FF1A] cursor-pointer rounded-full p-1">
          <div className="absolute bg-[#FFFFFF33] rounded-full left-1 w-[26px] h-[26px]">
            <img src={sun} className="mx-auto my-1 text-white" sizes={"18px"} />
          </div>
          <img src={moon} className="ml-auto text-[#3591B4]" sizes={"18px"} />
        </div>
        <p className="text-base text-white">DarkMood</p>
      </div>
    </div>
  );
};
