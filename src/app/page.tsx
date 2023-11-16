import { Metadata } from "next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import GameView from "@/components/homepage/GameView";
import RoleSwitch from "@/components/homepage/RoleSwitch";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Landing`,
  description: `${SITE_TITLE} - Landing`,
};

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[#211D19]"
      style={{
        backgroundImage: "url('/images/homeback.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />

      <div className="border border-[#EDF1F3]" />

      <div className="m-[10px] flex flex-row-reverse font-light text-[#EDF1F3]">
        <i className="fa-solid fa-magnifying-glass cursor-pointer rounded-[9px] bg-[#4E3D38] p-[15px]"></i>
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
        <div className="grid grid-cols-12">
          <div className="col-span-9 border-[1px] border-[#E7717D]" />
          <div className="col-span-9 my-[30px] ml-[40px]">
            Welcome to Kneeshaw Developments, the premier gaming development
            website where you'll find the best games for gamers of all ages. Our
            passion for gaming is evident in every game we create, and we are
            dedicated to providing our players with immersive and engaging
            experiences that will keep them coming back for more.
          </div>
          <div className="col-start-1 col-end-5 border-[1px] border-[#E7717D]" />
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-9 col-end-13 border-[1px] border-[#E7717D]" />
          <div className="col-span-9 col-end-13 my-[30px] mr-[40px] text-right">
            Our game library features a wide range of games, from action-packed
            shooters and intense RPGs to casual puzzle games and family-friendly
            adventures. We have games for every platform, including PC, mobile,
            and console, and our developers are always working on new titles to
            keep our players entertained.
          </div>
          <div className="col-span-5 col-end-13 border-[1px] border-[#E7717D]" />
        </div>
      </section>

      <section className="mt-[150px] flex flex-col items-center gap-[99px]">
        <h2 className="text-[40px] font-light text-[#EDF1F3]">
          Enjoy our library of games
        </h2>

        <div className="mx-[40px] flex flex-row justify-between gap-[40px] rounded-[14px] bg-[#24201C] p-[40px] md:max-h-[500px] lg:pr-[50px] xl:pr-[80px]">
          <div className="flex w-[100%] flex-col gap-[40px] lg:w-[50%]">
            <h1 className="text-[56px] font-bold text-[#AFD275]">
              Titan Saga:
              <br />
              Chanins of Kronos
            </h1>

            <p className="text-[18px] font-light text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>

            <button className="mt-[40px] h-[52px] w-[159px] rounded-[10px] bg-[#AFD275] font-bold text-white">
              View More
            </button>
          </div>

          <div className="gird-rows-2 grid grid-flow-col gap-[40px]">
            <div className="col-span-2 row-span-2 hidden lg:flex">
              <img
                src="/images/library1.png"
                alt="library1.png"
                className="h-[420px] w-auto"
              />
            </div>

            <div className="hidden h-[190px] w-auto xl:flex">
              <img src="/images/library2.png" alt="library2.png" />
            </div>

            <div className="hidden h-[190px] w-auto xl:flex">
              <img src="/images/library3.png" alt="library3.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[40px]">
        <div className="mx-[80px] flex flex-row items-center justify-between gap-[10px]">
          <img
            src="/images/smallview1.png"
            alt="smallview1"
            className="max-h-[130px] max-w-[130px]"
          />
          <img
            src="/images/smallview2.png"
            alt="smallview2"
            className="max-h-[130px] max-w-[130px]"
          />
          <img
            src="/images/smallview3.png"
            alt="smallview3"
            className="hidden sm:flex"
          />
          <img
            src="/images/smallview4.png"
            alt="smallview4"
            className="hidden md:flex"
          />
          <img
            src="/images/smallview5.png"
            alt="smallview5"
            className="hidden lg:flex"
          />
          <img
            src="/images/smallview6.png"
            alt="smallview6"
            className="hidden lg:flex"
          />
          <img
            src="/images/smallview7.png"
            alt="smallview7"
            className="hidden xl:flex"
          />
        </div>

        <div className="mt-[75px] flex flex-row justify-center gap-[20px] text-[#E7717D]">
          {Array.from(Array(6).keys()).map((k) => (
            <div
              key={k}
              className="h-[14px] w-[14px] rounded-[10px] border border-[#E7717D]"
            />
          ))}
        </div>
      </section>

      <section className="mt-[200px]">
        <h2 className="mb-[100px] text-center text-[40px] font-light text-[#EDF1F3]">
          Stay up to date with the latest gaming news and updates
        </h2>

        <GameView />
      </section>

      <section className="mb-[100px] mt-[150px] flex flex-col items-center text-[#EDF1F3]">
        <h2 className="mb-[80px] text-center text-[40px] font-bold">
          Frequently Asked Questions
        </h2>

        <div className="flex w-[400px] flex-col gap-[20px] sm:w-[500px] md:w-[600px] lg:w-[880px] ">
          <Accordion
            type="single"
            collapsible
            className="rounded-[10px] bg-[#312C29]"
          >
            <AccordionItem
              value="item-1"
              className="rounded-[10px] border-[#312C29]"
            >
              <AccordionTrigger className="h-[72px] pr-[20px] text-[18px] font-light hover:no-underline">
                <div className="flex flex-row items-center justify-center">
                  <i className="fa-regular fa-circle-dot px-[20px] text-[#E7717D]"></i>
                  <p className="text-[18px] font-semibold text-[#EDF1F3]">
                    What is game development
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[5px]">
                <div className="ml-[17px] flex w-full flex-row items-center justify-between gap-[22px] rounded-[6px] px-[10px] py-[10px] pr-[50px]">
                  <img src="/images/line.png" alt="line" />
                  <div className="text-[15px] font-light text-[#EDF1F3]">
                    Game development is the process of creating video games. It
                    involves designing the game concept, creating the graphics
                    and sound effects, programming the game mechanics, and
                    testing the game to ensure it is fun and playable.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="rounded-[10px] bg-[#312C29]"
          >
            <AccordionItem
              value="item-1"
              className="rounded-[10px]  border-[#312C29]"
            >
              <AccordionTrigger className="h-[72px] pr-[20px] text-[18px] font-light hover:no-underline">
                <div className="flex flex-row items-center justify-center">
                  <i className="fa-regular fa-circle-dot px-[20px] text-[#E7717D]"></i>
                  <p className="text-[18px] font-semibold text-[#EDF1F3]">
                    What is game development
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[5px]">
                <div className="ml-[17px] flex w-full flex-row items-center justify-between gap-[22px] rounded-[6px] px-[10px] py-[10px] pr-[50px]">
                  <img src="/images/line.png" alt="line" />
                  <div className="text-[15px] font-light text-[#EDF1F3]">
                    Game development is the process of creating video games. It
                    involves designing the game concept, creating the graphics
                    and sound effects, programming the game mechanics, and
                    testing the game to ensure it is fun and playable.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="rounded-[10px] bg-[#312C29]"
          >
            <AccordionItem
              value="item-1"
              className="rounded-[10px]  border-[#312C29]"
            >
              <AccordionTrigger className="h-[72px] pr-[20px] text-[18px] font-light hover:no-underline">
                <div className="flex flex-row items-center justify-center">
                  <i className="fa-regular fa-circle-dot px-[20px] text-[#E7717D]"></i>
                  <p className="text-[18px] font-semibold text-[#EDF1F3]">
                    What is game development
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[5px]">
                <div className="ml-[17px] flex w-full flex-row items-center justify-between gap-[22px] rounded-[6px] px-[10px] py-[10px] pr-[50px]">
                  <img src="/images/line.png" alt="line" />
                  <div className="text-[15px] font-light text-[#EDF1F3]">
                    Game development is the process of creating video games. It
                    involves designing the game concept, creating the graphics
                    and sound effects, programming the game mechanics, and
                    testing the game to ensure it is fun and playable.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="rounded-[10px] bg-[#312C29]"
          >
            <AccordionItem
              value="item-1"
              className="rounded-[10px]  border-[#312C29]"
            >
              <AccordionTrigger className="h-[72px] pr-[20px] text-[18px] font-light hover:no-underline">
                <div className="flex flex-row items-center justify-center">
                  <i className="fa-regular fa-circle-dot px-[20px] text-[#E7717D]"></i>
                  <p className="text-[18px] font-semibold text-[#EDF1F3]">
                    What is game development
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[5px]">
                <div className="ml-[17px] flex w-full flex-row items-center justify-between gap-[22px] rounded-[6px] px-[10px] py-[10px] pr-[50px]">
                  <img src="/images/line.png" alt="line" />
                  <div className="text-[15px] font-light text-[#EDF1F3]">
                    Game development is the process of creating video games. It
                    involves designing the game concept, creating the graphics
                    and sound effects, programming the game mechanics, and
                    testing the game to ensure it is fun and playable.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="rounded-[10px] bg-[#312C29]"
          >
            <AccordionItem
              value="item-1"
              className="rounded-[10px]  border-[#312C29]"
            >
              <AccordionTrigger className="h-[72px] pr-[20px] text-[18px] font-light hover:no-underline">
                <div className="flex flex-row items-center justify-center">
                  <i className="fa-regular fa-circle-dot px-[20px] text-[#E7717D]"></i>
                  <p className="text-[18px] font-semibold text-[#EDF1F3]">
                    What is game development
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[5px]">
                <div className="ml-[17px] flex w-full flex-row items-center justify-between gap-[22px] rounded-[6px] px-[10px] py-[10px] pr-[50px]">
                  <img src="/images/line.png" alt="line" />
                  <div className="text-[15px] font-light text-[#EDF1F3]">
                    Game development is the process of creating video games. It
                    involves designing the game concept, creating the graphics
                    and sound effects, programming the game mechanics, and
                    testing the game to ensure it is fun and playable.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="rounded-[10px] bg-[#312C29]"
          >
            <AccordionItem
              value="item-1"
              className="rounded-[10px]  border-[#312C29]"
            >
              <AccordionTrigger className="h-[72px] pr-[20px] text-[18px] font-light hover:no-underline">
                <div className="flex flex-row items-center justify-center">
                  <i className="fa-regular fa-circle-dot px-[20px] text-[#E7717D]"></i>
                  <p className="text-[18px] font-semibold text-[#EDF1F3]">
                    What is game development
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[5px]">
                <div className="ml-[17px] flex w-full flex-row items-center justify-between gap-[22px] rounded-[6px] px-[10px] py-[10px] pr-[50px]">
                  <img src="/images/line.png" alt="line" />
                  <div className="text-[15px] font-light text-[#EDF1F3]">
                    Game development is the process of creating video games. It
                    involves designing the game concept, creating the graphics
                    and sound effects, programming the game mechanics, and
                    testing the game to ensure it is fun and playable.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </main>
  );
}
