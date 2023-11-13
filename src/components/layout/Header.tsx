"use client";

import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row gap-[20px]">
      <Link href="/games">Games</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/services">Services</Link>
      <Link href="/job">Job</Link>
      <Link href="/aboutus">About Us</Link>
      <Link href="/signin">Sign In</Link>
      <Link href="/signup">Sign Up</Link>
    </div>
  );
}
