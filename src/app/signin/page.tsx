import { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign In`,
  description: `${SITE_TITLE} - Sign In`,
};

export default function Marketplace() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211d19]">
      <Header />
      <section className="w-7/10 my-[39px] ml-auto mr-auto flex flex-col items-center justify-center rounded-xl bg-[#35322F] px-[10px] py-[60px] text-[#EDF1F3] md:w-[695px] md:px-[80px]">
        <div className="flex flex-col gap-[14px] px-[40px] py-[30px] text-center">
          <h1 className="text-[30px] font-[700] md:text-[52px]">
            Welcome back!
          </h1>
          <p className="text-[12px] md:text-[20px]">
            Kneeshaw is happy to see you return.
          </p>
        </div>
        <div className="flex flex-col gap-[20px] px-[40px] py-[30px] text-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-[52px] w-[275px] rounded-lg border-[1px] bg-transparent p-[5px] md:w-[475px]"
          />
          <input
            type="email"
            placeholder="Enter your password"
            className="h-[52px] w-[275px] rounded-lg border-[1px] bg-transparent p-[5px] md:w-[475px]"
          />
          <div className="flex flex-row text-[14px]">
            <p className="flex w-1/2 flex-row items-center text-left font-[400]">
              <Checkbox />
              Remember me
            </p>
            <p className="w-1/2 text-right font-[700] text-[#E7717D]">
              Forgot Password?
            </p>
          </div>
          <button className="h-[52px] w-[275px] rounded-lg bg-[#AFD275] md:w-[475px]">
            Sign In
          </button>
          <button className="flex h-[52px] w-[275px] flex-row items-center justify-center rounded-lg border bg-transparent md:w-[475px]">
            <img src="/images/google_icon.svg" />
            Sign In with Google
          </button>
          <p>
            Don't have an account?
            <Link href="/signup">
              <span className="text-[#AFD275]"> Sign Up</span>
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
