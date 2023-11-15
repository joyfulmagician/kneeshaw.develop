import { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";
import TitanSaga from "@/components/games/TitanSaga";
import OldSalt from "@/components/games/OldSalt";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Games`,
  description: `${SITE_TITLE} - Games`,
};

export default function ApplyPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] text-white">
      <Header />

      <section className="mx-[80px] mt-[76px]">
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
