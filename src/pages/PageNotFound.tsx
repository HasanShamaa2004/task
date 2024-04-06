import NotFound from "../assets/NotFound.jpg";
export const PageNotFound = () => {
  return (
    <div className="flex bg-white h-screen flex-col gap-4 items-center justify-center">
      <div className="w-[300px]">
        <img src={NotFound} className="cover" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-[#42BDEC] font-medium">Page Not Found</h1>
        <p className="text-base text-[#797979] py-3 w-[60%] text-center">
          The page you're looking for isn't available. Try to search again or
          use the go back button bellow
        </p>
        <div className="bg-[#42BDEC] w-[60%] flex items-center mt-[30px] justify-center rounded-xl">
          <button className=" text-white text-xl py-4 font-medium">
            Reload
          </button>
        </div>
      </div>
    </div>
  );
};
