import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Games`,
  description: `${SITE_TITLE} - Games`,
};

export default function Game1_getmorePage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] px-[80px] text-white">
      <Header />

      <section className="mt-[146px] flex justify-center">
        <h1 className="text-[40px] font-bold">Titan Saga: Chains of Kronos</h1>
      </section>

      <section className="mt-[123px] flex justify-center text-center">
        <h3 className="w-[966px] text-[20px]">
          Enjoy exploring the diverse collection of games on the Kneeshaw Games,
          and may you find exciting experiences that match your interests and
          preferences.
        </h3>
      </section>

      <section className="mt-[100px] flex flex-col gap-[32px] bg-[#35322F] p-[48px]">
        <h1 className="text-[40px]">Build a Royal House</h1>
        <div className="text-[20px]">
          <p>
            In Titan Saga, players can explore a vast and diverse world filled
            with hidden secrets and treasures. They can also recruit a team of
            powerful heroes with unique abilities and skills, which can be
            leveled up and customized to suit their play style. The game also
            features challenging boss battles and a variety of quests and side
            missions to keep players engaged.
          </p>
          <p>
            Overall, Titan Saga aims to offer an engaging and immersive RPG
            experience for players who enjoy epic stories, deep gameplay
            mechanics, and beautiful visuals.
          </p>
          <p>
            Rebuild a fallen house, choose the strongest warriors in the land.
          </p>
        </div>
        <div className="flex flex-row gap-[32px]">
          <div className="flex h-full w-1/3 flex-col">
            <img
              src="/images/Axe_of_the_West.png"
              className="z-0 mb-[-100px] px-[36px]"
            />
            <div className="z-1 h-[300px] w-full justify-between bg-[#292929] px-[36px] text-center">
              <p className="mt-[150px] text-[24px]">The Axe of the West</p>
              <p className="text-[18px]">
                The retired hero of the Elven wars, experienced and wise
              </p>
            </div>
          </div>
          <div className="flex h-full w-1/3 flex-col">
            <img
              src="/images/Titan-Bond.png"
              className="z-0 mb-[-100px] px-[36px]"
            />
            <div className="z-1 h-[300px] w-full justify-between bg-[#292929] px-[36px] text-center">
              <p className="mt-[150px] text-[24px]">The Titan-Bond</p>
              <p className="text-[18px]">
                A young nobleman with a forsaken and destroyed house,
                desperately seeking to save his kingdom
              </p>
            </div>
          </div>
          <div className="flex h-full w-1/3 flex-col">
            <img
              src="/images/Arrow_of_the_Lake.png"
              className="z-0 mb-[-100px] px-[36px]"
            />
            <div className="z-1 h-[300px] w-full justify-between bg-[#292929] px-[36px] text-center">
              <p className="mt-[150px] text-[24px]">Arrow of the Lake</p>
              <p className="text-[18px]">
                A strong hearted Noble with the eye of an Eagle and a will of an
                Ox
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[32px]">
          <div className="flex h-full w-1/3 flex-col">
            <img
              src="/images/Sorcerer_of_Gems.png"
              className="z-0 mb-[-100px] px-[36px]"
            />
            <div className="z-1 h-[300px] w-full justify-between bg-[#292929] px-[36px] text-center">
              <p className="mt-[150px] text-[24px]">The Sorcerer of Gems</p>
              <p className="text-[18px]">
                A run away heiress with two powerful opposing elements, seeking
                adventure and her lost mother
              </p>
            </div>
          </div>
          <div className="flex h-full w-1/3 flex-col">
            <img
              src="/images/Dragon_Paladin.png"
              className="z-0 mb-[-100px] px-[36px]"
            />
            <div className="z-1 h-[300px] w-full justify-between bg-[#292929] px-[36px] text-center">
              <p className="mt-[150px] text-[24px]">The Dragon Paladin</p>
              <p className="text-[18px]">
                A Commoner clad in fireproof steel with an unquenchable thirst
                for dragon hunting
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[120px] text-[40px]">Features</section>
      <section className="mt-[86px] text-[40px]">Features</section>

      <Footer />
    </main>
  );
}
