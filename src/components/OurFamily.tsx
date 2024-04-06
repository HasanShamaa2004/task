import { Carousel } from "./Carousel";
export const OurFamily = () => {
  return (
    <div className="flex flex-col text-center px-2 py-[300px] bg-black">
      <h1 className="text-4xl text-white font-bold">
        Our Happy <span className="text-[#42BDEC]">Family</span>
      </h1>
      <Carousel />
    </div>
  );
};
