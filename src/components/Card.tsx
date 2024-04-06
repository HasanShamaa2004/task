import { FaStar } from "react-icons/fa6";

type CardProps = {
  title: string;
  img: string;
  border: string;
};
export const Card = ({ title, img, border }: CardProps) => {
  return (
    <div className="flex flex-col gap-3 bg-[#1E313F] rounded-3xl">
      <div>
        <img src={img} className="cover" />
      </div>
      <h1 className="text-white text-xl font-semibold px-6 w-[80%]">{title}</h1>
      <div className="flex px-6 gap-8">
        <div className="flex">
          <FaStar className="text-[#F1C40F]" />
          <FaStar className="text-[#F1C40F]" />
          <FaStar className="text-[#F1C40F]" />
          <FaStar className="text-[#F1C40F]" />
          <FaStar className="text-[#F1C40F]" />
        </div>
        <div className="flex gap-2">
          <p className="text-white">5.0</p>
          <p className="text-white">(2 rating)</p>
        </div>
      </div>
      <div className="flex justify-between py-6 gap-5 px-6">
        <div className="flex gap-4">
          <p className="text-[#23A6F0]">
            26$ <br /> 0
          </p>
          <p className="text-[#A6A8A9]">
            <span className="line-through">28$</span> <br />0
          </p>
        </div>
        <div
          className={`border border-[${border}] cursor-pointer flex items-center justify-center rounded-xl rounded-tr-none`}
        >
          <button className="text-white text-lg font-semibold px-4">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
