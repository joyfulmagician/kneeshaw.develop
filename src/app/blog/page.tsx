import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";
import GameView from "@/components/homepage/GameView";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Blog`,
  description: `${SITE_TITLE} - Blog`,
};

export default function Marketplace() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#211D19] text-[#EDF1F3]">
      <Header />
      <h2 className="mt-[146px] text-[40px] font-bold">Our Blog</h2>
      <div className="mt-[56px]">pagination1</div>
      <div className="mt-[58px] text-[20px] font-light">
        Insights, News, and Tips to Level Up Your Gaming Experience
      </div>
      <div className="mt-[120px]">
        <GameView />
        <div className="mt-[60px] flex justify-center">pagination2</div>
      </div>
      <Footer />
    </main>
  );
}
