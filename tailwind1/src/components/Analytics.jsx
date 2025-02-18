import laptop from "../images/graphic-laptop-icon-it_763713-5751.avif";
export default function Analytics() {
  return (
    <div className="grid grid-cols-2 bg-white w-full h-auto p-5 gap-10 items-center">
      <img className="" src={laptop} alt="laptop "></img>
      <div className="flex flex-col justify-center ">
        <p className="text-[#00df9a] font-bold uppercase text-xl">
          data analytics dashboard
        </p>
        <p className="font-bold text-3xl">Manage Data Analytics Centrally</p>
        <p className="font-normal">
          Lorem ipsum dolor sit, amet consectetur adispiscing elit. Dicta beatae
          omnis obcaecati aliquam, quisquam et eligendi offica atque, quam
          corrupti consequatur commodi mollita non, assumenda aliquid hic at
          possimus nihil?
        </p>
        <button className="bg-black text-[#00df9a] py-3 px-10 rounded-md cursor-pointer font-medium my-3 w-[200px]">
          Get Started{" "}
        </button>
      </div>
    </div>
  );
}
