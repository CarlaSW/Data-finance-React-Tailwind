import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="text-white">
      <div className="text-center mx-auto max-w-[800px] w-full h-screen flex flex-col">
        <p className="text-[#00df9a] font-bold p-2 uppercase ">
          Growing With data Analytics
        </p>
        <h1 className="font-bold sm:text-6xl text-4xl md:text-7xl md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="font-bold text-xl sm:text-4xl md:text-5xl">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="font-bold text-xl sm:text-4xl md:text-5xl md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-gray-500 font-bold md:text-2xl text-xl">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md cursor-pointer h-[45px] text-black text-lg font-medium mx-auto my-6 hover:brightness-75 active:brightness-100">
          Get Started
        </button>
      </div>
    </div>
  );
}
