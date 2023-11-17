"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  onNext: () => void;
}

export default function Step2({ onNext }: Props) {
  return (
    <>
      <div className="flex h-[86px] w-full items-center justify-center gap-[8px] bg-[#35322F]">
        <div>Shopping Cart</div>
        <p>-</p>
        <div className="text-[14px] font-[700] text-[#AFD275]">Checkout</div>
        <p>-</p>
        <div>Order Complete</div>
      </div>

      <div className="flex flex-col gap-[64px] px-[15px] py-[48px] lg:flex-row lg:px-[135px]">
        <div className="flex w-2/3 flex-col gap-[34px]">
          <div className="flex flex-row justify-between">
            <p className="text-[20px] font-[700] text-[#AFD275]">Shipping</p>
            <p className="text-[16px] font-[300] text-[#9D9EA2]">(1)</p>
          </div>

          <div className="w-full border border-[#C8C9CB]" />
          <div className="flex flex-row gap-[15px]">
            <div className="flex w-1/2 flex-col">
              <p className="text-[18px] font-[400] text-[#EDF1F3]">
                First Name
              </p>
              <input
                placeholder="Emery"
                className="h-[52px] w-full rounded-lg border bg-transparent p-[5px]"
              />
            </div>

            <div className="flex w-1/2 flex-col">
              <p className="text-[18px] font-[400] text-[#EDF1F3]">
                First Name
              </p>
              <input
                placeholder="Emery"
                className="h-[52px] w-full rounded-lg border bg-transparent p-[5px]"
              />
            </div>
          </div>

          <div>
            <p className="text-[18px] font-[400] text-[#EDF1F3]">
              Email Address
            </p>
            <input
              type="email"
              className="h-[52px] w-full rounded-lg border bg-transparent p-[5px]"
              placeholder="emery.stanton@gmail.com"
            />
          </div>

          <div className="mt-[10px] flex flex-row justify-between">
            <p className="text-[20px] font-[700] text-[#AFD275]">Credit Card</p>
            <p className="text-[16px] font-[300] text-[#9D9EA2]">(1)</p>
          </div>

          <div className="w-full border border-[#C8C9CB]" />

          <div>
            <p className="text-[18px] font-[400] text-[#EDF1F3]">Card Number</p>
            <input
              className="h-[52px] w-full rounded-lg border bg-transparent p-[5px]"
              placeholder="xxxx xxxx xxxx xxxx"
            />
          </div>

          <div className="flex flex-row gap-[10px]">
            <div className="w-2/3">
              <p className="text-[18px] font-[400] text-[#EDF1F3]">
                Name on the Card
              </p>
              <input
                className="h-[52px] w-full rounded-lg border bg-transparent p-[5px]"
                placeholder="ex: EMERY STANTON"
              />
            </div>

            <div className="w-1/6">
              <p className="text-[18px] font-[400] text-[#EDF1F3]">
                Expiry Date
              </p>
              <input
                type="date"
                className="h-[52px] w-full rounded-lg border bg-transparent p-[5px]"
                placeholder="MM/YYYY"
              />
            </div>

            <div className="w-1/6">
              <p className="text-[18px] font-[400] text-[#EDF1F3]">CVV/CSV</p>
              <input
                className="h-[52px] w-full rounded-lg border bg-transparent p-[5px]"
                placeholder="xxx"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full w-[350px] flex-col justify-between rounded-[16px] bg-[#35322F] p-[24px] lg:h-[383px] lg:w-1/3">
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
            type="button"
            className="h-[52px] w-full rounded-[8px] bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]"
            onClick={() => onNext()}
          >
            Checkout | $123.00
          </button>

          <div className="w-full border border-[#EDF1F3]" />

          <div className="flex flex-row items-center gap-[5px]">
            <Checkbox />
            <p className="text-[14px] font-[400] text-[#EDF1F3]">
              I confirm that my email address is 100% correct.
            </p>
          </div>

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
