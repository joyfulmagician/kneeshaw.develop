"use client";

import Link from "next/link";

export default function TitanSaga() {
  return (
    <section className="flex flex-col rounded-xl bg-[#3F3046] p-8 text-[#EDF1F3] xl:flex-row">
      <div className="flex w-full flex-col gap-8 xl:w-1/2">
        <h5 className="flex justify-start text-[20px] font-[600]">
          7k Players
          <span className="inline-flex h-3 w-3 rounded-full bg-[#B74AFF]"></span>
        </h5>
        <img
          className="mb-[-100px] mt-[-100px] hidden h-[369.8px] w-[562px] object-scale-down lg:block"
          src="/images/image01.png"
        />
        <p className="text-[20px] font-[400]">
          It is a turn-based RPG (role-playing game) that takes place in a
          fantasy world filled with magic and mythical creatures. The game
          features a deep and immersive story, with players taking on the role
          of a hero tasked with saving the world from destruction.
        </p>
        <div className="flex gap-[20px]">
          <Link href="/games/apply/id=1_get">
            <button className="flex h-[44px] w-[210px] items-center justify-center rounded-lg bg-[#B74AFF] px-[44px] py-[12px] text-[16px] text-base font-[600]">
              Get it now
            </button>
          </Link>
          <Link href="/games/apply/id=1_more">
            <button className="flex h-[44px] w-[83px] items-center justify-center rounded-lg border border-white bg-transparent px-[24px] py-[12px] text-[16px] font-[600]">
              More
            </button>
          </Link>
        </div>
      </div>
      <img
        src="/images/image02.png"
        className="mt-[-150px] hidden h-[623px] w-1/2 w-[600px] object-scale-down xl:block"
      />
    </section>
  );
}
