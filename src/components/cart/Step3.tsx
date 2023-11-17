"use client";

import { IoIosCheckmarkCircle } from "react-icons/io";

interface Props {
  onNext: () => void;
}

export default function Step3({ onNext }: Props) {
  return (
    <>
      <div className="flex h-[86px] w-full items-center justify-center gap-[8px] bg-[#35322F]">
        <div>Shopping Cart</div>
        <p>-</p>
        <div>Checkout</div>
        <p>-</p>
        <div className="text-[14px] font-[700] text-[#AFD275]">
          Order Complete
        </div>
      </div>

      <div className="flex flex-col gap-[54px] px-[15px] py-[48px] lg:px-[135px]">
        <div className="flex flex-row justify-between">
          <p className="text-[20px] font-[400] text-[#EDF1F3]">Your Order</p>
          <div className="flex flex-row gap-[3px]">
            <IoIosCheckmarkCircle />
            <p className="text-[16px] font-[400] text-[#AFD275]">Paid</p>
          </div>
        </div>
        <div className="w-full border border-[#C8C9CB]" />
        <div className="flex flex-row items-center justify-between gap-[24px]">
          <div className="flex flex-row items-center gap-[5px]">
            <img src="/images/games/sheet/card_image_01.svg" />
            <p className="text-[#EDF1F3 text-[20px] font-[500]">
              Titan Saga: Chains of Kronos
            </p>
          </div>
          <p className="text-[20px] font-[400] text-[#EDF1F3]">1x $123.00</p>
          <p className="text-[20px] font-[400] text-[#EDF1F3]">$123.00</p>
        </div>
        <div className="w-full border border-[#C8C9CB]" />
        <div className="flex flex-row justify-between">
          <p className="text-[14px] font-[400] text-[#EDF1F3]">TOTAL</p>
          <p className="text-[20px] font-[500] text-[#E7717D]">$123.00</p>
        </div>
        <button className="ml-auto mr-auto h-[52px] w-[210px] rounded-lg bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]">
          DONE
        </button>
      </div>
    </>
  );
}
