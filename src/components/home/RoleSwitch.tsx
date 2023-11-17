"use client";

import clsx from "clsx";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";

export default function RoleSwitch() {
  const { role, setRole } = useRole();

  const handleSwitchRole = (newRole: string) => {
    setRole(newRole);
  };

  return (
    <div
      className={clsx(
        "flex flex-row rounded-[26px] p-[10px]",
        role === ROLES.PLAYER ? "bg-[#39352F]" : "bg-[#E3E4E3]",
      )}
    >
      <button
        type="button"
        className={clsx(
          "rounded-[16px] px-[30px] py-[20px] text-[22px] font-bold md:px-[90px]",
          role === ROLES.PLAYER
            ? "bg-[#E7717D] text-[#EDF1F3]"
            : "text-[#00000080]",
        )}
        onClick={() => handleSwitchRole(ROLES.PLAYER)}
      >
        Play with Us
      </button>

      <button
        type="button"
        className={clsx(
          "rounded-[16px] px-[30px] py-[20px] text-[22px] font-bold md:px-[90px]",
          role === ROLES.CREATOR
            ? "bg-[#AFD275] text-[#EDF1F3]"
            : "text-[#EDF1F3B2]",
        )}
        onClick={() => handleSwitchRole(ROLES.CREATOR)}
      >
        Create with Us
      </button>
    </div>
  );
}
