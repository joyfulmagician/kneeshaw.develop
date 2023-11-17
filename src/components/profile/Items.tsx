import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuSettings } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiHome4Line } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";

export default function Items() {
  return (
    <div className="flex h-[203px] w-[282px] flex-col justify-between rounded-lg bg-[#35322F] p-[16px]">
      <div className="flex flex-row items-center">
        <RiHome4Line />

        <Link href="/profile">
          <span className="text-[18px] font-[500]">My Profile</span>
        </Link>
      </div>

      <div className="flex flex-row items-center">
        <HiOutlineShoppingBag />
        <Sheet>
          <SheetTrigger className="text-[18px] font-[500] text-[#EDF1F3]">
            Shopping Card
          </SheetTrigger>
          <SheetContent className="border-0 bg-[#35322F]">
            <SheetHeader>
              <SheetTitle className="text-[20px] font-[700] text-[#AFD275]">
                Your Cart
              </SheetTitle>
              <SheetDescription>
                <div className="flex flex-row items-center gap-[15px]">
                  <img src="/images/games/sheet/card_image_01.svg" />
                  <p className="text-[20px] font-[500] text-[#EDF1F3]">
                    Titan Saga: Chains of Kronos
                  </p>
                  <div className="mt-0 flex flex-col">
                    <div className="ml-auto">
                      <i className="fa-regular fa-circle-mark fa-xl text-white" />
                    </div>
                    <p className="text-[14px] font-[400] text-[#EDF1F3] text-white">
                      $123.00
                    </p>
                  </div>
                </div>
                <div className="mt-[50px] flex flex-row gap-[15px] border-b-[2px] py-[20px]">
                  <p className="w-1/2 text-center text-[20px] font-[600] text-[#AFD275]">
                    TOTAL
                  </p>
                  <p className="ml-auto w-1/2 text-right text-[20px] font-[500] text-[#AFD275]">
                    $123.00
                  </p>
                </div>
                <div className="mt-[20px] flex flex-col gap-[15px]">
                  <p className="text-[12px] font-[300] text-[#EDF1F3]">
                    SECURE PAYMENTS PROVIDED BY
                  </p>
                  <div className="flex-start flex gap-[7px]">
                    <img src="/images/games/sheet/bankcard_01.svg" />
                    <img src="/images/games/sheet/bankcard_02.svg" />
                    <img src="/images/games/sheet/bankcard_03.svg" />
                  </div>
                </div>
                <div className="mt-[20px] flex justify-center">
                  <Link href="/cart">
                    <button
                      type="button"
                      className="h-[52px] w-[210px] rounded-lg bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]"
                    >
                      Check Out
                    </button>
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="ml-[16px] flex h-[24px] w-[24px] items-center justify-center rounded-[100%] bg-[#AFD275] text-center text-[16px] leading-[15px]">
          0
        </div>
      </div>

      <div className="flex flex-row items-center">
        <CgFileDocument />
        <Link href="/quote">
          <span className="text-[18px] font-[500]">Request Quote</span>
        </Link>
      </div>

      <div className="flex flex-row items-center">
        <LuSettings />
        <Link href="/settings">
          <span className="text-[18px] font-[500]">Settings</span>
        </Link>
      </div>
    </div>
  );
}
