import { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Aboutus`,
  description: `${SITE_TITLE} - Aboutus`,
};

export default function AboutUs() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#211D19] px-[80px] text-white">
      <Header />

      <section className="mt-[146px] flex flex-col items-center">
        <h1 className="text-[40px] font-bold">About Us</h1>
        <img
          src="/images/aboutus_lineimage_01.svg"
          className="mt-[56px] w-[100px]"
        />
      </section>

      <section className="mt-[91px] flex justify-center text-center">
        <h3 className="w-[966px] text-[20px]">
          Crafting unforgettable gaming experiences with innovative design and
          cutting-edge technology
        </h3>
      </section>

      <section className="mt-[160px] flex flex-row">
        <div className="w-1/2">
          <img src="/images/aboutus_lineimage_02.svg" className="w-[100px]" />
          <h1 className="mt-[19px] text-[40px] font-bold">
            What we're <br />
            creating
          </h1>
          <p className="text-[20px]">
            Kneeshaw Game Development is a leading game development company that
            specializes in creating immersive and engaging gaming experiences
            for players around the world. Based in the United Kingdom, Kneeshaw
            Game Development is known for its passion for gaming and its
            commitment to innovation, which has led to the creation of some of
            the most popular and successful games on the market.
          </p>
        </div>
        <div className="flex-center flex w-1/2">
          <img src="/images/aboutus_image_02.svg" className="ml-auto" />
          <img
            src="/images/aboutus_image_04.svg"
            className="mr-[-800px] mt-[-1000px]"
          />
          <img
            src="/images/aboutus_image_05.svg"
            className="ml-auto mt-[-400px]"
          />
        </div>
      </section>

      <section className="mt-[150px] flex flex-col items-center">
        <h1 className="text-center text-[40px] font-bold">
          Why choose us in
          <br />
          your game development?
        </h1>
        <img
          src="/images/aboutus_lineimage_01.svg"
          className="mt-[21px] w-[100px]"
        />
      </section>
      <section className="mt-[120px] flex h-[278px] justify-center gap-[50px]">
        <div className="flex w-[400px] flex-col gap-[30px]">
          <img
            src="/images/aboutus_icon_1.PNG"
            className="h-[68px] object-scale-down"
          />
          <h1 className="text-center text-[30px]">Innovation</h1>
          <p className="text-center text-[20px]">
            Our company uses innovative game development techniques and
            technologies.
          </p>
        </div>
        <div className="flex w-[400px] flex-col gap-[30px]">
          <img
            src="/images/aboutus_icon_2.PNG"
            className="h-[68px] object-scale-down"
          />
          <h1 className="text-center text-[30px]">Quality</h1>
          <p className="text-center text-[20px]">
            We prioritize quality in every aspect of game development, from art
            to programming to testing
          </p>
        </div>
        <div className="flex w-[400px] flex-col gap-[30px]">
          <img
            src="/images/aboutus_icon_3.PNG"
            className="h-[68px] object-scale-down"
          />
          <h1 className="text-center text-[30px]">Expertise</h1>
          <p className="text-center text-[20px]">
            5+ years experience in game development industry.
          </p>
        </div>
      </section>
      <section className="mt-[84px] flex h-[278px] justify-center gap-[50px]">
        <div className="flex w-[400px] flex-col gap-[30px]">
          <img
            src="/images/aboutus_icon_4.PNG"
            className="h-[68px] object-scale-down"
          />
          <h1 className="text-center text-[30px]">Support</h1>
          <p className="text-center text-[20px]">
            After the game is launched any updates, bugs, or marketing support,
            you can rely on our team.
          </p>
        </div>
        <div className="flex w-[400px] flex-col gap-[30px]">
          <img
            src="/images/aboutus_icon_5.PNG"
            className="h-[68px] object-scale-down"
          />
          <h1 className="text-center text-[30px]">Collaboration</h1>
          <p className="text-center text-[20px]">
            We’re committed to collaborating with our clients to ensure they get
            the game they want.
          </p>
        </div>
      </section>
      <section className="mt-[126px] flex flex-row">
        <div className="w-1/2">
          <img
            src="/images/aboutus_image_03.svg"
            className="ml-[-120px] w-[339px]"
          />
        </div>
        <div className="w-1/2">
          <img
            src="/images/aboutus_lineimage_03.svg"
            className="ml-auto object-right"
          />
          <h1 className="mt-[21px] text-right text-[40px] font-bold">
            Our mission
          </h1>
          <p className="mt-[50px] text-right text-[20px]">
            One of our main focuses is on creating games that are accessible to
            players of all skill levels. We believe that games should be fun and
            engaging for everyone, regardless of their experience with gaming,
            and we work hard to ensure that our games are easy to pick up and
            play while still providing a challenging and rewarding experience.
            <br />
            <br />
            In addition to creating our own original games, we also work with
            publishers and other developers to help bring their games to market.
            Our team has extensive experience in all aspects of game
            development, from concept and design to programming and marketing,
            and we are committed to helping our clients achieve success in the
            highly competitive gaming industry.
          </p>
        </div>
      </section>
      <section className="mt-[150px] flex flex-col items-center text-[40px] font-bold">
        Our Team
        <img
          src="/images/aboutus_lineimage_01.svg"
          className="mt-[21px] w-[100px]"
        />
      </section>

      <section className="mt-[108px] w-1/2 text-center text-[40px] font-bold">
        Kneeshaw Developments Team
      </section>
      <section className="mt-[40px] flex flex-row text-center">
        <div className="flex w-1/2 flex-col">
          <p className="text-[20px]">
            Kneeshaw Game Development is home to a team of experienced and
            dedicated professionals who are passionate about creating innovative
            and engaging games for players around the world. Our development
            team is made up of skilled programmers, designers, artists, and
            writers who work together to bring our games to life. With their
            expertise in various areas of game development, our team is able to
            tackle complex challenges and create games that are both fun to play
            and visually stunning.
          </p>
        </div>
        <div className="felx-row flex w-1/2 justify-center gap-[100px]">
          <div className="flex h-[208px] flex-col gap-[10px]">
            <img
              src="/images/avatar_01.png"
              className="h-[120px] object-scale-down"
            />
            <p className="text-[20px]">Michael Kneeshaw</p>
            <p className="text-[20px]">
              <i className="fa-solid fa-l fa-user-tie mr-[10px]" />
              Lead
            </p>
          </div>
          <div className="flex h-[208px] flex-col gap-[10px]">
            <img
              src="/images/avatar_02.png"
              className="h-[120px] object-scale-down"
            />
            <p className="text-[20px]">Aidan Abat</p>
            <p className="text-[20px]">
              <i className="fa-solid fa-l fa-user-gear mr-[10px]" />
              Developer
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[180px] flex flex-row justify-center px-[30px]">
        <div className="w-1/2">
          <img
            src="/images/aboutus_lineimage_02.svg"
            className="mt-[-30px] w-[100px]"
          />
          <h1 className="mt-[21px] text-[40px] font-bold">Contact Us</h1>
          <p className="mt-[80px] text-left text-[30px]">
            Turning Your Ideas and
            <br /> Fantasies Into Playable Games
          </p>
        </div>
        <div className="flex w-1/2 flex-col gap-[20px] bg-[#292929] p-[35px]">
          <p className="text-[20px]">Let us know about your project</p>
          <input
            className="h-[52px] w-full rounded-sm border-[1px] bg-[#292929] p-[5px]"
            placeholder="Full name*"
          />
          <input
            className="h-[52px] w-full rounded-sm border-[1px] bg-[#292929] p-[5px]"
            placeholder="Email Address*"
          />
          <input
            className="h-[165px] w-full rounded-sm border-[1px] bg-[#292929] p-[5px]"
            placeholder="Write your message"
          />
          <button className="h-[52px] bg-[#AFD275]">Send Message</button>
        </div>
      </section>
      <section className="mt-[38px] text-[20px]">Stalk us</section>
      <section className="felx-row mb-[20px] mt-[32px] flex gap-[20px]">
        <i className="fa-brands fa-xl fa-youtube" />
        <i className="fa-brands fa-xl fa-steam" />
        <i className="fa-brands fa-xl fa-reddit" />
        <i className="fa-solid fa-xl fa-bolt-lightning" />
        <i className="fa-brands fa-xl fa-discord" />
        <i className="fa-brands fa-xl fa-twitch" />
        <i className="fa-brands fa-xl fa-twitter" />
      </section>
      <Footer />
    </main>
  );
}
