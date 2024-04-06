import "../styles/OurProjects.scss";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
export const OurProjects = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center bg-black pt-[300px]">
        <h1 className="text-4xl font-bold py-4 text-white">
          <span className="text-[#42BDEC] px-1">Our</span> Projects
        </h1>
        <p className="text-center w-[40%] text-white text-sm">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </p>
        <div className="flex items-center justify-center py-16 gap-2">
          <button className="OurProjectsButton">All</button>
          <button className="OurProjectsButton">Ui/Ux</button>
          <button className="OurProjectsButton">Web Design</button>
          <button className="OurProjectsButton">App Design</button>
          <button className="OurProjectsButton">Graphic Design</button>
        </div>
        <div className="grid grid-cols-3 px-5 gap-5">
          <div className="flex flex-col items-start justify-center">
            <div className="rounded-lg">
              <img src={img1} className="object-cover bg-black" />
            </div>
            <div className="mt-[-95px]">
              <p className="text-sm text-[#42BDEC] py-2">Web Design</p>
              <h1 className="text-base font-bold text-white">
                AirCalling Landing Page Design
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="rounded-lg">
              <img src={img2} className="object-cover bg-black" />
            </div>
            <div className="mt-[-95px]">
              <p className="text-sm text-[#42BDEC] py-2">Web Design</p>
              <h1 className="text-base font-bold text-white">
                Business Landing Page Design
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="rounded-lg">
              <img src={img3} className="object-cover bg-black mt--[70px]" />
            </div>
            <div className="mt-[-95px]">
              <p className="text-sm text-[#42BDEC] py-2">Web Design</p>
              <h1 className="text-base font-bold text-white">
                Ecom Web Page Design
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
