"use client";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";
import Link from "next/link";

export default function Logo() {
  const { role } = useRole();

  return (
    <Link href="/">
      <img
        className="h-[86px]"
        src={
          role === ROLES.PLAYER
            ? "/logo/logo-white.png"
            : "/logo/logo-black.png"
        }
        alt="Logo"
      />
    </Link>
  );
}
