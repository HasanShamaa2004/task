import logo from "../assets/logo.jpeg";
import "../styles/Footer.scss";
import facebook from "../assets/facebook 1.svg";
import instagram from "../assets/instagram 1.svg";
import twitter from "../assets/twitter 1.svg";
import linkedIn from "../assets/linkedin 1.svg";
export const Footer = () => {
  return (
    <div className="w-full flex flex-col py-6 justify-around h-[376px] bg-gradient-to-r from-[#105772] to-[#00417B]">
      <div className="flex px-[117px] gap-20">
        <div className="flex w-2/6 flex-col gap-4">
          <img
            src={logo}
            alt="logo"
            className="w-[75px] h-[75px] rounded-[50%] object-contain"
          />
          <p className="FooterText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="FooterText py-3">@Company.com</p>
        </div>
        <div className="flex flex-col w-1/6 gap-2 mt-10">
          <p className="FooterText py-2 font-medium leading-7">pages</p>
          <p className="FooterText">AboutUs</p>
          <p className="FooterText">services</p>
          <p className="FooterText">ContactUs</p>
          <p className="FooterText">our team</p>
        </div>
        <div className="flex flex-col w-2/6 gap-2 mt-10">
          <p className="FooterText py-2 font-medium leading-7">Contact</p>
          <p className="FooterText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="FooterText">+9000 0000 000</p>
        </div>
        <div className="flex items-end w-1/6 gap-3">
          <div className="FooterIcon">
            <img src={facebook} alt="facebook" className="" />
          </div>
          <div className="FooterIcon">
            <img src={twitter} alt="twitter" className="" />
          </div>
          <div className="FooterIcon">
            <img src={instagram} alt="instagram" className="" />
          </div>
          <div className="FooterIcon">
            <img src={linkedIn} alt="linkedIn" className="" />
          </div>
        </div>
      </div>
      <hr className="border border-[#59C4EE]" />
      <div className="flex flex-col items-center justify-center">
        <p className="FooterText">
          Copyright ® 2024 Company All rights Rcerved
        </p>
      </div>
    </div>
  );
};
