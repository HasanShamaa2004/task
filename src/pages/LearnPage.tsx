import social from "../assets/col-md-6.svg";
import vector from "../assets/Vector 21.svg";
export const LearnPage = () => {
  return (
    <div className="h-screen bg-black px-20">
      <div className="flex gap-2 items-center cursor-pointer">
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

      <div className="grid grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="text-5xl whitespace-nowrap font-semibold text-center text-white relative">
            Learn with us anywhere <br /> with the best
            <span className="text-[#23A6F0] px-2">experts</span>
            <img src={vector} className="absolute right-10" />
          </h1>
          <div className="py-8">
            <div className="bg-[#23A6F0] ml-[60px] rounded-xl">
              <button className="text-white text-sm font-semibold px-8 py-4">
                Get Quote Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={social} />
        </div>
      </div>
    </div>
  );
};
