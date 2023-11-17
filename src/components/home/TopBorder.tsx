"use client";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";

export default function TopBorder() {
  const { role } = useRole();

  return (
    <>
      {role === ROLES.PLAYER && <div className="border border-[#EDF1F3]" />}
      {role === ROLES.CREATOR && <div className="border border-[#211D1926]" />}
    </>
  );
}
