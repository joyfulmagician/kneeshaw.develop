import { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import OldSalt from "@/components/games/OldSalt";
import TitanSaga from "@/components/games/TitanSaga";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Games`,
  description: `${SITE_TITLE} - Games`,
};

export default function Games() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] text-white">
      <Header />

      <section className="mx-[80px] mt-[146px] flex flex-col items-center">
        <h1 className="text-[40px] font-bold text-[#EDF1F3]">All Games</h1>
      </section>

      <section className="mx-[80px] mt-[56px] flex items-center justify-center">
        <div className="flex w-[100px] flex-row">
          <div className="h-[1px] w-1/3 border border-[#677746]"></div>
          <div className="h-[1px] w-1/3 border border-[#AFD275]"></div>
          <div className="h-[1px] w-1/3 border border-[#677746]"></div>
        </div>
      </section>

      <section className="mx-[80px] mt-[58px] flex justify-center text-center">
        <h3 className="w-[966px] text-[20px] font-[400] text-[#EDF1F3]">
          Enjoy exploring the diverse collection of games on the Kneeshaw Games,
          and may you find exciting experiences that match your interests and
          preferences.
        </h3>
      </section>

      <section className="mx-[80px] mt-[99px] flex flex-col justify-center gap-[50px] text-center text-[#EDF1F3] lg:flex-row">
        <div>
          <Select>
            <SelectTrigger className="mt-[10px] h-[44px] w-[317px] bg-transparent text-white">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent className="w-[317px] bg-transparent text-white">
              <SelectItem value="first_category">First Category</SelectItem>
              <SelectItem value="second_category">Second Category</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger className="mt-[10px] h-[44px] w-[317px] bg-transparent text-white">
              <SelectValue placeholder="All platforms" />
            </SelectTrigger>
            <SelectContent className="w-[317px] bg-transparent text-white">
              <SelectItem value="first_platform">First Platform</SelectItem>
              <SelectItem value="second_platform">Second Platform</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-[10px]">
          <Link href="/games/apply">
            <button className="h-[44px] w-[210px] rounded-xl bg-[#AFD275] font-[600]">
              Apply
            </button>
          </Link>
        </div>
      </section>

      <section className="mx-[80px] mt-[120px] flex items-center">
        <div className="w-[100px]  border border-[#AFD275]">
          <div className="ml-0 w-[30px] border border-[#AFD275]" />
        </div>
      </section>

      <section className="mx-[80px] mt-[21px]">
        <h1 className="text-[40px] font-[700] text-[#EDF1F3]">Popular Games</h1>
      </section>

      <section className="mx-[80px] mt-[56px]">
        <TitanSaga />
      </section>

      <section className="mx-[80px] my-[107px]">
        <OldSalt />
      </section>

      <Footer />
    </main>
  );
}
