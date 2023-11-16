import { LuSettings } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiHome4Line } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";

export default function Items() {
  return (
    <div className="flex h-[203px] w-[282px] flex-col justify-between rounded-lg bg-[#35322F] p-[16px]">
      <div className="flex flex-row items-center">
        <RiHome4Line />
        <span className="text-[18px] font-[500]">My Profile</span>
      </div>

      <div className="flex flex-row items-center">
        <HiOutlineShoppingBag />
        <span className="text-[18px] font-[500]">Shopping Card</span>
        <div className="ml-[16px] flex h-[24px] w-[24px] items-center justify-center rounded-[100%] bg-[#AFD275] text-center text-[16px] leading-[15px]">
          0
        </div>
      </div>

      <div className="flex flex-row items-center">
        <CgFileDocument />
        <span className="text-[18px] font-[500]">Request Quote</span>
      </div>

      <div className="flex flex-row items-center">
        <LuSettings />
        <span className="text-[18px] font-[500]">Settings</span>
      </div>
    </div>
  );
}
