import serve1 from "../assets/serve1.png";
import serve2 from "../assets/serve2.png";
import serve3 from "../assets/serve3.png";
import serve4 from "../assets/serve4.png";
import "../styles/Services.scss";
export const Services = () => {
  return (
    <div className="bg-black px-20 h-full">
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
      <div className="flex flex-col gap-20 py-20 items-center justify-center">
        <div className="ServicesGrid">
          <div>
            <img src={serve4} />
          </div>
          <div className="ServicesDiv">
            <h1 className="ServicesTitle">1. Big Data & Business Analytics</h1>
            <p className="ServicesText">
              Data is your most valuable asset.But only if you make the most of
              it. <br /> AFQ Tech data scientists and analysts are skilled at
              mining, modeling, and extracting value from data. Sourced from a
              range of sectors and with hands-on experience, they put you in
              charge and draw on the best knowledge and expertise to help you
              navigate your way forward.
            </p>
            <div className="p-4">
              <div className="flex items-center justify-center bg-[#444444] rounded-xl">
                <button className="text-lg text-[#42BDEC] py-2 px-6">
                  Go-it
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ServicesGrid">
          <div className="ServicesDiv">
            <h1 className="ServicesTitle">2.UI/UX Design</h1>
            <p className="ServicesText">
              Crafting seamless digital experiences that captivate and empower
              users is our expertise. Our UI/UX wizards blend creativity with
              user-centric design, ensuring your platform speaks to your
              audience while delivering intuitive, delightful interactions.
            </p>
          </div>
          <div>
            <img src={serve3} />
          </div>
        </div>
        <div className="ServicesGrid">
          <div>
            <img src={serve2} />
          </div>
          <div className="ServicesDiv">
            <h1 className="ServicesTitle">3. Microsoft windows application</h1>
            <p className="ServicesText">
              Empower your tasks with our tailored Microsoft Windows
              applications. We specialize in creating intuitive, efficient
              software that seamlessly integrates into your workflow, enhancing
              productivity and simplifying complex processes.
            </p>
          </div>
        </div>
        <div className="ServicesGrid">
          <div className="ServicesDiv">
            <h1 className="ServicesTitle">4. Web and Software Development</h1>
            <p className="ServicesText">
              From automation to advanced analytics and seamless experiences, we
              can embed AI in business. We'll deliver new operating models and
              strategic intelligence for smart processes and data-driven
              decisions. <br />
              <span>What, Why and How?</span>
            </p>
          </div>
          <div>
            <img src={serve1} />
          </div>
        </div>
      </div>
    </div>
  );
};
