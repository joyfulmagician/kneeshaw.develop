"use client";

import Link from "next/link";

import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiRedditLogoFill } from "react-icons/pi";
import { FaSteam } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="border-t-[1px] border-[#EDF1F3]" />

      <div className="mx-[24px] flex flex-wrap gap-[48px] lg:flex-nowrap">
        <div className="flex w-full flex-col justify-around gap-[60px] md:flex-row lg:w-[60%]">
          <div className="flex flex-col items-center gap-[32px]">
            <Logo />

            <div className="flex flex-row justify-between gap-[32px] text-[24px] text-[#EDF1F3]">
              <FaLinkedinIn />
              <FaTwitter />
              <PiRedditLogoFill />
              <FaSteam />
              <FaYoutube />
            </div>
          </div>

          <div className="lg:ga-[150px] flex justify-center gap-[84px] xl:gap-[200px]">
            <div className="flex flex-col gap-[24px] text-[20px] font-semibold text-[#EDF1F3]">
              <Link href="/games">Games</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/services">Services</Link>
              <Link href="/job">Job</Link>
              <Link href="/aboutus">About Us</Link>
            </div>

            <div className="flex flex-col gap-[24px] text-[20px] font-semibold text-[#EDF1F3]">
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
        <div className="mb-[24px] flex w-full flex-col items-center gap-[24px] lg:w-[40%]">
          <h6 className="text-[16px] font-bold text-[#EDF1F3]">
            Join our newsletter
          </h6>

          <div className="relative">
            <input
              type="text"
              className="h-[54px] w-[320px] rounded-[16px] bg-[#39352F] pl-[12px] pr-[160px] text-[14px] font-light text-white md:w-[415px]"
              placeholder="Your email"
            />
            <button className="absolute right-[7px] top-[7px] h-[40px] w-[134px] rounded-[11px] bg-[#AFD275] text-[16px] font-semibold text-[#EDF1F3]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mb-[24px] text-center text-[15px] font-light text-[#EDF1F3]">
        &copy; 2022 Kneeshaw Development All rights reserved
      </div>
    </div>
  );
}
