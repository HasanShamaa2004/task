import { FaStar } from "react-icons/fa6";
import photo from "../assets/Photo.svg";
export const Carousel = () => {
  return (
    <div className="px-10 py-10">
      <div className="bg-[#161616] h-[863px] w-full px-20">
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative h-56 rounded-lg md:h-96">
            <div className="flex flex-col items-center gap-2 mt-[80px]justify-center">
              <div className="mt-[100px]">
                <img src={photo} className="rounded-full" />
              </div>
              <div className="flex">
                <h1 className="text-white font-bold"> Danyal M.,</h1>
                <p className="text-[#797979] px-1">Team Leader</p>
              </div>
              <div className="flex">
                <FaStar className="text-[#FFB13B]" />
                <FaStar className="text-[#FFB13B]" />
                <FaStar className="text-[#FFB13B]" />
                <FaStar className="text-[#FFB13B]" />
              </div>
              <div className="w-[47%]">
                <p className="text-[#D0D0D0] text-base text-center">
                  Danyal Mershed is an accomplished and dynamic leader with a
                  proven track record of driving teams towards success. With a
                  keen eye for detail and a passion for fostering collaboration,
                  Danyal brings a unique blend of strategic thinking and
                  hands-on leadership to every project.
                </p>
              </div>
            </div>
            <div className="mt-[200px]">
              <hr className="border border-[#303030] w-full" />
            </div>
          </div>
          <button
            type="button"
            className="absolute top-[14rem] start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-[76px] h-[76px] rounded-full bg-black group-hover:bg-[#42BDEC]">
              <svg
                className="w-4 h-4 text-white rtl:rotate-180"
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
            </span>
          </button>
          <button
            type="button"
            className="absolute top-[14rem] end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-[76px] h-[76px] rounded-full bg-black group-hover:bg-[#42BDEC]">
              <svg
                className="w-4 h-4 text-white rtl:rotate-180"
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
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
