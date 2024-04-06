import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import word from "../assets/Huge Global.svg";
import "../styles/Contact.scss";
import { Form } from "./Form";
export const Contact = () => {
  return (
    <div className="flex flex-col bg-black  items-center justify-center">
      <div className="grid grid-rows-2 text-center mt-[250px]">
        <h1 className="text-4xl text-white font-bold">
          Contact <span className="text-[#42BDEC]">Us</span>
        </h1>
        <h1 className="text-5xl text-white mt-[50px] font-bold">
          Say hello to us
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-3 py-10">
        <div className="ContactIcon">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center bg-[#42BDEC] rounded-3xl w-20 h-20">
              <img src={icon2} className="w-11 h-9" />
            </div>
            <h1 className="text-base text-white">Mail Us</h1>
          </div>
          <h1 className="ContactTextInput">spark@gmail.co</h1>
        </div>
        <div className="ContactIcon">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center bg-[#42BDEC] rounded-3xl w-20 h-20">
              <img src={icon1} className="w-11 h-9" />
            </div>
            <h1 className="text-base text-white">Call Us</h1>
          </div>
          <h1 className="ContactTextInput">+001 6547 6589</h1>
        </div>
      </div>
      <div className="px-10 py-4 bg-black">
        <Form />
      </div>
      <div className="flex flex-col justify-center items-center py-4">
        <h1 className="text-4xl text-white font-bold">
          Contact us from anywhere{" "}
          <span className="text-[#42BDEC]">in the world</span>
        </h1>
        <img src={word} className="py-10" />
      </div>
    </div>
  );
};
