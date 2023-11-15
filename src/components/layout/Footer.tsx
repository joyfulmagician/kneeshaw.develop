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
    <div className="flex flex-col">
      <div className="border-t-[1px] border-[#EDF1F3]" />

      <div className="flex flex-row flex-wrap justify-around gap-[32px] py-[32px]">
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

        <div className="flex flex-col">
          <h6>Join our newsletter</h6>

          <div className="relative">
            <input type="text" placeholder="Your email" />
            <button className="absolute bottom-[0] right-[0] top-[0]">
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
