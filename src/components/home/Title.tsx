"use client";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";

export default function Title() {
  const { role } = useRole();

  return (
    <>
      {role === ROLES.PLAYER && (
        <>
          <h3 className="text-[20px] font-light text-[#EDF1F3] sm:text-[30px] md:text-[40px]">
            Crafting innovation gameplay experiences through
          </h3>

          <div>
            <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.18em] text-[#AFD275] sm:leading-[60px] sm:text-[48] md:text-[56px] md:leading-[70px]">
              Kneeshaw
            </h1>

            <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.18em] text-[#AFD275] sm:leading-[60px] sm:text-[48] md:text-[56px] md:leading-[70px]">
              Developments
            </h1>
          </div>
        </>
      )}

      {role === ROLES.CREATOR && (
        <>
          <h3 className="mt-[58px] text-[20px] font-light text-[#211D19] sm:text-[30px] md:text-[40px]">
            Crafting innovation gameplay experiences through
          </h3>

          <div>
            <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.18em] text-[#211D19] sm:leading-[60px] sm:text-[48] md:text-[56px] md:leading-[70px]">
              Kneeshaw
            </h1>

            <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.18em] text-[#211D19] sm:leading-[60px] sm:text-[48] md:text-[56px] md:leading-[70px]">
              Developments
            </h1>
          </div>
        </>
      )}
    </>
  );
}
