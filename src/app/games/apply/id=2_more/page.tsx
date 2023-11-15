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
        <h1 className="text-[40px] font-bold">Old Salt</h1>
        <img
          src="/images/aboutus_lineimage_01.svg"
          className="mt-[56px] w-[100px]"
        />
      </section>

      <section className="mt-[93px] flex justify-center text-center">
        <h3 className="w-[966px] text-[20px]">
          2-4 Multiplayer Naval Strategy With No Reinforcements On The Way
        </h3>
      </section>

      <section className="mt-[100px] flex flex-col gap-[32px] bg-[#35322F] p-[48px]">
        <img src="/images/aboutus_lineimage_02.svg" className="w-[100px]" />
        <h1 className="mt-[21px] text-[40px]">Build a Royal House</h1>
        <div className="text-[20px]">
          <p>
            Embark on a gripping survival adventure in the captivating world of
            the early 19th century. Stranded on a deserted island as a sailor,
            you must navigate the treacherous waters of survival in Old Salt.
            <br />
            Engross yourself in a narrative that unfolds through journal entries
            and evocative flashbacks, providing a deeper connection to your
            character's plight. <br /> Embark on a memorable journey of
            survival, exploration, and self-discovery in "Old Salt" – the game
            that challenges your resilience and captivates your imagination.
            Choose your allegiance from a diverse lineup of six unique factions,
            each with its distinct play style, units, and abilities.
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
        <div className="flex flex-wrap justify-center gap-[32px] lg:flex-row">
          <div className="flex h-[425px] w-[400px] flex-col">
            <img
              src="/images/flag_01.png"
              className="z-0 mb-[-150px] px-[36px]"
            />
            <div className="z-1 h-[300px] w-full justify-between bg-[#292929] px-[36px] text-center">
              <p className="mt-[150px] text-[24px]">Forgotten</p>
            </div>
          </div>
          <div className="flex h-[425px] w-[400px] flex-col">
            <img
              src="/images/flag_02.png"
              className="z-0 mb-[-150px] px-[36px]"
            />
            <div className="z-1 h-[300px] w-full justify-between bg-[#292929] px-[36px] text-center">
              <p className="mt-[150px] text-[24px]">Eternal</p>
            </div>
          </div>
          <div className="flex h-[425px] w-[400px] flex-col">
            <img
              src="/images/flag_03.png"
              className="z-0 mb-[-150px] px-[36px]"
            />
            <div className="z-1 h-[300px] w-full justify-between bg-[#292929] px-[36px] text-center">
              <p className="mt-[150px] text-[24px]">Engineers</p>
            </div>
          </div>
          <div className="flex h-[425px] w-[400px] flex-col">
            <img
              src="/images/flag_04.png"
              className="z-0 mb-[-150px] px-[36px]"
            />
            <div className="z-1 h-[300px] w-full justify-between bg-[#292929] px-[36px] text-center">
              <p className="mt-[150px] text-[24px]">Bootleggers</p>
            </div>
          </div>
          <div className="flex h-[425px] w-[400px] flex-col">
            <img
              src="/images/flag_05.png"
              className="z-0 mb-[-150px] px-[36px]"
            />
            <div className="z-1 h-[300px] w-full justify-between bg-[#292929] px-[36px] text-center">
              <p className="mt-[150px] text-[24px]">Barbari ans</p>
            </div>
          </div>
          <div className="flex h-[425px] w-[400px] flex-col">
            <img
              src="/images/flag_06.png"
              className="z-0 mb-[-150px] px-[36px]"
            />
            <div className="z-1 h-[300px] w-full justify-between bg-[#292929] px-[36px] text-center">
              <p className="mt-[150px] text-[24px]">Elite</p>
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

      <section className="mt-[56px] flex flex-wrap border-[1px] xl:flex-row">
        <div className="flex w-full flex-col gap-[30px] border-[white] p-[30px] xl:w-1/3">
          <img
            src="/images/icon_01.png"
            className="h-[70px] object-scale-down object-left"
          />
          <h1 className="text-[30px]">Single Player Campaign</h1>
          <p className="text-[20px]">
            Immerse yourself on an epic journey through a richly crafted world.
            Experience a thrilling storyline, engaging characters, and
            challenging missions as you uncover the secrets of this immersive
            game. Whether you're a seasoned player or new to the genre, the
            single-player campaign offers an exciting adventure tailored to your
            skill level.
          </p>
        </div>
        <div className="flex w-full flex-col gap-[30px] border-y-[1px] border-[white] p-[30px] xl:w-1/3 xl:border-x-[1px]">
          <img
            src="/images/icon_02.png"
            className="h-[70px] object-scale-down object-left"
          />
          <h1 className="text-[30px]">Map Maker</h1>
          <p className="text-[20px]">
            Test your skills against players from around the world in intense
            online multiplayer matches. Engage in thrilling head-to-head
            battles, team-based skirmishes, or join larger-scale conflicts in
            massive multiplayer modes. Rise through the ranks, earn prestigious
            rewards, and become a renowned commander in the competitive online
            multiplayer arena.
          </p>
        </div>
        <div className="flex w-full flex-col gap-[30px] border-[white] p-[30px] xl:w-1/3">
          <img
            src="/images/icon_03.png"
            className="h-[70px] object-scale-down object-left"
          />
          <h1 className="text-[30px]">Multiplayer Matches</h1>
          <p className="text-[20px]">
            Craft intricate landscapes, set strategic chokepoints, and customize
            every detail to create the perfect environment for thrilling
            encounters. Share your creations with the community and challenge
            others to conquer your masterfully designed maps. Endless
            possibilities for both casual players and aspiring level designers
            to leave their mark on the game.
          </p>
        </div>
      </section>

      <section className="mt-[160px] flex flex-col items-center text-[40px]">
        Explore Old Salt’ Story
        <img
          src="/images/aboutus_lineimage_01.svg"
          className="mt-[56px] w-[100px]"
        />
      </section>

      <section className="mt-[56px] text-center text-[20px]">
        Old Salt features various gameplay mechanics, including crafting,
        building, and hunting, as well as day and night cycles, and weather
        effects. The player must explore the island and solve various puzzles
        and obstacles to progress further in the game. The story is told through
        various means, such as journal entries and flashbacks, which provide
        insight into the character's background and motivations. <br /> Old Salt
        is designed to provide a challenging and immersive survival experience
        for players who enjoy exploring and overcoming obstacles in a detailed
        and historically accurate environment.
      </section>

      <section className="mt-[80px]">
        <img src="/images/video_02.png" className="z-0" />
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
