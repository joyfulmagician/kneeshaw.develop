"use client";

import React, { useState } from "react";
interface Props {
  onNext: () => void;
}

export default function Step1({ onNext }: Props) {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleReduce = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="flex h-[86px] w-full items-center justify-center gap-[8px] bg-[#35322F]">
        <div className="text-[14px] font-[700] text-[#AFD275]">
          Shopping Cart
        </div>
        <p>-</p>
        <div>Checkout</div>
        <p>-</p>
        <div>Order Complete</div>
      </div>

      <div className="flex flex-col gap-[64px] px-[15px] py-[48px] lg:h-[417px] lg:flex-row lg:px-[135px]">
        <div className="flex w-full flex-col gap-[34px] lg:w-2/3">
          <div className="flex flex-row justify-between">
            <p className="text-[20px] font-[700] text-[#AFD275]">Your cart</p>
            <p className="text-[16px] font-[300] text-[#9D9EA2]">(1)</p>
          </div>
          <div className="w-full border border-[#C8C9CB]" />
          <div className="flex flex-row items-center gap-[24px]">
            <img src="/images/games/sheet/card_image_01.svg" />
            <p className="text-[#EDF1F3 text-[20px] font-[500]">
              Titan Saga: Chains of Kronos
            </p>
            <div className="flex flex-row gap-[3px]">
              <button
                onClick={handleReduce}
                className="h-[36px] w-[36px] bg-[#EDF1F3] text-[#AFD275]"
              >
                -
              </button>
              <button
                className="h-[36px] w-[36px] bg-[#EDF1F3] text-[#AFD275]"
                value={count}
              >
                {count}
              </button>
              <button
                onClick={handleAdd}
                className="h-[36px] w-[36px] bg-[#EDF1F3] text-[#AFD275]"
              >
                +
              </button>
            </div>
            <p className="ml-auto text-[14px] font-[400] text-[#EDF1F3]">
              $123.00
            </p>
          </div>
        </div>
        <div className="flex h-full w-[350px] flex-col justify-between rounded-[16px] bg-[#35322F] p-[24px] lg:w-1/3">
          <div className="flex justify-between text-[14px] font-[400] text-[#EDF1F3]">
            <p>Subtotal</p>
            <p>$123.00</p>
          </div>
          <div className="flex justify-between text-[14px] font-[400] text-[#EDF1F3]">
            <p>Discount</p>
            <p>$0.0</p>
          </div>
          <div className="flex justify-between text-[14px] font-[400] text-[#EDF1F3]">
            <p>Shipping Costs</p>
            <p>$0.00</p>
          </div>
          <button
            className="h-[52px] w-full rounded-[8px] bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]"
            onClick={() => onNext()}
          >
            Checkout | $123.00
          </button>
          <div className="w-full border border-[#EDF1F3]" />
          <p className="text-[12px] font-[300] text-[#EDF1F3]">
            SECURE PAYMENTS PROVIDED BY
          </p>
          <div className="flex flex-row gap-[7px]">
            <img src="images/games/sheet/bankcard_01.svg" />
            <img src="images/games/sheet/bankcard_02.svg" />
            <img src="images/games/sheet/bankcard_03.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
