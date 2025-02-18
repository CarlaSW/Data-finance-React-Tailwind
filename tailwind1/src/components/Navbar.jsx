import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(true);
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <p className="w-full font-bold text-[#00df9a] text-3xl">React</p>
      <ul className="flex flex-row hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div
        className="cursor-pointer block md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-[-100%] ease-in-out duration-500"
            : "fixed top-0 left-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 "
        }
      >
        <p className="w-full font-bold text-[#00df9a] text-3xl m-4">React</p>

        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-b-gray-600 ">Home</li>
          <li className="p-4 border-b border-b-gray-600 ">Company</li>
          <li className="p-4 border-b border-b-gray-600 ">Resources</li>
          <li className="p-4 border-b border-b-gray-600 ">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}
