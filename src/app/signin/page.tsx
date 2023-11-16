import { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign In`,
  description: `${SITE_TITLE} - Sign In`,
};

export default function Marketplace() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211d19]">
      <Header />
      <section className="mb-[70px] ml-auto mr-auto mt-[39px] flex w-[80%] min-w-[400px] max-w-[880px] flex-col items-center gap-[24px] rounded-[24px] bg-[#35322F] py-[50px] text-[#EDF1F3] lg:max-h-[1089px] lg:w-full">
        <div className="flex flex-col gap-[14px] text-center">
          <h1 className="text-[30px] font-[700] md:text-[52px]">
            Welcome back!
          </h1>
          <p className="text-[12px] md:text-[20px]">
            Kneeshaw is happy to see you return.
          </p>
        </div>
        <div className="flex flex-col gap-[20px] px-[30px] pt-[40px] text-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-[52px] w-[275px] rounded-[16px] border-[1px] bg-transparent p-[5px] md:w-[475px]"
          />
          <input
            type="email"
            placeholder="Enter your password"
            className="h-[52px] w-[275px] rounded-[16px] border-[1px] bg-transparent p-[5px] md:w-[475px]"
          />
          <div className="flex flex-row text-[14px]">
            <p className="flex w-1/2 flex-row items-center gap-[10px] text-left font-[400]">
              <Checkbox />
              Remember me
            </p>
            <p className="w-1/2 text-right font-[700] text-[#E7717D]">
              Forgot Password?
            </p>
          </div>
          <button className="h-[52px] w-[275px] rounded-[16px] bg-[#AFD275] text-[18px] font-[600] md:w-[475px]">
            Sign In
          </button>
          <button className="flex h-[52px] w-full flex-row items-center justify-center gap-[10px] rounded-[18px] border border-[#EDF1F3] ">
            <FcGoogle />
            <span className="text-[14px] font-[600] sm:text-[18px]">
              Sign In with Google
            </span>
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
