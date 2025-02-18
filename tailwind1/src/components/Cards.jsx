import { BiUser } from "react-icons/bi";
import { PiUsersFour } from "react-icons/pi";
import { PiUsersBold } from "react-icons/pi";

export default function Cards() {
  return (
    <div className="bg-white w-full grid grid-rows-3 lg:grid-cols-3 justify-center items-center">
      <div className="border shadow-xl rounded-lg  mt-28 flex flex-col mx-auto w-[300px] p-3 items-center gap-3 hover:scale-110 duration-300">
        <BiUser className="mt-[-80px] bg-white" size={100} />
        <p className="font-bold text-xl ">Single User</p>
        <p className="font-bold text-2xl">$ 149</p>
        <p className="font-medium">500 GB Storage</p>
        <p className="font-medium">1 Granted user</p>
        <p className="font-medium">Send up to 2 GB</p>
        <button className="font-medium bg-[#00df9a] w-[160px] h-10 rounded-md cursor-pointer">
          Start Trial
        </button>
      </div>
      <div className="border shadow-xl rounded-lg  mt-28 flex flex-col mx-auto w-[300px] p-3 items-center gap-3 hover:scale-110 duration-300 bg-gray-200">
        <PiUsersBold className="mt-[-80px] bg-white" size={100} />
        <p className="font-bold text-xl ">Single User</p>
        <p className="font-bold text-2xl">$ 149</p>
        <p className="font-medium">500 GB Storage</p>
        <p className="font-medium">1 Granted user</p>
        <p className="font-medium">Send up to 2 GB</p>
        <button className="font-medium bg-black text-[#00df9a] w-[160px] h-10 rounded-md cursor-pointer">
          Start Trial
        </button>
      </div>
      <div className="border shadow-xl rounded-lg  mt-28 flex flex-col mx-auto w-[300px] p-3 items-center gap-3 hover:scale-110 duration-300">
        <PiUsersFour className="mt-[-80px] bg-white" size={100} />
        <p className="font-bold text-xl ">Single User</p>
        <p className="font-bold text-2xl">$ 149</p>
        <p className="font-medium">500 GB Storage</p>
        <p className="font-medium">1 Granted user</p>
        <p className="font-medium">Send up to 2 GB</p>
        <button className="font-medium bg-[#00df9a] w-[160px] h-10 rounded-md cursor-pointer">
          Start Trial
        </button>
      </div>
    </div>
  );
}
