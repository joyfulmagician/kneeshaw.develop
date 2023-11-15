import { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Games`,
  description: `${SITE_TITLE} - Games`,
};

export default function ApplyPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] px-[80px] text-white">
      <Header />

      <section className="mt-[76px]">
        <h1 className="text-[40px]">Popular Games</h1>
      </section>

      <section className="mt-[56px] flex h-[623px] flex-row gap-[80px] rounded-xl bg-[#3F3046] p-[50px]">
        <div className="flex w-1/2 flex-col gap-[10px]">
          <h5 className="text-[20px]">7K Players</h5>
          <img
            className="mb-[-70px] mt-[-70px] hidden object-scale-down lg:block"
            src="/images/image01.png"
          />
          <p>
            It is a turn-based RPG (role-playing game) that takes place in a
            fantasy world filled with magic and mythical creatures. The game
            features a deep and immersive story, with players taking on the role
            of a hero tasked with saving the world from destruction.
          </p>
          <div className="flex gap-[20px]">
            <Link href="/games/apply/id=1_get">
              <button className=" rounded-xl bg-[#B74AFF] px-[24px] py-[12px] text-base">
                Get it now
              </button>
            </Link>
            <Link href="/games/apply/id=1_more">
              <button className="rounded-xl border border-white bg-transparent px-[24px] py-[12px]">
                More
              </button>
            </Link>
          </div>
        </div>
        <img
          className="mt-[-150px] hidden w-1/2 object-scale-down lg:block"
          src="/images/image02.png"
        />
      </section>

      <section className="static mt-[107px] flex h-[623px] flex-col gap-[10px] rounded-xl bg-[#2E2322] p-[50px]">
        <h5 className="text-right text-[20px]">7K Players</h5>
        <div className="mb-[-100px] ml-[-150px] mt-[-50px] flex h-3/4 w-full justify-start object-scale-down">
          <img className="hidden lg:block" src="/images/image03.png" />
        </div>

        <div className="flex justify-end text-[20px]">
          <p className="w-[500px] text-right">
            The game is a survival adventure that requires the player to manage
            their character's hunger, thirst, and health while exploring the
            island for resources and materials to help them survive.
          </p>
        </div>
        <div className="flex justify-end gap-[20px]">
          <Link href="/games/apply/id=2_get">
            <button className=" rounded-xl bg-[#9F0808] px-[24px] py-[12px] text-base">
              Get it now
            </button>
          </Link>
          <Link href="/games/apply/id=2_more">
            <button className="rounded-xl border border-white bg-transparent px-[24px] py-[12px]">
              More
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
