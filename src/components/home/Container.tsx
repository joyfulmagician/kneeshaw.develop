"use client";

import clsx from "clsx";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  const { role } = useRole();

  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col",
        role === ROLES.PLAYER ? "bg-[#211D19]" : "bg-[#EDF1F3]",
      )}
      style={{
        backgroundImage: "url('/images/homeback.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </main>
  );
}
