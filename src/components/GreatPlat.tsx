import { FaStar } from "react-icons/fa6";
type GreatProps = {
  img: string;
  name: string;
  margin?: boolean;
};
export const GreatPlat = ({ img, name, margin }: GreatProps) => {
  return (
    <div
      className={`bg-[#1E313F] flex flex-col ${
        margin ? "mb-[-30px]" : ""
      } justify-center rounded-3xl py-8 px-8`}
    >
      <div className="relative text-center">
        <h1 className="text-2xl font-medium text-[#23A6F0] w-[30%]">
          Great Platform
        </h1>
        <p className="text-7xl text-white absolute top-6 left-[-20px]">،</p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white text-base text-center py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took
        </p>
      </div>
      <div className="flex gap-4">
        <div>
          <img src={img} className="cover" />
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="font-medium text-base text-[#1980E5]">{name}</p>
          <div className="flex">
            <FaStar className="text-[#F1C40F]" />
            <FaStar className="text-[#F1C40F]" />
            <FaStar className="text-[#F1C40F]" />
            <FaStar className="text-[#F1C40F]" />
            <FaStar className="text-[#F1C40F]" />
          </div>
        </div>
      </div>
    </div>
  );
};
