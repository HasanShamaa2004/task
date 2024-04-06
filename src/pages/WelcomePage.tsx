import welcome from "../assets/welcome.jpeg";
export const WelcomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${welcome}')`,
        height: "100vh",
        backgroundSize: "cover",
        width: "100%",
        backgroundPosition: "center",
        aspectRatio: "16/9",
      }}
      className="flex flex-col rounded items-center justify-center"
    >
      <div className="mt-[300px]">
        <h1 className="text-white text-4xl py-4">
          Welcome to the world's best service platform
        </h1>
        <p className="text-white text-center">
          We offer a wide range of services for both corporates and students.
          Click below to explore
        </p>
        <div className="mt-[100px] flex items-center justify-center gap-8">
          <div className="bg-[#42BDEC] rounded-xl">
            <button className="text-white px-2 py-3 font-semibold">
              Corporate Services
            </button>
          </div>
          <div className="bg-white rounded-xl">
            <button className="text-black font-semibold px-2 py-3">
              Student Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
