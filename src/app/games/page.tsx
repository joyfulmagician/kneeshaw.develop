import { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Games`,
  description: `${SITE_TITLE} - Games`,
};

export default function games() {
  const newLocal = "/images/aboutus_lineimage_01.svg";
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] px-[80px] text-white sm:px-[40px]">
      <Header />

      <section className="mt-[146px] flex flex-col items-center">
        <h1 className="text-[40px] font-bold">All Games</h1>
        <img src={newLocal} className="mt-[56px] w-[100px]" />
      </section>

      <section className="mt-[153px] flex justify-center text-center">
        <h3 className="w-[966px] text-[20px]">
          Enjoy exploring the diverse collection of games on the Kneeshaw Games,
          and may you find exciting experiences that match your interests and
          preferences.
        </h3>
      </section>

      <section className="mt-[99px] flex flex-col justify-center gap-[50px] text-center lg:flex-row">
        <div>
          <select
            id="category"
            name="category"
            className="h-[44px] w-[317px] w-full rounded-md border-[1px] border-[#EDF1F3] bg-transparent py-0  pl-2 pr-[20px] text-white"
          >
            <option value="">All categories</option>
            <option value="">First Category</option>
            <option value="">Second Category</option>
          </select>
        </div>
        <div>
          <select
            id="platform"
            name="platform"
            className="h-[44px] w-[317px] w-full rounded-md border-[1px] border-[#EDF1F3] bg-transparent py-0  pl-2 pr-[20px] text-white"
          >
            <option value="">All Platforms</option>
            <option value="">First Platform</option>
            <option value="">Second Platform</option>
          </select>
        </div>
        <div>
          <Link href="/games/apply">
            <button className="h-[44px] w-[210px] rounded-xl bg-[#AFD275]">
              Apply
            </button>
          </Link>
        </div>
      </section>

      <section className="mt-[120px]">
        <img src="/images/aboutus_lineimage_02.svg" className="w-[100px]" />
        <h1 className="mt-[21px] text-[40px]">Popular Games</h1>
      </section>

      <section className="mt-[56px] flex flex-col rounded-xl bg-[#3F3046] p-8 xl:flex-row">
        <div className="flex w-full flex-col gap-8 xl:w-1/2">
          <h5 className="flex justify-start text-[20px]">
            7k Players
            <span className="inline-flex h-3 w-3 rounded-full bg-[#B74AFF]"></span>
          </h5>
          <img
            className="mb-[-100px] mt-[-100px] hidden h-[369.8px] w-[562px] object-scale-down lg:block"
            src="/images/image01.png"
          />
          <p className="text-[20px]">
            It is a turn-based RPG (role-playing game) that takes place in a
            fantasy world filled with magic and mythical creatures. The game
            features a deep and immersive story, with players taking on the role
            of a hero tasked with saving the world from destruction.
          </p>
          <div className="flex gap-[20px]">
            <Link href="/games/apply/id=1_get">
              <button className="flex h-[44px] w-[210px] items-center justify-center rounded-lg bg-[#B74AFF] px-[44px] py-[12px] text-[16px] text-base">
                Get it now
              </button>
            </Link>
            <Link href="/games/apply/id=1_more">
              <button className="flex h-[44px] w-[83px] items-center justify-center rounded-lg border border-white bg-transparent px-[24px] py-[12px] text-[16px]">
                More
              </button>
            </Link>
          </div>
        </div>
        <img
          src="/images/image02.png"
          className="mt-[-150px] hidden h-[623px] w-1/2 w-[600px] object-scale-down xl:block"
        />
      </section>

      <section className="mt-[107px] flex flex-col gap-[40px] rounded-xl bg-[#2E2322] p-[50px]">
        <h5 className="flex justify-end text-[20px]">
          7k Players
          <span className="inline-flex h-3 w-3 rounded-full bg-[#9F0808]"></span>
        </h5>
        <div className="mb-[-100px] ml-[-180px] mt-[-100px] hidden lg:block">
          <img
            className="lg:h-[433px] lg:w-[1450px]"
            src="/images/image03.png"
          />
        </div>

        <div className="flex justify-end text-[20px]">
          <p className="w-[700px] text-right text-[20px]">
            The game is a survival adventure that requires the player to manage
            their character's hunger, thirst, and health while exploring the
            island for resources and materials to help them survive.
          </p>
        </div>
        <div className="flex justify-end gap-[20px]">
          <Link href="/games/apply/id=2_get">
            <button className="flex h-[44px] w-[210px] items-center justify-center rounded-lg bg-[#9F0808] px-[44px] py-[12px] text-[16px] text-base">
              Get it now
            </button>
          </Link>
          <Link href="/games/apply/id=2_more">
            <button className="flex h-[44px] w-[83px] items-center justify-center rounded-lg border border-white bg-transparent px-[24px] py-[12px] text-[16px]">
              More
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
