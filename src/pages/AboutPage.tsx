import lap from "../assets/Bill Sitting using laptop 1.svg";
import pow from "../assets/Ellipse 46.svg";
export const AboutPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <div className="flex items-center justify-center py-4">
        <h1 className="text-6xl font-bold text-white">
          About <span className="text-[#42BDEC]">Us</span>
        </h1>
      </div>

      <div className="flex justify-between items-start px-20">
        <div className="flex flex-col items-start w-[35%] py-8 mt-[50px] justify-start gap-8">
          <p className="text-white font-bold text-4xl py-2">
            Who <span className="text-[#42BDEC]">we are...</span>
          </p>
          <p className="text-white leading-8 font-medium tracking-wider text-base">
            Spark is a software engineering company that specializes in
            developing cutting-edge solutions for various domains. We have a
            team of talented and passionate engineers who are always ready to
            take on new challenges and deliver high-quality products. Whether
            you need a web app, a mobile app, a game, a chatbot, or anything
            else, Spark can make it happen.
          </p>
        </div>
        <div className="flex relative items-start w-[618px] h-[721px] justify-start">
          <div className="z-20 absolute bottom-[150px] left-3">
            <img src={lap} className="h-[681px] w-[455px]" />
          </div>
          <div className="absolute bottom-[150px]">
            <img src={pow} className="w-[488px] h-[488px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
