export default function Newsletter() {
  return (
    <div className=" w-full bg-black text-white mt-10 mx-8 grid grid-rows-2 lg:grid-cols-2">
      <div className="max-w-[1240px] min-w-[200px]">
        <p className="font-bold text-2xl">
          Want tips & tricks to optimize your flow?
        </p>
        <p>Sign up to our newsletter and stay up to date</p>
        <p className="my-3 text-sm">
          We care about the protection of your data. Read our
          <span className="text-[#00df9a] ml-1 underline cursor-pointer">
            Privacy Policy
          </span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center mt-10 max-w-[1240px] min-w-[300px] ">
        <input
          className="w-80 rounded-md h-10 p-3 font-medium outline-none text-black "
          type="text"
          placeholder="Enter you email"
        ></input>
        <button className="m-4 bg-[#00df9a] text-black w-[150px] h-10 rounded-md cursor-pointer font-medium ">
          Notify me
        </button>
      </div>
    </div>
  );
}
