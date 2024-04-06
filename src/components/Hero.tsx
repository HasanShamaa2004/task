import back from "../assets/Frame2.png";
const Hero = () => {
  return (
    <div
      className="flex flex-col w-full h-[700px] mt-[200px] bg-black items-center justify-between"
      style={{
        backgroundImage: `url('${back}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" flex flex-col  items-center justify-center gap-2">
        <h1 className="text-[84px] text-white">Create your dreams</h1>
        <p className="text-[#5F5F5F] text-[20px]">
          Start with a stunning homepage. Stay motivated without hurting your
          pocket.
        </p>
      </div>
      <div className="h-[68px] w-[210px] cursor-pointer rounded-3xl bg-[#0D0D0D] flex items-center justify-center shadow-[rgba(66,_189,_236,_0.5)_0px_10px_60px]">
        <button className="text-xl text-white">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
