import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";
import GameView from "@/components/home/GameView";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Blog`,
  description: `${SITE_TITLE} - Blog`,
};

export default function Marketplace() {
  return (
    <main className="flex min-h-screen flex-col bg-[#211D19] text-[#EDF1F3]">
      <Header />

      <h2 className="mt-[146px] text-center text-[40px] font-bold">Our Blog</h2>

      <section className="mt-[56px] flex items-center justify-center">
        <img src="/images/blog/navigation.png" />
      </section>

      <section className="mt-[58px] text-center text-[20px] font-light">
        Insights, News, and Tips to Level Up Your Gaming Experience
      </section>

      <section className="mt-[120px]">
        <GameView />

        <div className="mb-[210px] mt-[60px] flex flex-row items-center justify-center gap-[40px]">
          <i className="fa-solid fa-angle-left cursor-pointer" />
          <button
            type="button"
            className="h-[30px] w-[30px] rounded-[9px] bg-[#E7717D]"
          >
            1
          </button>
          <button className="h-[30px] w-[30px] rounded-[9px]">2</button>
          <button className="h-[30px] w-[30px] rounded-[9px]">3</button>
          <i className="fa-solid fa-ellipsis"></i>
          <button className="h-[30px] w-[30px] rounded-[9px]">13</button>
          <button className="h-[30px] w-[30px] rounded-[9px]">14</button>
          <button>
            <i className="fa-solid fa-angle-right" />
          </button>
          <i className="fa-solid fa-angle-right cursor-pointer" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
