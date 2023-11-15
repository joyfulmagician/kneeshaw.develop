import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Games`,
  description: `${SITE_TITLE} - Games`,
};

export default function Game1_morePage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] px-[80px] text-white">
      <Header />

      <section className="mt-[146px] flex flex-col items-center">
        <h1 className="text-[40px] font-bold">Titan Saga: Chains of Kronos</h1>
        <img
          src="/images/aboutus_lineimage_01.svg"
          className="mt-[56px] w-[100px]"
        />
      </section>

      <section className="mt-[123px] flex justify-center text-center">
        <h3 className="w-[966px] text-[20px]">
          Enjoy exploring the diverse collection of games on the Kneeshaw Games,
          and may you find exciting experiences that match your interests and
          preferences.
        </h3>
      </section>

      <section className="mt-[100px] flex flex-col gap-[32px] bg-[#35322F] p-[48px]">
        <img src="/images/aboutus_lineimage_02.svg" className="w-[100px]" />
        <h1 className="mt-[21px] text-[40px]">Build a Royal House</h1>
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
        <div className="flex flex-wrap justify-center gap-[60px] 2xl:flex-row">
          <div className="flex h-[425px] w-[373px] flex-col">
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
          <div className="flex h-[425px] w-[373px] flex-col">
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
          <div className="flex h-[425px] w-[373px] flex-col">
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
          <div className="flex h-[425px] w-[373px] flex-col">
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
          <div className="flex h-[425px] w-[373px] flex-col">
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

      <section className="mt-[120px] text-[40px]">
        Features
        <img
          src="/images/aboutus_lineimage_02.svg"
          className="mt-[21px] w-[100px]"
        />
      </section>

      <section className="mt-[65px] flex flex-wrap border-[1px]">
        <div className="flex w-full flex-col gap-[30px] border-b-[1px] border-r-[1px] p-[30px] md:w-1/2">
          <img
            src="/images/lightening.png"
            className="h-[70px] object-scale-down object-left"
          />
          <h1 className="text-[30px]">Dynamic Lighting</h1>
          <p className="text-[20px]">
            As players venture through the intricate environments, they will
            witness the dynamic lighting system in action. Whether it's
            exploring ancient dungeons, wandering through dense forests, or
            traversing bustling cities, the lighting dynamically adjusts to
            create a truly atmospheric experience.
          </p>
        </div>
        <div className="flex w-full flex-col gap-[30px] border-b-[1px] p-[30px] md:w-1/2">
          <img
            src="/images/battle.png"
            className="h-[70px] object-scale-down object-left"
          />
          <h1 className="text-[30px]">Action Battle System</h1>
          <p className="text-[20px]">
            Visually stunning and immersive battlegrounds. Engage in dynamic,
            high-octane battles with dazzling animations and explosive special
            effects. Whether you're facing off against colossal bosses or
            engaging in intense skirmishes with hordes of enemies, every fight
            feels like an epic showdown.
          </p>
        </div>
        <div className="flex w-full flex-col gap-[30px] border-r-[1px] p-[30px] md:w-1/2">
          <img
            src="/images/custom.png"
            className="h-[70px] object-scale-down object-left"
          />
          <h1 className="text-[30px]">Customizable Equipments</h1>
          <p className="text-[20px]">
            With customizable equipment in TitanSaga, you have the freedom to
            craft a legendary hero whose gear matches their legend. Fine-tune
            your weaponry, amplify your defenses, and create a visual
            masterpiece that sets you apart from the rest. The possibilities are
            limitless, and the path to becoming an unstoppable force lies in
            your hands.
          </p>
        </div>
        <div className="flex w-full flex-col gap-[30px] border-t-[1px] border-[white] p-[30px] md:w-1/2">
          <img
            src="/images/monsters.png"
            className="h-[70px] object-scale-down object-left"
          />
          <h1 className="text-[30px]">Unique Enemies</h1>
          <p className="text-[20px]">
            Explore the far reaches of the game world and encounter enemies that
            challenge you both physically and mentally. Adapt to their combat
            styles, study their patterns, and exploit their vulnerabilities to
            gain the upper hand. Each encounter is an opportunity to showcase
            your strategic prowess and prove your worth as a formidable hero.
          </p>
        </div>
      </section>

      <section className="mt-[120px] flex flex-col items-center text-[40px] font-bold">
        Act 1: Progress
        <img
          src="/images/aboutus_lineimage_01.svg"
          className="mt-[21px] w-[100px]"
        />
      </section>

      <section className="mt-[120px] flex flex-wrap justify-center gap-[70px] px-[80px] xl:gap-[165px]">
        <img src="/images/chart01.png" />
        <img src="/images/chart02.png" />
        <img src="/images/chart03.png" />
        <img src="/images/chart04.png" />
        <img src="/images/chart05.png" />
        <img src="/images/chart06.png" />
        <img src="/images/chart07.png" />
        <img src="/images/chart08.png" />
      </section>

      <section className="mt-[160px] flex flex-col items-center text-[40px]">
        Explore Titan Saga’ Story
        <img
          src="/images/aboutus_lineimage_01.svg"
          className="mt-[21px] w-[100px]"
        />
      </section>

      <section className="mt-[86px] text-center text-[20px]">
        Unbeknownst to all, an ancient force has awakened. The elves have found
        their Titan. The very paragon of their race. He had crafted the first
        Elves in the times of old. The magic they once had, is beginning to
        return. The Elves will no longer need to bow to the Human’s Engineering
        marvels and steel.
        <br /> Human long knew they would never be able to use magic. Their
        titan had been sealed away for his great misdeed, but they were a people
        who looked forward. A large empire-wide guild of engineers, tinkers and
        scientists because of this humans had long been the most powerful race.
        <br />
        As magic begins a new, that will not last.
      </section>

      <section className="mt-[80px]">
        <img src="/images/video_01.png" className="z-0" />
        {/* <i className="fa-solid fa-play fa-2xl color-[#ffffff] z-1 mt-[-562px] object-center" /> */}
      </section>

      <section className="mt-[120px] flex flex-col gap-[40px] bg-[#35322F] p-[50px] text-center">
        <h1 className="text-[40px]">Credits</h1>
        <p className="text-[20px]">
          We kindly request that you credit any assets used from the Press Kit
          to Kneeshaw Games and provide a link back to our official website.
          <br />
          Should you require any additional information or have specific media
          requests, please don't hesitate to reach out to our dedicated press
          contact listed in the Press Kit. <br />
          Thank you for your support, and we look forward to seeing your
          coverage of TitanSaga!
        </p>
        <div className="flex justify-center">
          <button className="h-[52px] w-[200px] border-[1px] bg-[#AFD275]">
            Download Press Kit
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
