import { Metadata } from "next";

import { CiSearch } from "react-icons/ci";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import GameView from "@/components/home/GameView";
import RoleSwitch from "@/components/home/RoleSwitch";
import SmallImageList from "@/components/home/SmallImageList";
import Container from "@/components/home/Container";
import FAQ from "@/components/home/FAQ";
import { SITE_TITLE } from "@/utils/constants";
import Introduction1 from "@/components/home/Introduction1";
import Introduction2 from "@/components/home/introduction2";
import GameLibrary from "@/components/home/GameLibrary";
import HorizonScroll from "@/components/home/horizonscroll";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Landing`,
  description: `${SITE_TITLE} - Landing`,
};

export default function Home() {
  return (
    <Container>
      <Header />

      <div className="border border-[#EDF1F3]" />

      <div className="m-[15px] flex cursor-pointer  flex-row-reverse font-light text-[#EDF1F3]">
        <div className="rounded-[18px] bg-[#4E3D38] p-[15px] ">
          <CiSearch className="h-[28px] w-[28px]" />
        </div>
      </div>

      <section className="mt-[54px] flex flex-col gap-[40px] text-center">
        <h3 className="text-[20px] font-light text-[#EDF1F3] sm:text-[30px] md:text-[40px]">
          Crafting innovation gameplay experiences through
        </h3>

        <div>
          <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.18em] text-[#AFD275] sm:leading-[60px] sm:text-[48] md:text-[56px] md:leading-[70px]">
            Kneeshaw
          </h1>
          <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.18em] text-[#AFD275] sm:leading-[60px] sm:text-[48] md:text-[56px] md:leading-[70px]">
            Developments
          </h1>
        </div>
      </section>

      <section className="mt-[100px] flex justify-center rounded-[16px] px-[15px] py-[10px]">
        <RoleSwitch />
      </section>

      <section className="mt-[97px] flex flex-col gap-[74px] text-[20px] font-light text-white">
        <Introduction1 />
        <Introduction2 />
      </section>

      <section className="mt-[150px] flex flex-col items-center gap-[99px]">
        <GameLibrary />
      </section>

      <section className="mt-[40px]">
        <SmallImageList />

        <HorizonScroll />
      </section>

      <section className="mt-[200px]">
        <h2 className="mb-[100px] text-center text-[40px] font-light text-[#EDF1F3]">
          Stay up to date with the latest gaming news and updates
        </h2>

        <GameView />
      </section>

      <section className="mb-[100px] mt-[150px] flex flex-col items-center text-[#EDF1F3]">
        <FAQ />
      </section>

      <Footer />
    </Container>
  );
}
