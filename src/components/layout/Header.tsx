"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useRole } from "@/contexts/RoleContext";
import clsx from "clsx";
import { ROLES } from "@/utils/constants";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Header() {
  const { role } = useRole();

  return (
    <div className="flex h-[134px] flex-row justify-between px-[60px] py-[24px]">
      <Logo />

      <div
        className={clsx(
          "flex flex-row items-center gap-[70px] text-[18px] font-semibold",
          role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
        )}
      >
        <Link href="/games">Games</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/services">Services</Link>
        <Link href="/job">Job</Link>
        <Link href="/aboutus">About Us</Link>
      </div>

      <div
        className={clsx(
          "flex flex-row items-center gap-[24px]",
          role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
        )}
      >
        <HiOutlineShoppingBag
          className={clsx(
            "text-[24px]",
            role === ROLES.PLAYER ? "text-[#EDF1F3]" : "text-[#000000]",
          )}
        />
        <Link className="text-[#AFD275]" href="/signin">
          Sign In
        </Link>
        <Link className="text-[#AFD275]" href="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
