"use client";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";

export default function HorizonScroll() {
  const { role } = useRole();

  return (
    <>
      {role === ROLES.PLAYER && (
        <div className="mt-[75px] flex flex-row justify-center gap-[20px] text-[#E7717D]">
          {Array.from(Array(6).keys()).map((k) => (
            <div
              key={k}
              className="h-[14px] w-[14px] rounded-[10px] border border-[#E7717D]"
            />
          ))}
        </div>
      )}
    </>
  );
}
