"use client";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";

export default function GameLibrary() {
  const { role } = useRole();

  return (
    role === ROLES.PLAYER && (
      <>
        <h2 className="text-[40px] font-light text-[#EDF1F3]">
          Enjoy our library of games
        </h2>

        <div className="mx-[40px] flex flex-row gap-[40px] rounded-[14px] bg-[#24201C] p-[40px] lg:pr-[50px] xl:pr-[80px]">
          <div className="flex w-[60%] max-w-[700px] flex-col gap-[24px]">
            <h1 className="text-[56px] font-bold text-[#AFD275]">
              Titan Saga:
              <br />
              Chanins of Kronos
            </h1>

            <p className="text-[18px] font-light text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>

            <button
              type="button"
              className="mt-[40px] h-[52px] w-[159px] rounded-[10px] bg-[#AFD275] font-bold text-white"
            >
              View More
            </button>
          </div>

          <div className="gird-rows-2 grid grid-flow-col gap-[40px]">
            <div className="col-span-2 row-span-2 hidden lg:flex">
              <img
                src="/images/home/library01.png"
                alt="library1.png"
                className="h-[420px] w-auto"
              />
            </div>

            <div className="hidden h-[190px] w-auto xl:flex">
              <img src="/images/home/library02.png" alt="library2.png" />
            </div>

            <div className="hidden h-[190px] w-auto xl:flex">
              <img src="/images/home/library03.png" alt="library3.png" />
            </div>
          </div>
        </div>
      </>
    )
  );
}
