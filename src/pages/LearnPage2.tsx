import vedio1 from "../assets/vedio1.svg";
import vedio2 from "../assets/vedio2.svg";
import laptop1 from "../assets/laptop1.png";
import laptop2 from "../assets/laptop2.png";
import laptop3 from "../assets/laptop3.png";
import laptop4 from "../assets/laptop4.png";
import laptop5 from "../assets/laptop5.png";
import laptop6 from "../assets/laptop6.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import { Card } from "../components/Card";
import { GreatPlat } from "../components/GreatPlat";
import { Footer } from "../components/Footer";
export const LearnPage2 = () => {
  return (
    <div className="bg-black h-full">
      <div className="flex gap-2 py-4 px-14 items-center cursor-pointer">
        <svg
          className="w-3 h-3 text-[#42BDEC] rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <h1 className="text-[#42BDEC] py-4 cursor-pointer border-b-[#42BDEC]">
          Back
        </h1>
      </div>
      <div className="flex justify-center items-center py-10 gap-10 px-8 ">
        <div className="w-3/4">
          <div className="relative">
            <img src={vedio2} className="" />
          </div>
          <div className="absolute bottom-[100px] left-[350px]">
            <img src={vedio1} className="" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-auto justify-center gap-5">
          <div className="w-[67%]">
            <h1 className="text-white text-4xl font-bold">
              We are Always Ensure Best Course for your learning
            </h1>
            <p className="text-[#42BDEC]">
              Lorem Ipsum is simply dummy text of the printing and It
              typesetting industry. Lorem Ipsum has been the
            </p>
          </div>
          <div className="bg-[#1E313F] self-start ml-[100px] flex items-center justify-center  rounded-3xl">
            <button className="py-2 px-1 text-white">Request a course</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[250px] justify-center px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl text-white font-bold py-6">
            Our Popular Course
          </h1>
          <p className="text-base text-white w-[55%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been th
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 px-8 py-8">
          <Card
            img={laptop1}
            title="Web Design  Basic to advance"
            border="#42BDEC"
          />
          <Card
            img={laptop2}
            title="Web development  Basic to advance"
            border="#1980E5"
          />
          <Card
            img={laptop3}
            title="Digital marketing  Basic to advance"
            border="#42BDEC"
          />
        </div>
        <div className="grid grid-cols-3 gap-10 px-8 py-8">
          <Card
            img={laptop4}
            title="App Design  Basic to advance"
            border="#42BDEC"
          />
          <Card
            img={laptop5}
            title="Mobile design  Basic to advance"
            border="#1980E5"
          />
          <Card
            img={laptop6}
            title="Graphics Design  Basic to advance"
            border="#42BDEC"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <button className="text-white text-lg font-semibold px-6 rounded-3xl py-2 bg-[#1E313F]">
              See More
            </button>
          </div>
        </div>
        <div className="py-20">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-white text-4xl font-bold">
              What our Students say
            </h1>
            <p className="text-white font-medium">
              There are many variations of passages of Lorem Ipsum available,{" "}
            </p>
          </div>
          <div className="grid grid-cols-3 px-4 gap-5 py-10">
            <GreatPlat name="Beth Luna" img={profile3} />
            <GreatPlat name="Beth Luna" img={profile2} margin={true} />
            <GreatPlat name="Beth Luna" img={profile1} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
